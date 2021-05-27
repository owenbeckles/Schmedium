import React from 'react';
import { Link } from 'react-router-dom';
import { editStory, getUserStories } from '../../store/userstories';
import './EditStory.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function EditStory () {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState(null);
    const { id } = useParams();
    const story = useSelector((state) => state.userStories[id])
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        console.log("Use Effect working")
        dispatch(getUserStories())
    }, [])

    useEffect(() => {
        if (story) {
            setTitle(story.title);
            setContent(story.content);
        }
    }, [story])

    const handleClick = async(e) => {
        e.preventDefault();
        const data = {
            title,
            content,
            userId,
            id: story.id,
        }
        await dispatch(editStory(data))
        history.push(`/stories`)
    }

    return (
        <div className='create-story-container'>
        <body></body>
        <div className='story'>
        <form>
            <label>
                <input className='story-title' type='text' placeholder='Title...' value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </label>
        </form>
        <form>
            <label>
                <textarea className='story-content' type='text' placeholder='Story...' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </label>
        </form>
        </div>
        <div className='button-container'>
                <button className='confirm-edit-button' type="button" onClick= { handleClick }>
                    Confirm Edit
                    
                </button>
            <Link to='/stories' className='create-story-buttons'>My Stories</Link>
        </div>
    </div>
    )
}

export default EditStory;