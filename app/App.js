import React from 'react';
import ReactDOM from 'react-dom';
import Crate from './components/Crate';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="canvas" style={canvasStyle}>
						<Crate />
					</div>
				</div>
			</div>
		)
	}
}

const canvasStyle = {
	height: '100vh',
	width: '100%',
	backgroundColor: '#48535E'
}

export default App;

ReactDOM.render(
	<App />,
	document.getElementById('app')	
);