import React from 'react';
import { getIndividualStory } from '../../store/creatingstories';
import { Link } from 'react-router-dom';
import { getUserStories } from '../../store/userstories';
import './IndividualStory.css';
import { deleteStory } from '../../store/userstories';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function IndividualStory () {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState(null);
    const { id } = useParams();
    const story = useSelector((state) => state.userStories[id])
    const user = useSelector((state) => state.session[id])
    const dispatch = useDispatch();
    const history = useHistory();
    
    console.log('This is story', story)

    useEffect(() => {
        // Dispatch is thunk
        dispatch(getUserStories());
    }, [])

    const handleClick = async(e) => {
        await dispatch(deleteStory(story));
        history.push('/stories');
    }

    const editClick = async(e) => {
        history.push(`/edit/${story.id}`)
    }

    const returnClick = async(e) => {
        e.preventDefault();
        history.push('/stories');
    }
    
    if (!story) return null;
    
    return (
        <div>
            <div className='individual-story-container'>
                <h1 className='individual-story-title'>{story.title}</h1>
                <h2 className='individual-story-content'>{story.content}</h2>
            </div>
            {/* <div>
                <footer>
                    Created By: {`${user.firstname}`}
                </footer>
            </div> */}
            <div className='button-container'>
                <button className='user-edit-button' type='submit' onClick={ editClick }>Edit</button>
                <button onClick={handleClick} className='user-delete-button' type='submit'>Delete</button>
            </div>
            <div onClick={returnClick} className='return-container'>
                <button className='return-page' type='submit'>
                    My Stories
                    <Link to='/stories'></Link>
                </button>
            </div>
        </div>
    )
}

export default IndividualStory;