import React from 'react';
import './CreatingUserStories.css';
import { createUserStories } from '../../store/creatingstories';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function CreatingUserStories () {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((state) => state.session.user ? state.session.user : null);

    useEffect(() => {
        if (user) {
            setUserId(user.id);
        }
    }, [user])

    const handleClick = async(e) => {
        e.preventDefault()
        const data = { 
            title, 
            content, 
            userId 
        }
        console.log(data);
        await dispatch(createUserStories(data))
        history.push('/stories');
    }


    return (
        <div className='create-story-container'>
            <body></body>
            <div className='story'>
            <form>
                <label>
                    <input className='story-title' type='text' value={title} placeholder='Title...' onChange={(e) => setTitle(e.target.value)}></input>
                </label>
            </form>
            <form>
                <label>
                    <textarea className='story-content' type='text' value={content} placeholder='Story...' onChange={(e) => setContent(e.target.value)}></textarea>
                </label>
            </form>
            </div>
            <div className='button-container'>
                    <button onClick={ handleClick } className='create-story-buttons' type="submit">Create</button>
                <Link to='/stories' className='create-story-buttons'>My Stories</Link>
            </div>
        </div>
    )
}

export default CreatingUserStories;