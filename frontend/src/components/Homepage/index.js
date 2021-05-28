import React from 'react';
import { Link } from 'react-router-dom';
import { getUserStories } from '../../store/userstories';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Homepage.css';


function Homepage () {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const allStories = useSelector((state) => state.userStories);
    const storiesArray = Object.values(allStories);
    
    const handleClick = (id) => {
        // Click
        if (!user) {
            history.push('/signup');
        } else {
            history.push(`/stories/${id}`);
        }
    }
    
    useEffect(() => {
        dispatch(getUserStories());
    }, [])
    
    if (!allStories) return null;
    
    return (
        <div>
            <div>
            <header>
    <h1 className='homepage-title'>
      Schmedium.
    </h1>
  <nav am-layout="horizontal">
  <a href="#">    </a>
  <a href="#">    </a>
  <a href="#">    </a>
  <a href="#">    </a>
  </nav>
</header>
            </div>
            <div className='homepage-story-layout'>
            <div className='story-container'>
                {storiesArray.map(story => {
                    return <h1 className='trending-stories' onClick={() => handleClick(story.id)}>{story.title}</h1>
                })}
            </div>
            </div>
            <div className='homepage-footer-container'>
                <footer>
                    <h1></h1>
                </footer>
            </div>
        </div>
                )
}

export default Homepage;