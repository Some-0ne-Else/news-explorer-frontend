import React, { useCallback } from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUser';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import PopupLogin from '../PopupLogin/PopupLogin';
import PopupSignup from '../PopupSignup/PopupSignup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import MobileMenu from '../MobileMenu/MobileMenu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import api from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = React.useState('');
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isMobileMenu, setIsMobileMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSavedNews, setIsSavedNews] = React.useState(false);
  const [isLoggedIn, setIsLoggedin] = React.useState(false);
  const [lastSearchRequest, setLastSearchRequest] = React.useState('');

  const history = useHistory();

  React.useEffect(() => {
    function checkSizeOfWindow() {
      if (window.innerWidth <= 510) {
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
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', closePopupAtOverlayClick);
  }
  const handleEscPress = useCallback((evt) => {
    if (evt.code === 'Escape') {
      closeAnyPopup();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    document.addEventListener('keyup', handleEscPress, false);
    return () => {
      document.removeEventListener('keyup', handleEscPress, false);
    };
  }, [handleEscPress]);

  function closePopupAtOverlayClick(evt) {
    if (this === evt.target) {
      closeAnyPopup();
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      api.checkToken(localStorage.getItem('jwt')).then((res) => {
        handleLogin(res.data.name);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loginButtonHandler() {
    closeAnyPopup();
    setIsLoginPopupOpen(true);
    const popupWithLogin = document.querySelector('.popup_login');
    popupWithLogin.addEventListener('mousedown', closePopupAtOverlayClick);
  }

  function registerButtonHandler() {
    closeAnyPopup();
    setIsSignUpPopupOpen(true);
    const popupWithSignup = document.querySelector('.popup_sign-up');
    popupWithSignup.addEventListener('mousedown', closePopupAtOverlayClick);
  }

  function openInfoTooltip() {
    setIsInfoTooltipOpen(true);
    const infoTooltipPopup = document.querySelector('.info-tooltip');
    infoTooltipPopup.addEventListener('mousedown', closePopupAtOverlayClick);
  }

  function handleLogin(name) {
    setIsLoggedin(true);
    setCurrentUser(name);
    closeAnyPopup();
  }

  function handleSignUp() {
    setIsSignUpPopupOpen(false);
    openInfoTooltip();
  }

  function handleLogout() {
    setIsLoggedin(false);
    setCurrentUser('');
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchResult');
    history.push('/');
  }

  function closeAnyPopup() {
    setIsLoginPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsInfoTooltipOpen(false);
    setIsMobileMenuOpen(false);
    removeEventListeners();
  }

  function ActivateSavedNews() {
    setIsSavedNews(true);
  }
  function DeactivateSavedNews() {
    setIsSavedNews(false);
  }
  function removeEventListeners() {
    const popupWithLogin = document.querySelector('.popup_login');
    const popupWithSignup = document.querySelector('.popup_sign-up');
    const infoTooltipPopup = document.querySelector('.info-tooltip');
    const mobileMenu = document.querySelector('.mobile-menu');
    popupWithLogin.removeEventListener('click', closePopupAtOverlayClick);
    popupWithSignup.removeEventListener('click', closePopupAtOverlayClick);
    infoTooltipPopup.removeEventListener('click', closePopupAtOverlayClick);
    mobileMenu.removeEventListener('click', closePopupAtOverlayClick);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main
              DeactivateSavedNews={DeactivateSavedNews}
              isLoggedIn={isLoggedIn}
              isMobileMenu={isMobileMenu}
              handleMobileMenuClick={handleMobileMenuClick}
              loginButtonHandler={loginButtonHandler}
              handleLogout={handleLogout}
              lastSearchRequest={lastSearchRequest}
              setLastSearchRequest={setLastSearchRequest}
            />
          </Route>
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
            path="/saved-news"
            isSavedNews={isSavedNews}
            ActivateSavedNews={ActivateSavedNews}
            isMobileMenu={isMobileMenu}
            handleMobileMenuClick={handleMobileMenuClick}
            handleLogout={handleLogout}
            component={SavedNews}
          />
        </Switch>
        <PopupLogin
          isLoginPopupOpen={isLoginPopupOpen}
          registerButtonHandler={registerButtonHandler}
          onClose={closeAnyPopup}
          onLogin={handleLogin}
        />
        <PopupSignup
          isSignUpPopupOpen={isSignUpPopupOpen}
          loginButtonHandler={loginButtonHandler}
          onClose={closeAnyPopup}
          handleSignUp={handleSignUp}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAnyPopup}
          onLogin={loginButtonHandler}
        />
        <MobileMenu
          isOpen={isMobileMenuOpen}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          onClose={closeAnyPopup}
          isSavedNews={isSavedNews}
          loginButtonHandler={loginButtonHandler}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
