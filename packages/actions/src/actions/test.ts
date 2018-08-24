import {
  combineActions,
  createAction
} from 'redux-actions'

import {
  combineWrapperActions,
  createNestedActions,
  createWrapperActions
} from './lib'


const actionType = 'MOVE'
const move: any = createAction(actionType)

const actionName = 'second'
const creators1 = createNestedActions(actionName, [ 'MOVE' ])
const creators2 = createWrapperActions(actionName, { move })

test('combineWrapperActions', () => {
  const actionType = combineWrapperActions(creators1).toString()
  expect(actionType).toBe(combineActions(creators1.move).toString())
})

test('createNestedActions', () => {
  const action = creators1.move()
  expect(action.type).toBe(`${actionName}/${ actionType }`)
})

test('createWrapperActions', () => {
  const action = creators2.move()
  expect(action.type).toBe(`${actionName}/${ actionType }`)
})
