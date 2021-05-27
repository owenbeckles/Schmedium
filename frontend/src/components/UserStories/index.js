import React from 'react';
import './UserStories.css';
import { Link } from 'react-router-dom';
import { getUserStories } from '../../store/userstories';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function UserStories () {
    const dispatch = useDispatch();
    const history = useHistory();
    const allStories = useSelector((state) => state.userStories);
    const storiesArray = Object.values(allStories);

    const handleClick = (id) => {
        // Click
        history.push(`/stories/${id}`);
    }
    
    useEffect(() => {
        console.log("Getting user stories")
        dispatch(getUserStories());
    }, [])
    
    if (!allStories) return null;
    
    return (
        <div className='user-story-container'>
            <h1>Stories</h1>
            {storiesArray.map(story => {
                return <h1 className='individual-stories' onClick={() => handleClick(story.id)}>{story.title}</h1>
            })}
            <body></body>
            <Link to='/create' className='new-story-button'>New Story</Link>
        </div>
    )
}

export default UserStories;