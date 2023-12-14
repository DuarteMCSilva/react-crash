import React from 'react';
import Post from './Post';
import styles from './PostsList.module.css'
import { useLoaderData } from 'react-router-dom';

const PostsList = () => {
    const activePosts = useLoaderData();

    let postsView = (
        <ul className={styles.posts}>
            {activePosts.map( (post) => {
                return (
                    <Post 
                        key={post.author}
                        id={post.id}
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
    return (
      <>
        { activePosts.length > 0 && postsView}
        { activePosts.length === 0 && noPostsView }
      </>
    );
}

export default PostsList;
