import React, { Component, PropTypes } from 'react';
import ReactCSS from 'reactcss';
import * as box from './crateInfo';
import { pressCrate, defaultCrate, popCrate } from '../state/Actions';
import classNames from 'classnames';
import App from '../App';

class Crate extends Component {
	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
		);
	}
	setupPop() {
		const el = document.getElementById('icobutton'),
			elSpan = document.getElementById('icobutton-label'),
			// mo.js timeline obj
			timeline = new mojs.Timeline(),

			// tweens for the animation:

			// burst animation
			tween1 = new mojs.Burst({
				parent: el,
				duration: 1500,
				shape : 'circle',
				fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
				x: '50%',
				y: '50%',
				opacity: 0.6,
				childOptions: { radius: {20:0} },
				radius: {40:120},
				count: 6,
				isSwirl: true,
				isRunLess: true,
				easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
			}),
			// ring animation
			tween2 = new mojs.Transit({
				parent: el,
				duration: 750,
				type: 'circle',
				radius: {0: 50},
				fill: 'transparent',
				stroke: '#988ADE',
				strokeWidth: {15:0},
				opacity: 0.6,
				x: '50%',
				y: '50%',
				isRunLess: true,
				easing: mojs.easing.bezier(0, 1, 0.5, 1)
			}),
			// icon scale animation
			tween3 = new mojs.Tween({
				duration : 900,
				onUpdate: function(progress) {
					// var scaleProgress = scaleCurve4(progress);
					// elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
				}
			});

		// add tweens to timeline:
		timeline.add(tween1, tween2, tween3);
		//
		// // when clicking the button start the timeline/animation:
		// el.addEventListener('mouseenter', function() {
		// 	timeline.start();
		// });
		return timeline
	}
	animate() {
		const { store } = this.context;
		const state = store.getState();
		this.setupPop().start();
		store.dispatch(popCrate());
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
			'crateTopPressed': state.pressed,
			'opened': state.opened
		});

		const crateBottom = classNames({
			'crateBottom': !state.pressed,
			'crateBottomPressed': state.pressed,
			'opened': state.opened
		});

		const crateShadow = classNames({
			'crateShadow': !state.pressed,
			'crateShadowPressed': state.pressed,
			'opened': state.opened
		});

		return (
			// <div className="crateHolder" is="crateHolder" onMouseDown={() => this.crateDownAction()} onTouchStart={() => this.crateDownAction()} onTouchEnd={() => this.crateUpAction()} onMouseUp={() => this.crateUpAction()}>
			<div className="crateComponent">
				<div className="crateHolder">
					<div className={crateTop}
						onMouseDown={() => store.dispatch(pressCrate())}
						onTouchStart={() => store.dispatch(pressCrate())}
						onMouseUp={() => this.animate()}
						onTouchEnd={() => this.animate()}
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
