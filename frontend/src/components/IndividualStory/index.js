import React from 'react';
import { getIndividualStory } from '../../store/creatingstories';
import { Link } from 'react-router-dom';
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
        dispatch(deleteStory(data));
        history.push('/stories');
    }

    const returnClick = async(e) => {
        e.preventDefault();
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