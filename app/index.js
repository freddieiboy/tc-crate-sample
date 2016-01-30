import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux'
import { crateState } from './state/reducers';
import css from '!style!css!sass!./stylesheets/global.scss';
import '!style!css!sass!milligram/dist/milligram.css';
import App from './App';

const store = createStore(crateState, compose(
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
