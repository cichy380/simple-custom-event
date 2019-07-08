# Simple Custom Event

[![devDependencies](https://flat.badgen.net/npm/v/simple-custom-event)](https://www.npmjs.com/package/simple-custom-event)
[![license](https://flat.badgen.net/github/license/cichy380/simple-custom-event)](https://github.com/cichy380/simple-custom-event/blob/master/LICENSE.md)

Simple and easy to use custom event implementation with optional 
[`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) element. 

## Features

* Easy installation and usage
* `EventTarget` is not required
* Internet Explorer 9+ is supported (polyfill included)

## Installation

#### via Yarn
```bash
yarn add simple-custom-event
```

#### via NPM
```bash
npm install simple-custom-event
```

#### via CDN
```html
<script src="//unpkg.com/simple-custom-event@1.0.1"></script>
```

## Usage

Sample of usage where we are creating `MY_CUSTOM_EVENT` event and triggering it with some optional data.

#### javascript (ES6+)
after Yarn/NPM installation

```js
import SimpleCustomEvent from 'simple-custom-event'

const myEvents = new SimpleCustomEvent()

myEvents.on('MY_CUSTOM_EVENT', (data) => {
    console.log(data.detail)
})

myEvents.trigger('MY_CUSTOM_EVENT', {myOptionalData: 'eg some string'})
```

#### typescript
after Yarn/NPM installation

```typescript
import SimpleCustomEvent from 'simple-custom-event'

const myEvents = new SimpleCustomEvent()

myEvents.on('MY_CUSTOM_EVENT', (data: CustomEvent) => {
    console.log(data.detail)
})

myEvents.trigger('MY_CUSTOM_EVENT', {myOptionalData: 'eg some string'})
```

#### javascript (ES5+)
with CDN

```html
<!doctype html>
<html lang="en">
<head>
    <title>Simple Custom Event</title>
</head>
<body>
<script src="//unpkg.com/simple-custom-event@1.0.1"></script>
<script>
    var myEvents = new SimpleCustomEvent()
    
    myEvents.on('MY_CUSTOM_EVENT', function(data) {
        console.log(data.detail)
    })
    
    myEvents.trigger('MY_CUSTOM_EVENT', {myOptionalData: 'eg some string'})
</script>
</body>
</html>
```

#### Multi instances

Events simplifies the communication between components of application. Decouples event senders and receivers. 
Below simple example with multi instances of `SimpleCustomEvent` class:

file-1.js (ES6):
```js
import SimpleCustomEvent from 'simple-custom-event'

const myEvtListener = new SimpleCustomEvent()
myEvtListener.on('MY_CUSTOM_EVENT', () => {
    // do something...
})
```

file-2.js (ES6):
```js
import SimpleCustomEvent from 'simple-custom-event'

const myEvtEmiter = new SimpleCustomEvent()
myEvtEmiter.trigger('MY_CUSTOM_EVENT')
```


## Methods

All available, public methods of `SimpleCustomEvent` class:

* **`constructor([target])`** <br>
  Initializes an object.
  * `target` <br>
    Type: [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) <br>
    DOM interface implemented by objects that can receive events and may have listeners for them. <br>
    Default: [document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

* **`.trigger(eventName[, detail])`** <br> 
  Initializes and dispatches an custom Event, invoking the affected Listeners.
  * `eventName` <br>
    Type: [string](https://www.typescriptlang.org/docs/handbook/basic-types.html#string) <br>
    Custom event name.
  * `detail` <br>
    Type: [any](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) <br>
    Any data passed when triggering the event.
    
* **`.on(eventName, callback)`** <br>
  Sets up a function that will be called whenever the specified event is triggered.
  * `eventName` <br>
    Type: [string](https://www.typescriptlang.org/docs/handbook/basic-types.html#string) <br>
    Custom event name to listen for.
  * `callback` <br>
    Type: [EventListenerOrEventListenerObject](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener) <br>
    Callback function accepts a parameter: Event object describing the event which has occurred.
    
* **`.off(eventName)`** <br>
  Removes an event listener previously registered with `.on()`.
  * `eventName` <br>
    Type: [string](https://www.typescriptlang.org/docs/handbook/basic-types.html#string) <br>
    Custom event name for which to remove an event listener.

## Contributing

Can you improve this simple project? Feel free to join it! Source code is [TypeScript](https://www.typescriptlang.org/).
```bash
# project setup
yarn install

# compiles for development
yarn dev
# or
yarn dev:watch

# run unit tests
yarn test
```

## License

Code released under the [MIT license](https://github.com/cichy380/html-starter-bs4-webpack/blob/master/LICENSE.md).
