import React from 'react';
import styles from './NewPost.module.css';

function NewPost(props) {
  return (
    <form className={styles.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={props.onChangeBodyInput}></textarea>
        </p>
        <p>
            <label htmlFor="name"> Your name </label>
            <input type="text" id='name' required onChange={props.onChangeAuthorInput}/>
        </p>
    </form>
  )
};

export default NewPost