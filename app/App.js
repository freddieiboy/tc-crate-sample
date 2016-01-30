import React, { Component, PropTypes } from 'react';
import Crate from './components/Crate';
import { crateState } from './state/reducers';
import { newTitle } from './state/CrateActions';
import { Provider, connect } from 'react-redux';


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
						<Crate crateState={crateState} />
						<div className="button-bar">
							<a className="button">Test</a>
							<a className="button">Test2</a>
						</div>
					</div> 
					{/* <div className="column" /> */}
				</div>
			</div>
		)
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

