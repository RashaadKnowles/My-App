import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";


function PostForm({ onNewPost,getPosts }) {
  const [user,token] = useAuth();
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:5000/api/posttofeed', { comment:content,comment_about_post_id:user.id }, {
      headers: {
        Authorization: "Bearer " + token,
    }})
      .then((response) => {
        onNewPost(response.data);
        setContent('');
        getPosts()
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Post</h2>
      <div>
        <label htmlFor="text">Content</label>
        <textarea
          id="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function PostList({ posts }) {
  console.log(posts)
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.comment}</p>
          <p>{post.comment_about_post?.email}</p>
        </div>
      ))}
    </div>
  );
}

function CommentSection(){
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = event => {
    setNewComment(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div>
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={newComment} onChange={handleCommentChange} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

function DispatcherFeed() {
  const [user, token] = useAuth();
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    axios.get('http://127.0.0.1:5000/api/posttofeed', {
      headers: {
        Authorization: "Bearer " + token,
    }}) 
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    getPosts()
  }, []);

  const handleNewPost = (post) => {
   
  }

  return (
    <div>
      <PostForm onNewPost={handleNewPost} getPosts = {getPosts} />
      <PostList posts={posts} />
      <CommentSection />
    </div>
  );
}

export default DispatcherFeed;