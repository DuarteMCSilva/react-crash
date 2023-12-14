import React from 'react';
import styles from './Post.module.css'


function Post({author, text}) {
    return (
        <div className={styles.post}>
            <p className={styles.author}> {author} </p>
            <p className={styles.text}> {text} </p>
        </div>
    );
}

export default Post;
