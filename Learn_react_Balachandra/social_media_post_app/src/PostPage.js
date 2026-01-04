import React from 'react'
import { useParams } from 'react-router-dom';

const PostPage = ({ posts, handleDelete}) => {
  const {id} = useParams();

  const post = posts.find(post => (post.id).toString()=== id);

  return (
    <main className='PostPage'>
      <div className="post">
        {post &&
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <button className="deleteButton" onClick={() => handleDelete(post.id)}>Delete post</button>
          </>
        }
      </div>
    </main>
  )
}

export default PostPage