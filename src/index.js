/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import CreatePost from './scenes/Home/scenes/Post/scenes/Create';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <CreatePost />,
  document.getElementById('root'),
);
registerServiceWorker();
