module.exports = {
	entry: "./app/App.js",
	output: {
		filename: "./public/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: ['babel', 'react-map-styles']
			}, {
      test: /\.svg$/,
      loader: 'file-loader'
    }]
	}
}