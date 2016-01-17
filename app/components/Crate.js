import React from 'react';
import ReactCSS from 'reactcss';
import * as Anim from './URI/crateURI';

class Crate extends ReactCSS.Component {
	constructor(props) {
    super(props);
    this.state = { 
    	pressed: false, 
			test: console.log('init state')
    };
  }
  styles() {
  	return this.css({
  		'pressed': this.state.pressed
  	})
  }
	crateDownAction() {
			this.setState({ 
				pressed: true,
				test: console.log('down')
			});
	}
	crateUpAction() {
		this.setState({ 
			pressed: false,
			test: console.log('up')
		});
	}
	render() {
		//TODO: if className be left alone but 'IS' == className? Research after.
		//TODO: bug when you mouse up the top crate. state stops
		return (
			<div className="crateHolder" is="crateHolder" onMouseDown={() => this.crateDownAction()} onMouseUp={() => this.crateUpAction()}>
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
					zIndex: '2',
					top: '-36%',
					position: 'absolute'
				},
				crateBottom: {
					height: '100%',
					width: '100%',
					backgroundColor: '#0AB3A2',
					borderRadius: '35',
					zIndex: '1',
					position: 'absolute'
				},
				crateShadow: {
					height: '100%',
					width: '100%',
					borderRadius: '35',
					boxShadow: '0px 17px 12px 0px rgba(0,0,0,0.50)',
					position: 'absolute'
				}
			},
			'pressed': {
				crateTop: {
					width: '103%',
					top: '0',
					left: '-4px',
					background: 'url(' + Anim.greenCrate.topPressed + ') no-repeat',
					backgroundColor: 'none'
				},
				crateBottom: {
					width: '110%',
					top: '4%',
					left: '-4.5%',
					background: 'url(' + Anim.greenCrate.bottomPressed + ') no-repeat',
					backgroundColor: 'none'
				},
				crateShadow: {
					top: '-2%'
				}
			}
		}
	}
}

export default Crate;