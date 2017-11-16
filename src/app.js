import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.js';
import { AppContainer } from 'react-hot-loader';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer, compose(
   applyMiddleware(thunk),
   window.devToolsExtension ?  window.devToolsExtension() : f => f
));

require('./index.html');

// Create app
const container = document.querySelector('#app-container');

//render app

ReactDom.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>
    ,container
);

//hot module reloading

if(module.hot){
    module.hot.accept('./components/App', () => {
        ReactDom.render(
            <AppContainer>
                <Provider store={store}>
                    <App />
                </Provider>
            </AppContainer>
            ,container
        )
    })
}