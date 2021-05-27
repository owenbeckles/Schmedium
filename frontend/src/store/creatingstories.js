import { csrfFetch } from './csrf';

const CREATE_STORY = 'session/createstory'

const createstory = (data) => {
    return {
        type: CREATE_STORY,
        payload: data,
    }
}

export const createUserStories = (story) => async (dispatch) => {
    const { title, content, userId } = story;
    const res = await csrfFetch('/api/create', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
            userId,
        })
    });
    const data = await res.json();
    dispatch(createstory(data));
    return res;
}

const initialState = { stories: null }

const creatingStoriesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_STORY:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return state; 
    }
}

export default creatingStoriesReducer;