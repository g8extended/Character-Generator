require('babel-register')({
  'plugins': [
    [
      'babel-plugin-transform-require-ignore',
      {
        extensions: ['.scss']
      }
    ]
  ]
});
require('./index');
