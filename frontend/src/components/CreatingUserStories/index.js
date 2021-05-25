import React from 'react';
import './CreatingUserStories.css';
import { Link } from 'react-router-dom';

function CreatingUserStories () {
    return (
        <div class='buttons'>
        <button class='create-story' type="submit">Create</button>
        <Link to='/stories' class='return-story'>Return to My Stories</Link>
        </div>
    )
}

export default CreatingUserStories;