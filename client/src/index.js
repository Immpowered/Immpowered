import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { cyan700, pinkA200, grey100, grey300, grey400, grey500,
    white, teal400 } from 'material-ui/styles/colors';
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: teal400,
        // primary2Color: cyan700,
        // primary3Color: grey400,
        // accent1Color: pinkA200,
        // accent2Color: grey100,
        // accent3Color: grey500,
        // textColor: white,
        alternateTextColor: white,
        // canvasColor: white,
        // borderColor: grey300
    },
    appBar: {
        height: 50,
    },
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
