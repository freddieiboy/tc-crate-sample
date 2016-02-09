import React, { Component, PropTypes } from 'react';
import Crate from './components/Crate';
import { newTitle, defaultCrate, fetchSample, requestPrize, fetchGifs } from './state/Actions';
import { connect } from 'react-redux';


class App extends Component {
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
					{/* <div className="column" /> */}
					<div className="canvas column">
						<h4 className="title" onClick={() => store.dispatch(newTitle())}>{state.title}</h4>
						<Crate crateState={state} />
						<div className="button-bar">
							<a className="button" 
								onClick={() => store.dispatch(defaultCrate())}
								onTouchStart={() => store.dispatch(defaultCrate())}>
							Reset	 
							</a>
							<a className="button" onClick={() => store.dispatch(fetchGifs())}>Test2</a>
						</div>
						<img src={state.prize} className="crate-prize"/>
					</div> 
					{/* <div className="column" /> */}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		crateState: state
	}
}

App.contextTypes = {
	store: React.PropTypes.object
}

export default connect(mapStateToProps)(App);

