import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Fonts
import './fonts/AvenirNextLTPro-Bold.otf';
import './fonts/AvenirNextLTPro-It.otf';
import './fonts/AvenirNextLTPro-Regular.otf';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
