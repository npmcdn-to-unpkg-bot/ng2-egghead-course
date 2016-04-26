module.exports = 
{
  entry: './main.ts',
	output: {
		path: './',
		filename: 'index.js'
	},

   resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
};
