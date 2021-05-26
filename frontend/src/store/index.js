import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import sessionReducer from './session';
import thunk from 'redux-thunk';
import userStoriesReducer from './userstories';
import creatingStoriesReducer from './creatingstories';



export const rootReducer = combineReducers({
  session: sessionReducer,
  userStories: userStoriesReducer,
  createStories: creatingStoriesReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };
  
export default configureStore;