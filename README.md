# Scroll.js

[![browser support](https://ci.testling.com/bloodyowl/scroll.png)](https://ci.testling.com/bloodyowl/scroll)

Scroll is a tiny JavaScript utility that enables smooth scrolling. 

## Install

```
$ npm install bloody-scroll
```

## Require

```
var scroll = require("bloody-scroll")
// or
define(["scroll"], function(scroll){})
// 
window.scroll
```

## API

```javascript
scroll(400, 1000)
scroll({top:0, left:1000}, 1000)
scroll({left:1000}, 1000)
scroll({top:400}, 1000)
```

### params 

* `destination` : `Integer` or `Object`, Destination of the scroll. 
* [`duration`] : `Integer`, Time of the scroll in milliseconds (default is `300`). 

## MIT License

Copyright (c) 2012, Matthias Le Brun

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
