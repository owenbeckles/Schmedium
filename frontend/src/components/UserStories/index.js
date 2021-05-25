import React from 'react';
import './UserStories.css';
import { Link } from 'react-router-dom';

function UserStories () {
    return (
        <div class='buttons'>
        <Link to='/create' class='new-story'>New Story</Link>
        {/* <Link to='/' class='return-story'>Return to My Stories</Link> */}
        </div>
    )
}

export default UserStories;