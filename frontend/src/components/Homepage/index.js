import React from 'react';
import { Link } from 'react-router-dom';
import { getUserStories } from '../../store/userstories';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Homepage.css';


function Homepage () {
    const dispatch = useDispatch();
    const allStories = useSelector((state) => state.userStories);
    const storiesArray = Object.values(allStories);
    
    useEffect(() => {
        dispatch(getUserStories());
    }, [])
    
    if (!allStories) return null;
    
    return (
        <div className='story-container'>
            {storiesArray.map(story => {
                return <h1 className='trending-stories'>{story.title}</h1>
            })}
            {/* <body></body>
            <Link to='/create' className='new-story-button'>New Story</Link> */}
            {/* <div class="hold">
            <div class="header">
                <div class="container">
                <div id="logo">
                </div>
                <ul class="nav">
                    <li><a href="#">Click 1</a></li>
                    <li><a href="#">Click 2</a></li>
                    <li><a href="#">Click 3</a></li>
                    <li><a href="#">Click 4</a></li>
                </ul>
                </div>
            </div>
            </div>
            <div class="section">
            <div class="slider">
                <div class="container slidercontent">
                <h1 class="hero">Hello</h1>
                <h2 class="hero">Hello</h2>
                <div class="call"><span>Hello</span></div>
                </div>
            </div>
            </div>
            <div class="section">
            <div class="container">
                <div class="col four">
                <h1 class="icon">[]</h1>
                <h1 class="service">Hello</h1>
                <p>Okay</p>
                </div>
                <div class="col four">
                <h1 class="icon">[]</h1>
                <h1 class="service">Wow</h1>
                <p>Wow wow wow wow wow wow wow wow wow</p>
                </div>
                <div class="responsivegroup"></div>
                <div class="col four">
                <h1 class="icon">[]</h1>
                <h1 class="service">Wow</h1>
                <p>Wow wow wow wow wow wow wow wow wow wow wow</p>
                </div>
                <div class="col four">
                <h1 class="icon">[]</h1>
                <h1 class="service">Wow</h1>
                <p>Wow wow wow wow wow wow wow</p>
                </div>
                <div class="group"></div>
            </div>
            </div>
            <div class="section bg">
            <div class="container">
                <h1>Wow wow</h1>
                <h2>Wow wow wow!</h2>
                <div class="col three bg nopad pointer">
                <div class="imgholder"></div>
                <h1 class="feature">Hello</h1>
                <p>Wow wow</p>
                </div>
                <div class="col three bg nopad pointer">
                <div class="imgholder"></div>
                <h1 class="feature">Wow</h1>
                <p>Wow wow wow</p>
                </div>
                <div class="col three bg nopad pointer">
                <div class="imgholder"></div>
                <h1 class="feature">Wow</h1>
                <p>Wow wow wow</p>
                </div>
                <div class="group margin"></div>
                <div class="col three bg nopad pointer">
                <div class="imgholder"></div>
                <h1 class="feature">Wow</h1>
                <p>Wow wow</p>
                </div>
                <div class="col three bg nopad pointer">
                <div class="imgholder"></div>
                <h1 class="feature">Wow</h1>
                <p>Wow wow wow</p>
                </div>
                <div class="col three bg nopad pointer">
                <div class="imgholder"></div>
                <h1 class="feature">Wow</h1>
                <p>Wow wow wow</p>
                </div>
                <div class="group"></div>
            </div>
            </div>
            <div class="section">
            <div class="container">
                <h1>Title</h1>
                <h2>Title</h2>
                <div class="col three">
                <h1 class="icon side">[]</h1>
                <h1 class="feature side">User</h1>
                <p class="side">Content</p>
                </div>
                <div class="col three">
                <h1 class="icon side">[]</h1>
                <h1 class="feature side">Story</h1>
                <p class="side">Content</p>
                </div>
                <div class="col three">
                <h1 class="icon side">[]</h1>
                <h1 class="feature side">Story</h1>
                <p class="side">Content</p>
                </div>
                <div class="group margin"></div>
                <div class="col three">
                <h1 class="icon side">[]</h1>
                <h1 class="feature side">Story</h1>
                <p class="side">Content</p>
                </div>
                <div class="col three">
                <h1 class="icon side">[]</h1>
                <h1 class="feature side">Story</h1>
                <p class="side">Content</p>
                </div>
                <div class="col three">
                <h1 class="icon side">[]</h1>
                <h1 class="feature side">Story</h1>
                <p class="side">Content</p>
                </div>
                <div class="group margin"></div>
            </div>
            </div>
            <div class="section bg">
            <div class="container">
                <h1>Title</h1>
                <h2>Title</h2>
                <div class="col two bg margin extrapad">
                <h1 class="icon side">[]</h1>
                <span class="feature side">Story</span><span class="side"> - Author</span>
                <p class="side">Content</p>
                </div>
                <div class="col two bg margin extrapad">
                <h1 class="icon side">[]</h1>
                <span class="feature side">Story</span><span class="side"> - Author</span>
                <p class="side">Content</p>
                </div>
                <div class="group margin"></div>
                <div class="col two bg margin extrapad">
                <h1 class="icon side">[]</h1>
                <span class="feature side">Story</span><span class="side"> - Author</span>
                <p class="side">Content</p>
                </div>
                <div class="col two bg margin extrapad">
                <h1 class="icon side">[]</h1>
                <span class="feature side">Story</span><span class="side"> - Author</span>
                <p class="side">Content</p>
                </div>
                <div class="group"></div>
            </div>
            </div>
            <div class="section">
            <div class="container">
                <div class="col two">
                <h1 class="icon">[]</h1>
                <h1 class="service">Story</h1>
                <p>Wow wow wow wow wow wow wow wow wow wow wow wow wow</p>
                </div>
                <div class="col two">
                <h1 class="icon">[]</h1>
                <h1 class="service">Wow</h1>
                <p>Wow wow wow wow wow wow wow wow wow</p>
                </div>
                <div class="group"></div>
            </div>
            </div>
            <div class="section">
            <div class="container">
                <h1 class="reset">Terrible.</h1>
            </div>
            </div>
            <div class="section">
            <div class="footer">
                <div class="container white">
                <div class="col four left">
                    <h1>What?</h1>
                    <p>So that's it. This started out as 20 minutes of making fun of modern web dev. Then it turned into a few hours of it.</p>
                    <p>I hope you've enjoyed looking at every modern website ever.</p>
                    <p>I don't actually hate this style as long as the content is meaningful. In fact, I think this type of design is pretty cool and effective.</p>
                </div>
                <div class="col four left">
                    <h1>How?</h1>
                    <p>CSS3 and HTML. JS for header shrinking; optional. Site works perfectly with JS disabled (another gripe of mine with modern web dev).</p>
                    <p>Only external libraries are GFonts.</p>
                    <p>Moderately responsive, should work on anything modern.</p>
                </div>
                <div class="col four left">
                    <h1>Why?</h1>
                    <p>Many popular HTML themes have thousands of lines of HTML, thousands of lines of CSS and several JS plugins on every page amounting to tens of thousands of lines of JavaScript.</p>
                    <p>I fail to see a valid reason for this, particularly the horrendous line counts that are usually due to unused features or badly designed code.</p>
                </div>
                <div class="col four left">
                    <h1>Who?</h1>
                    <p>I'm Andrew.</p>
                    <p>You can get in touch with me through <a href="http://atunnecliffe.com">http://atunnecliffe.com</a> or <a href="mailto:andrew@atunnecliffe.com">emailing me</a>.</p>
                </div>
                <div class="group"></div>
                </div>
            </div>
            </div> */}
        </div>
                )
}

export default Homepage;