// import story from '../../../backend/db/models/story';
import { csrfFetch } from './csrf';

const INDIVIDUAL_STORY = 'session/individualstory'


const individualstory = (story) => {
    return {
        type: INDIVIDUAL_STORY,
        payload: story,
    }
}


export const getIndividualStory = () => async (dispatch) => {
    const response = await csrfFetch('/api/userstories', {
        method: 'GET'
    });
    const data = await response.json();
    dispatch(individualstory(data));
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
        default:
            return state;
    }
}

export default individualStoryReducer;