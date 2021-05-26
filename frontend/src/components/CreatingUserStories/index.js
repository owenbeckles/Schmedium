import React from 'react';
import './CreatingUserStories.css';
import { Link } from 'react-router-dom';

function CreatingUserStories () {
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
            <button className='create-story-buttons' type="submit">Create</button>
            <Link to='/stories' className='create-story-buttons'>My Stories</Link>
            </div>
        </div>
    )
}

export default CreatingUserStories;