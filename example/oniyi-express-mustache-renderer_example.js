'use strict';

var express = require('express'),
    router = express.Router(),
    renderer = require('../lib/oniyi-express-mustache-renderer.js');

router.use(renderer(__dirname));
// => awesome