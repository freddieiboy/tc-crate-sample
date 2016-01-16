import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSS from 'reactcss';
import Crate from './components/Crate';

class App extends ReactCSS.Component {
	crateAction() {
		return console.log('Crate was clicked!');
	}
	canvasAction() {
		return console.log('Canvas was clicked!');
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="canvas" is="canvas">
						<Crate crateAction={() => this.crateAction()}/>
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
					backgroundColor: '#48535E'
				}
			}
		}
	}
}

export default App;

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
