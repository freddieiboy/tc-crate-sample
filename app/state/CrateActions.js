import * as action from './ActionTypes';

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

export function newTitle() {
	return {
		type: action.NEW_TITLE
	}
}