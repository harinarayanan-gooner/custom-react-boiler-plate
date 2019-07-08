import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React with hot reload';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
