import React from 'react';
import ReactCSS from 'reactcss';

class Crate extends ReactCSS.Component {
	render() {
		//TODO: if className be left alone but 'IS' == className? Research after.
		return (
			<div className="crateHolder" is="crateHolder" onClick={() => this.props.crateAction()}>
				<div className="crateTop" is="crateTop"></div>
				<div className="crateBottom" is="crateBottom"></div>
				<div className="crateShadow" is="crateShadow"></div>
			</div>
		)
	}
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
					height: ' 87%',
					width: '100%',
					backgroundColor: '#61F9CE',
					borderRadius: '35',
					zIndex: '1',
					top: '-36%',
					position: 'absolute'
				},
				crateBottom: {
					height: '100%',
					width: '100%',
					backgroundColor: '#0AB3A2',
					borderRadius: '35',
					position: 'absolute'
				},
				crateShadow: {
					height: '100%',
					width: '100%',
					borderRadius: '35',
					boxShadow: '0px 17px 12px 0px rgba(0,0,0,0.50)',
					position: 'absolute'
				}
			}
		}
	}
}

export default Crate;