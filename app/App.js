import React, { Component, PropTypes } from 'react';
import ReactCSS from 'reactcss';
import Crate from './components/Crate';
import { crateState } from './state/reducers';
import { newTitle } from './state/CrateActions';
import { Provider, connect } from 'react-redux';


class App extends ReactCSS.Component {
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

		return (
			<div className="container">
				<div className="row">
					<div className="canvas" is="canvas">
						<Crate crateState={crateState} />
						<h4 className="title" onClick={() => store.dispatch(newTitle())}>{state.title}</h4>
					</div> 
				</div>
			</div>
		)
	}
	classes() {
		return {
			'default': {
				canvas: {
					height: '100vh',
					width: '100%',
					backgroundColor: '#46535E'
				}
			}
		}
	}
}

function mapStateToProps(state) {
	return {
		crateState: state.crateState
	}
}

App.contextTypes = {
	store: React.PropTypes.object
}

export default connect(mapStateToProps)(App);

