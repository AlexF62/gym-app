import React from 'react';
import ReactDom from 'react-dom';
import './styles/style.scss';
import { App } from './App';

const app = <App />;
ReactDom.render(app, document.getElementById('root'));
