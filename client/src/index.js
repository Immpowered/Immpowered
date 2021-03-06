import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { pinkA200, grey100, grey300, grey400, grey500, grey900,
    white, teal400, orange300} from 'material-ui/styles/colors';
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: teal400,
        primary2Color: orange300,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: grey900,
        alternateTextColor: orange300,
        canvasColor: white,
        borderColor: grey300
    },
    appBar: {
        height: 50,
    },
    raisedButton: {
        primaryTextColor: white
    },
    card: {
        titleColor: grey500
    }

});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
