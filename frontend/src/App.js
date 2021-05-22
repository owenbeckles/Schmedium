// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './store/index'
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";

const AppWrapper = () => {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}> 
      <App /> 
    </Provider>
  )
}

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
    </Switch>
  );
}

export default AppWrapper;
