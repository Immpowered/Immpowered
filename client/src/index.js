import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

// Import order for CSS
// import './index.css';
// import './App/App.css';
// import './App/TopNav/TopNav.css';
// import './App/ContentContainer/ContentContainer.css';
// import './App/ContentContainer/PickBackground/PickBackground.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
