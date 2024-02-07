import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import styles from './PostDetails.module.css';

const fetchPost = async (postId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return response.json();
};

const PostDetails = () => {
  const { postId } = useParams();
  const { data: post, isLoading, isError } = useQuery(['post', postId], () => fetchPost(postId));

  if (isLoading) return <div>Loading...</div>;
  if (isError || !post || !post.id || !post.title || !post.body) return <div>Error fetching data</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Post Details</h1>
      <h2>{post.id}: {post.title}</h2>
      <p className={styles.description}>{post.body}</p>
      <Link to="/" className={styles.link}>Back</Link>
    </div>
  );
};

export default PostDetails;
