
module.exports = 
{
  entry: './main.ts',
	output: {
		path: './',
		filename: 'index.js'
	},

   resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
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
