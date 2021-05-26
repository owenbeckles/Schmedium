// import story from '../../../backend/db/models/story';
import { csrfFetch } from './csrf';

const INDIVIDUAL_STORY = 'session/individualstory'
const DELETE_STORY = 'session/deletestories'

const individualstory = (story) => {
    return {
        type: INDIVIDUAL_STORY,
        payload: story,
    }
}

const deletestories = () => {
    return {
        type: DELETE_STORY,
    }
}

export const getIndividualStory = () => async (dispatch) => {
    const response = await csrfFetch('/api/userstories', {
        method: 'GET'
    });
    const data = await response.json();
    dispatch(individualstory(data));
}

export const deleteStory = () => async (dispatch) => {
    const response = await csrfFetch('/api/individualstory', {
        method: 'DELETE',
    })
    dispatch(deletestories());
    return response;
}

const individualStoryReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case INDIVIDUAL_STORY:
            newState = Object.assign({}, state);
            action.payload.forEach(story => {
                newState[story.id] = story;
            });
            return newState;
        case DELETE_STORY:
            newState = Object.assign({}, state);
            newState[story.id] = null;
            return newState;
        default:
            return state;
    }
}

export default individualStoryReducer;