var path = require('path');
var express = require('express');
//var React = require('react');
//var Router = require('react-router');
//var routes = require('src/routes');
var webpack = require('webpack');
var config = require('./webpack.config');

var port = process.env.PORT || 3000;
var app = express();
var compiler = webpack(config);

/*app.use(function (req, res, next) {
    var router = Router.create({location: req.url, routes: routes});

    router.run(function (Handler, state) {
        var html = React.renderToString(React.createElement('<Handler />'));

        return res.render('react_page', {html: html});
    })
});*/

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});
