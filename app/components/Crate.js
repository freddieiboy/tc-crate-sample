import React from 'react';
import ReactCSS from 'reactcss';

class Crate extends ReactCSS.Component {
	classes() {
		return {
			'default': {
				crateHolder: {
					height: '160',
					width: '200',
					position: 'absolute',
					top: '50%',
					left: '50%',
					marginTop: '-75',
					marginLeft: '-100'
				},
				crateTop: {

				},
				crateBottom: {
					height: '100%',
					width: '100%',
					backgroundColor: '#0AB3A2',
					borderRadius: '35',
					boxShadow: '0px 17px 12px 0px rgba(0,0,0,0.50)'
				}
			}
		}
	}
	render() {
		return (
			<div is="crateHolder">
				<div is="crateTop"></div>
				<div is="crateBottom"></div>
			</div>
		)
	}
}

export default Crate;