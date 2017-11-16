import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.js';
import { AppContainer } from 'react-hot-loader';

require('./index.html');

// Create app
const container = document.querySelector('#app-container');

//render app

ReactDom.render(
    <AppContainer>
        <App />
    </AppContainer>
    ,container
);

//hot module reloading

if(module.hot){
    module.hot.accept('./components/App', () => {
        ReactDom.render(
            <AppContainer>
                <App />
            </AppContainer>
            ,container
        )
    })
}