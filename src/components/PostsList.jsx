import React, { useEffect, useState } from 'react';
import Post from './Post';
import styles from './PostsList.module.css'

const PostsList = () => {
    const [activePosts, setActivePosts ] = useState([]);
    const [isFetching, setIsFetching ] = useState(false);

    let postsView = (
        <ul className={styles.posts}>
            {activePosts.map( (post) => {
                return (
                    <Post 
                        key={post.author} 
                        author={post.author} 
                        text={post.text}
                    />)
            })}
        </ul>
    )

    let noPostsView = (
        <div>
            <h2> There are no posts yet.</h2>
            <p> Start adding some! </p>
        </div>
    )

    useEffect( () => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            setActivePosts(resData.posts);
            setIsFetching(false);
        }
        fetchPosts();
    }, [] ) 

/*     function onSubmitNewPost(newPost) {
        const URL = 'http://localhost:8080/posts'
        const requestParams = {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(URL, requestParams)
        setActivePosts( (existingPosts) => [newPost, ...existingPosts])
        } */
    return (
      <>
        { !isFetching && activePosts.length > 0 && postsView}
        { !isFetching && activePosts.length === 0 && noPostsView }
        { isFetching && <p> Loading posts... </p>}
      </>
    );
}

export default PostsList;
