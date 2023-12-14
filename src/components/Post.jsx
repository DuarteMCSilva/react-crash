import React from 'react';
import styles from './Post.module.css'
import { Link } from 'react-router-dom';


function Post({id, author, text}) {
    return (
        <div className={styles.post}>
            <Link to={id}>
                <p className={styles.author}> {author} </p>
                <p className={styles.text}> {text} </p>
            </Link>
        </div>
    );
}

export default Post;
