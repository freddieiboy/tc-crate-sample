import React, { Component, PropTypes } from 'react';
import ReactCSS from 'reactcss';
import * as box from './crateInfo';
import { crateState } from '../state/reducers';
import { pressCrate } from '../state/CrateActions';

class Crate extends ReactCSS.Component {
	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
		);
	}
	componentWillUnmount() {
		this.unsubscribe();
	}
	render() {
		const props = this.props;
		const { store } = this.context;
		const state = store.getState();

		console.log(state);

		//TODO: if className be left alone but 'IS' == className? Research after.
		//TODO: bug when you mouse up the top crate. state stops

		return (
			// <div className="crateHolder" is="crateHolder" onMouseDown={() => this.crateDownAction()} onTouchStart={() => this.crateDownAction()} onTouchEnd={() => this.crateUpAction()} onMouseUp={() => this.crateUpAction()}>
			<div className="crateComponent">
				<div className="crateHolder" is="crateHolder">
					<div className="crateTop" is="crateTop" onClick={() => store.dispatch(pressCrate())}></div>
					<div className="crateBottom" is="crateBottom" ></div>
					<div className="crateShadow" is="crateShadow"></div>
				</div>
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
					backgroundColor: box.green.lightColor,
					borderRadius: '35',
					zIndex: '2',
					top: '-36%',
					position: 'absolute'
				},
				crateBottom: {
					height: '100%',
					width: '100%',
					backgroundColor: box.green.darkColor,
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
				},
				// crateTopPressed: {
				// 	width: '103%',
				// 	top: '0',
				// 	left: '-4px',
				// 	background: 'url(' + this.randomColor().topPressedEl + ') no-repeat',
				// 	backgroundColor: 'none'
				// },
				// crateBottomPressed: {
				// 	width: '110%',
				// 	top: '4%',
				// 	left: '-4.5%',
				// 	background: 'url(' + this.randomColor().bottomPressedEl + ') no-repeat',
				// 	backgroundColor: 'none'
				// },
				// crateShadowPressed: {
				// 	top: '-2%'
				// }
			}
		}
	}
}

Crate.contextTypes = {
	store: React.PropTypes.object
}

export default Crate;