import { csrfFetch } from './csrf';

const CREATE_STORY = 'session/createstory'

const createstory = (data) => {
    return {
        type: CREATE_STORY,
        payload: data,
    }
}

export const createUserStories = (story) => async (dispatch) => {
    const { title, content } = story;
    const res = await csrfFetch('api/createstory', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
        });
    });
    const data = await Response.json();
    dispatch(createstory(data.story));
    return res;
}

const creatingStoriesReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case CREATE_STORY:
            newState = 
    }
}