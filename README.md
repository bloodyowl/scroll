# bloody-scroll

> Smooth scrolling to given coordinates for the browser

[![Build Status](https://travis-ci.org/bloodyowl/scroll.svg)](https://travis-ci.org/bloodyowl/scroll)

## Install

```
$ npm install --save bloody-scroll
```

## Import

```javascript
import scroll from "bloody-scroll"
```

## API

### scroll({ x: number, y: number}, duration = 300)

### arguments

* `coords.x` : (*Number*) Horizontal target for scroll.
* `coords.y` : (*Number*) Vertical target for scroll.
* `duration` : (*Number*) Transition duration.

### Example

```javascript
scroll({ x: 0, y: 1000 }, 1000)
scroll({ x: 1000 }, 1000)
scroll({ y: 400 }, 1000)
```
