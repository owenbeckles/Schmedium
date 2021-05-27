import { csrfFetch } from './csrf';

const ALL_STORIES = 'session/allstories';
const REMOVE_USER = 'session/removeUser';
const DELETE_STORY = 'session/deletestories';
const CREATE_STORY = 'session/createstory';
const EDIT_STORY = 'session/editstories';

const allStories = (data) => {
  return {
    type: ALL_STORIES,
    payload: data,
  };
};

const editstories = (story) => {
  return {
    type: EDIT_STORY,
    payload: story,
  }
}

const deletestories = (story) => {
  return {
      type: DELETE_STORY,
      payload: story,
  }
}

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
  dispatch(allStories(data));
};

export const deleteStory = (story) => async (dispatch) => {
  console.log('This is data', story)
  const response = await csrfFetch(`/api/individualstory/${story.id}`, {
      method: 'DELETE',
  })
  dispatch(deletestories(story));
  return response;
}

export const editStory = (story) => async (dispatch) => {
  const { title, content, userId } = story;
  console.log("==========",story);
  const response = await csrfFetch(`/api/individualstory/${story.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content,
      userId
    })
  });
  const edit = await response.json();
  dispatch(editstories(edit));
  return response;
}

const userStoriesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case ALL_STORIES:
      newState = Object.assign({}, state);
      action.payload.forEach(story => {
          newState[story.id] = story;
      });
      return newState;
    case DELETE_STORY:
      newState = {...state}
      delete newState[action.payload.id];
      return newState;
    case EDIT_STORY:
      newState = {...state};
      newState[action.payload.id] = action.payload
      return newState;
    default:
      return state;
  }
};

export default userStoriesReducer;