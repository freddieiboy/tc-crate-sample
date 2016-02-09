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

		var rendering;
		var prize
		if(state.isFetching === true) {
			rendering = <img src="http://www.ajaxload.info/images/exemples/20.gif" alt="" className="spinner"/>
			prize = '' 
		} else {
			rendering = ''
			prize = <img src={state.prize} className="crate-prize"/>
		}
		
		console.log(state.isFetching)

		return (
			<div className="container">
				<div className="row">
					{/* <div className="column" /> */}
					<div className="canvas column">
						<h4 className="title">{state.title}</h4>
						<Crate crateState={state} />
						<div className="button-bar">
							<a className="button" 
								onClick={() => store.dispatch(defaultCrate())}
								onTouchStart={() => store.dispatch(defaultCrate())}>
							Reset	 
							</a>
							<a className="button" onClick={() => store.dispatch(fetchGifs())}>Get Gif</a>
						</div>
						{rendering}
						{prize}
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

