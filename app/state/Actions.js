import fetch from 'isomorphic-fetch';

export const DEFAULT_CRATE = 'DEFAULT_CRATE';
export const PRESS_CRATE = 'PRESS_CRATE';
export const NEW_TITLE = 'NEW_TITLE';
export const REQUEST_PRIZE = 'REQUEST_PRIZE';
export const RECEIVE_PRIZE = 'RECEIVE_PRIZE';

export function defaultCrate() {
	return {
		type: DEFAULT_CRATE
	}
}

export function pressCrate() {
	return {
		type: PRESS_CRATE
	}
}

export function newTitle() {
	return {
		type: NEW_TITLE
	}
}

export function requestPrize() {
	return {
		type: REQUEST_PRIZE
	}
}

export function recievePrize() {
	return {
		type: RECEIVE_PRIZE,
	  prizes: json.data.children.map(child => child.data),
    receivedAt: Date.now()
	}
}

export function fetchSample() {
	fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho')
	.then(req => req.json())
	.then(json => console.log(json))
}