// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import CreatingUserStories from './components/CreatingUserStories';
import Homepage from './components/Homepage';
import UserStories from './components/UserStories';
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/create'>
            <CreatingUserStories />
          </Route>
          <Route path='/stories'>
            <UserStories />
          </Route>
          {/* //Ternary for session user on homepage */}
        </Switch>
      )}
    </>
  );
}

export default App;