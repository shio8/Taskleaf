import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded',() => {
  ReactDOM.render(
    React.createElement('div', null, 'Hello Wolrd!'),
    document.body.appendChild(document.createElement('div')),
  );
});
