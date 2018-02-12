import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import GiphyApp from './GiphyApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GiphyApp />, document.getElementById('root'));
registerServiceWorker();
