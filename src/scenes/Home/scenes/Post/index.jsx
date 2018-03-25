import React from 'react';
import Post from './components/post';

const listOfPosts = () => {
  const posts = [1, 2, 3, 4, 5, 6];
  return posts.map(p => <Post key={p} />);
};

const ListPosts = () => (
  <section>
    {listOfPosts()}
  </section>
);

export default ListPosts;
