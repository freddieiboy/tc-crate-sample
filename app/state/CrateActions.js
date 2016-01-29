import * as action from './ActionTypes';

// export const PRESS_CRATE = 'PRESS_CRATE';
// export const OPEN_CRATE = 'OPEN_CRATE';
// export const NEW_CRATE = 'NEW_CRATE';

export function defaultCrate() {
	return {
		type: action.DEFAULT_CRATE
	}
}

export function pressCrate() {
	return {
		type: action.PRESS_CRATE
	}
}

export function openCrate() {
	return {
		type: action.OPEN_CRATE,
	} 
}

export function newCrate() {
	return {
		type: action.NEW_CRATE,
	} 
}