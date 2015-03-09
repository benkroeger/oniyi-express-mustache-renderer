> An express middleware that provides a renderer for mustache templates
> Use this to provide different renderers per router (also allows you to structure your templates as sub-folders per router in Express)


## Getting Started

Install the module with: `npm install oniyi-express-mustache-renderer`

```js
var express = require('express'),
    router = express.Router(),
    renderer = require('oniyi-express-mustache-renderer');

router.use(renderer(__dirname));
```


## Documentation

_(Coming soon)_


## Examples

_(Coming soon)_


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).


## License

Copyright (c) 2014 Benjamin Kroeger
Licensed under the MIT license.
