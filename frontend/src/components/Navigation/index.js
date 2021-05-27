// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import { demoUser } from '../../store/session';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demo = async (e) => {
    e.preventDefault();
    await dispatch(demoUser());

    if (sessionUser) {
      return (
        <Redirect to-='/' />
      )
    }
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
      <div>
        <button type='button' onClick={demo}>
          Demo
        </button>
      </div>
        <LoginFormModal />
        <NavLink class="sign-up-button" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink class="fas fa-home" exact to="/"></NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;