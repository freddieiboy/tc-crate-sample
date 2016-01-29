import { createStore } from 'redux';
import deepFreeze from 'deep-freeze';
import expect from 'expect';

const initialState = {
	pressed: false,
	opened: false
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

const crateState = (state = initialState, action) => {
	switch (action.type) {
		case 'PRESS_CRATE':
			// const newId = state.crate[state.crate.length-1] + 1;
			return [
				...state, 
				{
					pressed: true,
					opened: state.opened
				}
			]
		case 'DEFAULT_CRATE':
			return [
				...state,
				{
					pressed: false,
					opened: state.opened
				}
			]
		default:
			return state;
	}
}

// TEST these

const testPressed = () => {
	const stateBefore = initialState;
	const action = {
		type: 'PRESS_CRATE',
		pressed: true,
		opened: false
	}
	const stateAfter = [
		{
			pressed: true,
			opened: false
		}
	];

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(
		crateState(stateBefore, action)
	).toEqual(stateAfter);
};

testPressed();
console.log('All tests passed.');


export {
	initialState,
	crateState
}