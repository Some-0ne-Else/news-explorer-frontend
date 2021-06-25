import React, { useCallback } from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUser';
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
  const [showSearchResults, setShowSearchResults] = React.useState(false);
  const [lastSearchRequest, setLastSearchRequest] = React.useState('');
  const history = useHistory();

  React.useEffect(() => {
    function checkSizeOfWindow() {
      return window.innerWidth <= 510 ? setIsMobileMenu(true) : setIsMobileMenu(false);
    }
    checkSizeOfWindow();
    window.addEventListener('resize', checkSizeOfWindow);
    return () => { window.removeEventListener('resize', checkSizeOfWindow); };
  }, [isMobileMenu]);

  function closeAnyPopup() {
    setIsLoginPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsInfoTooltipOpen(false);
    setIsMobileMenuOpen(false);
    // eslint-disable-next-line no-use-before-define
    removeEventListeners();
  }
  function closePopupAtOverlayClick(evt) {
    if (this === evt.target) {
      closeAnyPopup();
    }
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
  function handleMobileMenuClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', closePopupAtOverlayClick);
  }
  const handleEscPress = useCallback((evt) => {
    if (evt.key === 'Escape') {
      closeAnyPopup();
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener('keyup', handleEscPress, false);
    return () => {
      document.removeEventListener('keyup', handleEscPress, false);
    };
  }, [handleEscPress]);

  function handleLogin(name) {
    setCurrentUser(name);
    closeAnyPopup();
  }
  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      api.checkToken(localStorage.getItem('jwt')).then((res) => {
        handleLogin(res.data.name);
      });
    }
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

  function handleSignUp() {
    setIsSignUpPopupOpen(false);
    openInfoTooltip();
  }

  function handleLogout() {
    setCurrentUser('');
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchResult');
    localStorage.removeItem('lastSearchRequest');
    setShowSearchResults(false);
    history.push('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main
              isMobileMenu={isMobileMenu}
              handleMobileMenuClick={handleMobileMenuClick}
              loginButtonHandler={loginButtonHandler}
              handleLogout={handleLogout}
              showSearchResults={showSearchResults}
              setShowSearchResults={setShowSearchResults}
              lastSearchRequest={lastSearchRequest}
              setLastSearchRequest={setLastSearchRequest}
            />
          </Route>
          <ProtectedRoute
            path="/saved-news"
            currentUser={currentUser}
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
          handleLogout={handleLogout}
          onClose={closeAnyPopup}
          loginButtonHandler={loginButtonHandler}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
