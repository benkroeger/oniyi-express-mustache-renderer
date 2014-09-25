/*
 *
 * https://github.com/benkroeger/oniyi-express-mustache-renderer
 *
 * Copyright (c) 2014 Benjamin Kroeger
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path'),
  mustacheExpress = require('mustache-express');

var extension = '.mustache',
  partialsDirectory = 'partials',
  viewsDirectory = 'views';

function createRenderer(baseDir) {
  var renderer = mustacheExpress(path.join(baseDir, viewsDirectory, partialsDirectory), extension);
  return function(req, resp, next) {
    resp.render = function(templateName, data) {
      renderer(path.join(baseDir, viewsDirectory, templateName) + extension, data, function(err, data) {
        resp.send(data);
      });
    };
    next();
  };
}

module.exports = createRenderer;