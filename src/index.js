import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
<BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
