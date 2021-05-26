import React from 'react';
import './UserStories.css';
import { Link } from 'react-router-dom';
import { getUserStories } from '../../store/userstories';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function UserStories () {
    const dispatch = useDispatch();
    const allStories = useSelector((state) => state.userStories);
    const storiesArray = Object.values(allStories);
    
    useEffect(() => {
        dispatch(getUserStories());
    }, [])
    
    if (!allStories) return null;
    
    return (
        <div className='user-story-container'>
            {storiesArray.map(story => {
                return <h1 className='individual-stories'>{story.title}</h1>
            })}
            <body></body>
            <Link to='/create' className='new-story-button'>New Story</Link>
        </div>
    )
}

export default UserStories;