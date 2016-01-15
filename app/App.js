import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSS from 'reactcss';
import Crate from './components/Crate';

class App extends ReactCSS.Component {
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

	render() {
		return (
			<div className="container">
				<div className="row">
					<div is="canvas" >
						<Crate />
					</div>
				</div>
			</div>
		)
	}
}

export default App;

ReactDOM.render(
	<App />,
	document.getElementById('app')	
);