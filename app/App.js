import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<h1>Hello, World!</h1>
					<h3>This thing!</h3>
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