import React from 'react';

class Crate extends React.Component {
	render() {
		return (
			<div className="crate-holder">
				<div className="crate-top"></div>
				<div className="crate-bottom"></div>
			</div>
		)
	}
}

// Crate.styles = {
// 	crateHolder: {
// 		height: '160',
// 		width: '200',
// 		position: 'absolute',
// 		top: '50%',
// 		left: '50%',
// 		marginTop: '-75',
// 		marginLeft: '-100'
// 	},
// 	crateTop: {

// 	},
// 	crateBottom: {
// 		height: '100%',
// 		width: '100%',
// 		backgroundColor: '#0AB3A2',
// 		borderRadius: '35',
// 		boxShadow: '0px 17px 12px 0px rgba(0,0,0,0.50)'
// 	}
// }

export default Crate;