# @reduxed/responsive

Provides responsive components

More features to come

Part of @reduxed utilities for Redux.

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)

# Installation

```bash
$ yarn add @reduxed/responsive
```

or

```bash
$ npm install --save @reduxed/responsive
```

The [npm](https://www.npmjs.com) package provides a [CommonJS](http://webpack.github.io/docs/commonjs.html) build, a UMD build, as well as an AMD build.


# Usage

1. Trigger the appropriate action when the screen dimensions change

```jsx harmony
import { View } from 'react-native'
import { changeDimensions } from '@reduxed/responsive'

const renderResponsiveComponent = screen =>
  screen.is.small ? <div></div> : <span></span>

const Component = () =>
  <View onLayout={ ({ nativeEvent: { layout } }) => changeDimensions(layout) }>
  </View>
```


2. Build a more responsive UI by using render props:

```jsx harmony
import { ScreenDimensions } from '@reduxed/responsive'

const renderResponsiveComponent = screen =>
  screen.is.small ? <div></div> : <span></span>

const Component = () =>
  <ScreenDimensions render={ renderResponsiveComponent }/>
```

Optional - Set custom width values:

Build a more responsive UI by using render props:
 
 ```ecmascript 6
import { setWidthDimensions } from '@reduxed/responsive'

setWidthDimensions({ small: 576, medium: 768, large: 992, extraLarge: 1200 }) // these are default values
 ```
 
