import { createStore } from 'redux';

const initialState = {
	pressed: false,
	opened: false,
	title: 'Default Title',
	ifFetching: false,
	prize: [],
	lastUpdated: ''
}

export const crateState = (state = initialState, action) => {
	switch (action.type) {
		case 'PRESS_CRATE':
			// const newId = state.crate[state.crate.length-1] + 1;
			return Object.assign({}, state, {
				pressed: true,
				title: 'It is pressed!'
			})
		case 'DEFAULT_CRATE':
			return Object.assign({}, state, {
				pressed: false,
				title: 'It is NOT pressed!'
			})
		case 'NEW_TITLE':
			return Object.assign({}, state, {
				title: 'New Title!'
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