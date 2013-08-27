# Scroll.js

Scroll is a tiny (**385 bytes** minified with gzip compression enabled) JavaScript utility that enables smooth scrolling. 

### usage

```javascript
document.scrollTo(400, 1000)
document.scrollTo({top:0, left:1000}, 1000)
document.scrollTo({left:1000}, 1000)
document.scrollTo({top:400}, 1000)
```

### params 

Name | Type | Description 
-- | -- | --
`destination` | `Integer` or `Object` | Destination of the scroll. 
[`duration`] | `Integer` | Time of the scroll in milliseconds (default is `300`). 

### returns 

`Undefined`

## MIT License

Copyright (c) 2012, Matthias Le Brun

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
