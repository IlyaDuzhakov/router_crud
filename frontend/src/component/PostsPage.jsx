import React, { useEffect } from 'react';
import PostList from './PostList'
import { Link } from 'react-router-dom'

const PostsPage = ({posts, getPosts}) => {
      useEffect(() => {
    getPosts(); 
  }, []);

  return (
    <div className='post-page'>
      <div className="create-btn-wrapper">
        <button className='btn-post'><Link to='/posts/new'>Создать пост</Link></button>
        </div>
        <PostList posts={posts}/>
    </div>
  )
}

export default PostsPage