import { createStore } from 'redux';
import deepFreeze from 'deep-freeze';
import expect from 'expect';

const initialState = {
	pressed: false,
	opened: false,
	title: 'Default Title'
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
		default:
			return state;
	}
}


// const initialState = {
// 	crate: [1],
// 	crateById: {
// 		1: {
// 			pressed: false,
// 			opened: false
// 		}
// 	}
// }

// TEST these

// const testPressed = () => {
// 	const stateBefore = initialState;
// 	const action = {
// 		type: 'PRESS_CRATE',
// 		pressed: true,
// 		opened: false
// 	}
// 	const stateAfter = [
// 		{
// 			pressed: true,
// 			opened: false
// 		}
// 	];

// 	deepFreeze(stateBefore);
// 	deepFreeze(action);

// 	expect(
// 		crateState(stateBefore, action)
// 	).toEqual(stateAfter);
// };

// // testPressed();
// console.log('All tests passed.');