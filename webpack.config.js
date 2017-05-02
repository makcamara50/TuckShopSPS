module.exports = {
	entry: './src/app.ts',
	output: {
		path: './dist',
		filename:'app.bundle.js'
	},
	module: {
    loaders: [{
      // The loader that handles ts and tsx files.  These are compiled
      // with the ts-loader and the output is then passed through to the
      // babel-loader.  The babel-loader uses the es2015 and react presets
      // in order that jsx and es6 are processed.
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015!ts-loader'
    }, {
      // The loader that handles any js files presented alone.
      // It passes these to the babel-loader which (again) uses the es2015
      // and react presets.
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }
	]
}
};