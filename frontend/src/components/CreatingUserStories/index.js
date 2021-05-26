import React from 'react';
import './CreatingUserStories.css';
import { createUserStories } from '../../store/creatingstories';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CreatingUserStories () {
    const dispatch = useDispatch();
    const history = useHistory();


    const handleClick = async(e) => {
        await dispatch(createUserStories(CreatingUserStories))
        history.push('/stories');
    }


    return (
        <div className='create-story-container'>
            <body></body>
            <div className='story'>
            <form>
                <label>
                    <input className='story-title' type='text' placeholder='Title...'></input>
                </label>
            </form>
            <form>
                <label>
                    <textarea className='story-content' type='text' placeholder='Story...'></textarea>
                </label>
            </form>
            </div>
            <div className='button-container'>
                <form onSubmit={ handleClick }>
                    <button className='create-story-buttons' type="submit">Create</button>
                </form>
                <Link to='/stories' className='create-story-buttons'>My Stories</Link>
            </div>
        </div>
    )
}

export default CreatingUserStories;