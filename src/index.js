/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import EditPost from './scenes/Home/scenes/Post/scenes/Edit';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <EditPost />,
  document.getElementById('root'),
);
registerServiceWorker();
