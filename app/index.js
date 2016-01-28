import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { crateState } from './state/reducers';
import App from './App';

const store = createStore(crateState);

Provider.childContextTypes = {
	store: React.PropTypes.object
};

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)
