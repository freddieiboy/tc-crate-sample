import fetch from 'isomorphic-fetch';


export const DEFAULT_CRATE = 'DEFAULT_CRATE';
export function defaultCrate() {
	return {
		type: DEFAULT_CRATE
	}
}

export const PRESS_CRATE = 'PRESS_CRATE';
export function pressCrate() {
	return {
		type: PRESS_CRATE
	}
}

export const REQUEST_PRIZE = 'REQUEST_PRIZE';
function requestPrize() {
	return {
		type: REQUEST_PRIZE
	}
}

export const RECEIVE_PRIZE = 'RECEIVE_PRIZE';
function receivePrize(json) {
	return {
		type: RECEIVE_PRIZE,
	  prizes: json.data.image_url,
    receivedAt: Date.now()
	}
}

export function fetchGifs() {
  return function (dispatch) {
		dispatch(requestPrize())
		return fetch('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho')
			.then(response => response.json())
			.then(json => dispatch(receivePrize(json)))
	}
}

export function fetchSample() {
	fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho')
	.then(req => req.json())
	.then(json => console.log(json))
}