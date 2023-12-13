import React, { useState } from 'react';
import Post from './Post';
import styles from './PostsList.module.css'
import NewPost from './NewPost';
import Modal from './Modal';

const PostsList = () => {
    const posts = [ 
        {name: "Dudas", comment: "React is nice!"},
        {name: "Max", comment: "you are missing out!"}]
    
    const [isModalVisible, setIsModalVisible ] = useState(true);
    const [enteredAuthor, setEnteredAuthor ] = useState('Author');
       
    const [enteredBody, setEnteredBody ] = useState('your opinion');

    function closeModalHandler(event) {
        setIsModalVisible(false);
    }

    function onTextInputHandler(event) {
        setEnteredBody(event.target.value);
    }

    function onAuthorInputHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    let modalContent = (
        <Modal onClose={closeModalHandler}>
            <NewPost 
                onChangeBodyInput={onTextInputHandler} 
                onChangeAuthorInput={onAuthorInputHandler}
            />
        </Modal>
        )
    return (
      <> 
        {isModalVisible && modalContent}
        <li className={styles.posts}>
            <Post author={enteredAuthor} text={enteredBody}/>
            <Post author={posts[1].name} text={posts[1].comment}/>
        </li>
      </>
        
    );
}

export default PostsList;


/* { posts.forEach( (post) => {
  return (<Post user={post.name} text={post.comment}></Post>)
  })} */