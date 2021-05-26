import React from 'react';
import { getIndividualStory } from '../../store/creatingstories';
import { getUserStories } from '../../store/userstories';
import './IndividualStory.css';
import { deleteStory } from '../../store/individualstory';
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
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
        dispatch(getUserStories());
    }, [])

    const handleClick = async(e) => {
        e.preventDefault()
        const data = { 
            title, 
            content, 
            userId 
        }
        await dispatch(deleteStory(data));
        history.push('/stories');
    }
    
    if (!story) return null;
    
    return (
        <div>
            <div className='story-container'>
                <h1 className='story-title'>{story.title}</h1>
                <h2 className='story-content'>{story.content}</h2>
            </div>
            <div className='button-container'>
                <button className='user-edit-button' type='submit'>Edit</button>
                <button onClick={handleClick} className='user-delete-button' type='submit'>Delete</button>
            </div>
        </div>
    )
}

export default IndividualStory;