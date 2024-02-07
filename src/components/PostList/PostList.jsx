import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styles from './PostList.module.css';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

const PostList = () => {
  const { data: posts, isLoading, isError } = useQuery('posts', fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts?.map((post) => (
        <div key={post.id} className={styles.post}>
          <h3 className={styles.postTitle}>{post.id}: {post.title}</h3>
          <p className={styles.postBody}>{post.body.length > 100 ? post.body.slice(0, 100) + '...' : post.body}</p>
          <Link to={`/post/${post.id}`} className={styles.postLink}>View</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
