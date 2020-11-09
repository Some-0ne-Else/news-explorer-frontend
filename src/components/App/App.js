import React, { useCallback } from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import PopupLogin from '../PopupLogin/PopupLogin';
import PopupSignup from '../PopupSignup/PopupSignup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [isMobileMenu, setIsMobileMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedin] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    function checkSizeOfWindow() {
      if (window.innerWidth <= 400) {
        setIsMobileMenu(true);
      } else {
        setIsMobileMenu(false);
      }
    }
    checkSizeOfWindow();
    window.addEventListener('resize', checkSizeOfWindow);
  }, [isMobileMenu]);

  function handleMobileMenuClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  const handleEscPress = useCallback((evt) => {
    if (evt.code === 'Escape') {
      closeAnyPopup();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscPress, false);
    return () => {
      document.removeEventListener('keydown', handleEscPress, false);
    };
  }, [handleEscPress]);

  function closePopupAtOverlayClick(evt) {
    if (this === evt.target) {
      closeAnyPopup();
    }
  }

  function loginButtonHandler() {
    closeAnyPopup();
    setIsLoginPopupOpen(true);
    const popupWithLogin = document.querySelector('.popup_login');
    popupWithLogin.addEventListener('click', closePopupAtOverlayClick);
  }

  function registerButtonHandler() {
    closeAnyPopup();
    setIsSignUpPopupOpen(true);
    const popupWithSignup = document.querySelector('.popup_sign-up');
    popupWithSignup.addEventListener('click', closePopupAtOverlayClick);
  }

  function openInfoTooltip() {
    setInfoTooltipOpen(true);
    const infoTooltipPopup = document.querySelector('.info-tooltip');
    infoTooltipPopup.addEventListener('click', closePopupAtOverlayClick);
  }

  function handleLogin() {
    setIsLoggedin(true);
    closeAnyPopup();
  }
  function handleSignUp() {
    setIsSignUpPopupOpen(false);
    openInfoTooltip();
  }
  function handleLogout() {
    setIsLoggedin(false);
    history.push('/');
  }

  function closeAnyPopup() {
    setIsLoginPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setInfoTooltipOpen(false);
    removeEventListeners();
  }
  function removeEventListeners() {
    const popupWithLogin = document.querySelector('.popup_login');
    const popupWithSignup = document.querySelector('.popup_sign-up');
    const infoTooltipPopup = document.querySelector('.info-tooltip');
    popupWithLogin.removeEventListener('click', closePopupAtOverlayClick);
    popupWithSignup.removeEventListener('click', closePopupAtOverlayClick);
    infoTooltipPopup.removeEventListener('click', closePopupAtOverlayClick);
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main
            isLoggedIn={isLoggedIn}
            isMobileMenu={isMobileMenu}
            isMobileMenuOpen={isMobileMenuOpen}
            handleMobileMenuClick={handleMobileMenuClick}
            loginButtonHandler={loginButtonHandler}
            handleLogout={handleLogout}
          />
        </Route>
        <Route path="/saved-news">
          <SavedNews isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </Route>
      </Switch>
      <PopupLogin
        isLoginPopupOpen={isLoginPopupOpen}
        registerButtonHandler={registerButtonHandler}
        onClose={closeAnyPopup}
        onSubmit={handleLogin}
      />
      <PopupSignup
        isSignUpPopupOpen={isSignUpPopupOpen}
        loginButtonHandler={loginButtonHandler}
        onClose={closeAnyPopup}
        onSubmit={handleSignUp}
      />
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAnyPopup}
        onLogin={loginButtonHandler}
      />
    </div>
  );
}

export default App;
