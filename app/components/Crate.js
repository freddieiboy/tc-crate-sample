import React, { Component, PropTypes } from 'react';
import ReactCSS from 'reactcss';
import * as box from './crateInfo';
import { pressCrate, defaultCrate } from '../state/Actions';
import classNames from 'classnames';

class Crate extends Component {
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

		// console.log(state);

		//TODO: if className be left alone but 'IS' == className? Research after.
		//TODO: bug when you mouse up the top crate. state stops

		const crateTop = classNames({
			'crateTop': !state.pressed,
			'crateTopPressed': state.pressed
		});

		const crateBottom = classNames({
			'crateBottom': !state.pressed,
			'crateBottomPressed': state.pressed
		});

		const crateShadow = classNames({
			'crateShadow': !state.pressed,
			'crateShadowPressed': state.pressed
		});

		return (
			// <div className="crateHolder" is="crateHolder" onMouseDown={() => this.crateDownAction()} onTouchStart={() => this.crateDownAction()} onTouchEnd={() => this.crateUpAction()} onMouseUp={() => this.crateUpAction()}>
			<div className="crateComponent">
				<div className="crateHolder">
					<div className={crateTop} 
						onMouseDown={() => store.dispatch(pressCrate())} 
						onTouchStart={() => store.dispatch(pressCrate())}
						/>
					<div className={crateBottom}></div>
					<div className={crateShadow}></div>
				</div>
			</div>
		)
	}
}

Crate.contextTypes = {
	store: React.PropTypes.object
}

export default Crate;
