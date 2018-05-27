module.exports = {
  entry: [
    './src/index.scss',
    './src/index.html'
  ],
  module: {
    rules: [
      { test: /\.scss$/, use: [
        { loader: 'file-loader', options: { name: 'style.css' } },
        'extract-loader',
        'css-loader',
        'sass-loader'
      ]},
      {
        test: /\.html$/,
        use: [
          {loader: 'file-loader', options: { name: '[name].[ext]' }},
          'extract-loader',
          'html-loader'
        ]
      }
    ]
  }
}
