import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { crateState } from './state/reducers';
import css from '!style!css!sass!./stylesheets/global.scss';
import '!style!css!sass!milligram/dist/milligram.css';
import App from './App';

const store = createStore(crateState, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f	
));

Provider.childContextTypes = {
	store: React.PropTypes.object
};

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)
