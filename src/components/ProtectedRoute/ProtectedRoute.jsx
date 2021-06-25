/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route>
    {() => (props.currentUser ? <Component {...props} /> : <Redirect to="/" />)}
  </Route>
);

export default ProtectedRoute;
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired,
};
