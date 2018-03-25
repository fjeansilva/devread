import React from 'react';

const Post = () => (
  <article style={{ border: '1px solid black' }}>
    <h5>REACT</h5>
    <h1>React is Awesome!!</h1>
    <p>
      Submited 2 hours ago by Jean Silva - 2 comment(s)
    </p>
    <p>
      I’ve been working on very large web applications for the past few years, starting from ground zero and, with a dozen other developers, making them scale up to now be used by millions of people. And sometimes, if you didn’t start with a good folder structure, it can become difficult to keep your code organized.
    </p>
    <ul>
      <li><a href="/1/edit">Edit</a></li>
      <li><a href="/1/delete">Remove</a></li>
    </ul>
    <ul>
      <li><a href="/1/upvote">Up Vote</a></li>
      <li><a href="/1/downvote">Down Vote</a></li>
    </ul>
  </article>
);

export default Post;
