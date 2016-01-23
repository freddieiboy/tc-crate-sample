import { createStore } from 'redux';

const initialState = {
	crate: [1],
	crateById: {
		1: {
			id: 1,
			pressed: false,
			opened: false
		}
	}
}

const crateState = (state = initialState, action) => {
	switch (action.type) {
		case 'PRESS_CRATE':
			const newId = state.crate[state.crate.length-1] + 1;
			return Object.assign({}, state, {
				crate: state.crate.concat(newId),
				crateById: {
					...state.crateById,
					[newId]: {
						id: newId,
						pressed: true,
						opened: false
					}
				}
			})
		default:
			return state;
	}
}

export {
	initialState,
	crateState
}