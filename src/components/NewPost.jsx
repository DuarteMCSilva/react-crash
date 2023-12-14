import React, { useState } from 'react';
import styles from './NewPost.module.css';
import Modal from './Modal';
import { Link } from 'react-router-dom';

function NewPost({onCancel, onSubmit}) {
  const [enteredAuthor, setEnteredAuthor ] = useState('Author');
       
  const [enteredText, setEnteredText ] = useState('your opinion');

  function onChangeTextHandler(event) {
      setEnteredText(event.target.value);
  }

  function onChangeAuthorHandler(event) {
      setEnteredAuthor(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();
    const postData = {
      text: enteredText,
      author: enteredAuthor
    }
    onSubmit(postData)
    onCancel();
  }

  return (
    <Modal>
      <form className={styles.form} onSubmit={submitHandler}>
          <p>
              <label htmlFor="body">Text</label>
              <textarea id="body" required rows={3} onChange={onChangeTextHandler}></textarea>
          </p>
          <p>
              <label htmlFor="name"> Your name </label>
              <input type="text" id='name' required onChange={onChangeAuthorHandler}/>
          </p>
          <p className={styles.actions}>
            <Link to=".." type='button'>Cancel</Link>
            <button>Submit</button>

          </p>
      </form>
    </Modal>
  )
};

export default NewPost