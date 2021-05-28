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
    const user = useSelector((state) => state.session.user)
    const storiesArray = Object.values(allStories);

    if(!user) history.push('/signup')

    const handleClick = (id) => {
        history.push(`/stories/${id}`);
    }
    
    useEffect(() => {
        console.log("Getting user stories")
        dispatch(getUserStories());
    }, [])
    
    if (!allStories) return null;
    
    return (
        <div>
            <h1 className='story-header'>Stories</h1>
            <div className='individual-story-layout'>    
                <div className='user-story-container'>
                    {storiesArray.map(story => {
                        return (
                        <h1 className='individual-stories-title' onClick={() => handleClick(story.id)}>
                            {story.title}
                            {/* <h2 className='individual-stories-content'>
                                {story.createdAt}
                            </h2> */}
                        </h1> 
                        )     
                    })}
                    
                </div>
            </div>
            <div>
                <body></body>
                <div className='new-story-button-container'>
                <Link to='/create' className='new-story-button'>New Story</Link>
                </div>
            </div>
        </div>
    )
}

export default UserStories;