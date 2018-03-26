import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faComments from '@fortawesome/fontawesome-free-solid/faComments';
import { Card, Icon, Avatar } from 'antd';
import './post.css';

const { Meta } = Card;

const CoverTemplate = () => (
  <div className="post__card-cover">
    <FontAwesomeIcon icon={faComments} /> 344 comment(s)
  </div>
);

const Post = () => (
  <Card
    style={{ width: 300 }}
    cover={<CoverTemplate />}
    actions={[<Icon type="delete" />, <Icon type="edit" />, <div><Icon type="like-o" /> 88 </div>, <div><Icon type="dislike-o" /> 32 </div>]}
  >
    <Meta
      avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon="user" />}
      title="Use Redux on highly scalable JavaScript apps"
      description="Building a large scale application can be problematic, and as it grows it becomes more and more..."
    />
  </Card>
  // <article style={{ border: '1px solid black' }}>
  //   <h5>REACT</h5>
  //   <h1>React is Awesome!!</h1>
  //   <p>
  //     Submited 2 hours ago by Jean Silva - 2 comment(s)
  //   </p>
  //   <p>
  //     I’ve been working on very large web applications for the past few years, starting from ground zero and, with a dozen other developers, making them scale up to now be used by millions of people. And sometimes, if you didn’t start with a good folder structure, it can become difficult to keep your code organized.
  //   </p>
  //   <ul>
  //     <li><a href="/1/edit">Edit</a></li>
  //     <li><a href="/1/delete">Remove</a></li>
  //   </ul>
  //   <ul>
  //     <li><a href="/1/upvote">Up Vote</a></li>
  //     <li><a href="/1/downvote">Down Vote</a></li>
  //   </ul>
  // </article>
);

export default Post;
