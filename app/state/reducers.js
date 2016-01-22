import { createStore } from 'redux';

const initialSate = {
	// crateState: [0],
	id: 0,
	pressed: false
}

// var action = {
// 	CRATE_POP: 'CRATE_POP'
// }

const crateState = (state = initialSate, action) => {
	switch (action.type) {
		// case CRATE_PRESS:
		// 	return state.crateState.slice...
		case 'CRATE_POP':
			return state.pressed = true;
		default:
			return state;
	}
}

const store = createStore(crateState);
console.log(store.getState());
store.dispatch({ type: 'CRATE_POP' });
console.log(store.getState());
store.subscribe(crateState)