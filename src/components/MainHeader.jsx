import React from 'react'
import classes from './MainHeader.module.css'
import { MdMessage, MdPostAdd } from 'react-icons/md'
import { Link } from 'react-router-dom';

export default function MainHeader({ onOpenNewPostModal }) {
  return (
    <header className={classes.header}>
        <h1 className={classes.logo}> 
            <MdMessage />
        React Poster </h1>
        <p>
            <Link to="/create-post" className={classes.button} onClick={onOpenNewPostModal}>
                <MdPostAdd size={18}/>
                New Post
            </Link>
        </p>
    </header>
  );
}
