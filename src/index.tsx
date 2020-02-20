import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

const ROOT_ELEMENT_ID = 'root';
const ROOT_NODE = document.getElementById(ROOT_ELEMENT_ID) as HTMLElement;

ReactDOM.render(<Root/>, ROOT_NODE);
