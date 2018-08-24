# @reduxed/actions

Provides helper for managing Redux state  

Written in Typescript and includes types

More features to come (WIP)

Part of [@reduxed](https://www.npmjs.com/search?q=%40reduxed) utilities for [Redux](http://redux.js.org/).

Assumes the use of [redux-actions](https://github.com/reduxactions/redux-actions) and [reselect](https://github.com/reactjs/reselect)

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)

# Installation

```bash
$ yarn add @reduxed/actions
```

or

```bash
$ npm i -S @reduxed/actions
```

The [npm](https://www.npmjs.com) package provides a [CommonJS](http://webpack.github.io/docs/commonjs.html) build, a UMD build, as well as an AMD build.


# Usage

## Component
Binding your redux store to a component with separate actions props and state props:
```ecmascript 6
import { connect } from '@reduxed/actions'

export default connect(mapStateToProps, mapDispatchToProps)
```
connect is used the same way as connect from [react-redux](https://github.com/reactjs/react-redux)

state will be accessible in the component via input prop and actions via output props:
```ecmascript 6
export default ({ input, output }) => (
  //Component
)
```

## Selector
Create wrapper selectors for a [named reducer](http://redux.js.org/docs/recipes/reducers/ReusingReducerLogic.html):
  * inputs: parent selector, object containing root selector functions
  * output: object containing selectors children of parent selector with key: selector name, value: selector function
  * */

```ecmascript 6
import { createSelector } from 'reselect'
import { createWrapperSelectors } from '@reduxed/actions'
   
const getFriend = ({ friend }) => friend
   
const parentSelector = createSelector(state => state, getFriend)
   
const selectors = {
  getFirstName: ({ firstName }) => firstName,
  getLastName: ({ lastName }) => lastName
}
   
const namedSelectors = createWrapperSelectors(parentSelector, selectors)
   
const {
  getFirstName,
  getLastName
} = namedSelectors
```

Create selectors from state props
```ecmascript 6
import { createSelector } from 'reselect'
import { createSelectors } from '@reduxed/actions'
   
const getFriend = ({ friend }) => friend
   
const parentSelector = createSelector(state => state, getFriend)
   
const props = [
  'firstName',
  'lastName'
]
   
const selectors = createSelectors(parentSelector, props)
   
const {
  getFirstName,
  getLastName
} = selectors
```

## Actions
Create named actions:
```ecmascript 6
import { createActions } from 'redux-actions'
import { createWrapperActions } from '@reduxed/actions'
   
const creators = createActions('CHANGE_FIRSTNAME', 'CHANGE_LASTNAME')
   
const wrapperCreators = createWrapperActions(creators, 'best')
   
const {
  changeFirstName,
  changeLastName
} = wrapperCreators
```

Combine actions for use in a reducer:
```ecmascript 6
import { createActions } from 'redux-actions'
import { combineWrapperActions } from '@reduxed/actions'
   
const creators = createActions('CHANGE_FIRSTNAME', 'CHANGE_LASTNAME')
   
const combinedActions = combineWrapperActions(creators)
   
const reducer = handleActions({
[combinedActions]: state => ({ ...state })
}, {})
```
  
## Reducer
Create a higher order reducer combining multiple reducers:
```ecmascript 6
import { createActions } from 'redux-actions'
import { createReducer } from '@reduxed/actions'

const {
  changeFirstName,
  changeLastName
} = createActions('CHANGE_FIRSTNAME', 'CHANGE_LASTNAME')
   
const reducer = handleActions({
[changeFirstName]: (state, { payload }) => payload
}, {})
   
const wrapperReducer = createReducer({
[changeLastName]: (state, { payload }) => ({ lastName: payload })
}, {
  firstName: 'John',
  lastName: 'Doe'
}, {
  firstName: {
    actions: { changeFirstName },
    reducer
  }
  // could contain other reducers
})
```

Get initial state from a reducer:
```ecmascript 6
import { createAction } from 'redux-actions'
import { getInitialState } from '@reduxed/actions'
   
const changeLastName = createAction('CHANGE_LASTNAME')
   
const reducer = handleActions({
  [changeLastName]: (state, { payload }) => ({ lastName: payload })
}, {
     lastName: 'Doe'
 })
   
 getInitialState(reducer) // => { lastName: 'Doe' }

```

Create a reducer responding to given named actions:
```ecmascript 6
import { createActions } from 'redux-actions'
import {
  createWrapperActions,
  createWrapperReducer
} from '@reduxed/actions'
  
const creators = createActions('CHANGE_FIRSTNAME', 'CHANGE_LASTNAME')
 
const { changeLastName } = creators 
 
const reducer = handleActions({
  [changeLastName]: (state, { payload }) => ({ lastName: payload })
}, {
  firstName: 'John',
  lastName: 'Doe'
})
  
const namedActions = createWrapperActions(creators, 'friend')
  
const namedReducer = createWrapperReducer({ actions: namedActions, reducer })

namedReducer({ lastName: 'Doe' }, namedActions.changeLastName('Dupont')) // => { lastName: 'Dupont' }
```
