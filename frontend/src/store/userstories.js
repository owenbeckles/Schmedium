import { csrfFetch } from './csrf';

const ALL_STORIES = 'session/allstories';
const REMOVE_USER = 'session/removeUser';

const allStories = (data) => {
  return {
    type: ALL_STORIES,
    payload: data,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const getUserStories = () => async (dispatch) => {
  const response = await csrfFetch('/api/userstories', {
    method: 'GET'
  });
  const data = await response.json();
  console.log(data, 'This is data');
  dispatch(allStories(data));
};

const userStoriesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case ALL_STORIES:
      newState = Object.assign({}, state);
      action.payload.forEach(story => {
          newState[story.id] = story;
      });
      return newState;
    default:
      return state;
  }
};

export default userStoriesReducer;