import { createStore } from 'redux';

const initialState = {
	pressed: false,
	opened: false,
	title: 'Tiny Crate',
	isFetching: false,
	prize: [],
	lastUpdated: ''
}

export const crateState = (state = initialState, action) => {
	switch (action.type) {
		case 'PRESS_CRATE':
			// const newId = state.crate[state.crate.length-1] + 1;
			return Object.assign({}, state, {
				pressed: true,
			})
		case 'DEFAULT_CRATE':
			return Object.assign({}, state, {
				pressed: false,
			})
		case 'REQUEST_PRIZE':
			return Object.assign({}, state, {
				isFetching: true
			})
		case 'RECEIVE_PRIZE':
			return Object.assign({}, state, {
				isFetching: false,
				prize: action.prizes,
				lastUpdated: action.receivedAt
			})
		default:
			return state;
	}
}