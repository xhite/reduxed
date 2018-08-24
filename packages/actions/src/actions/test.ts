import {
  combineActions,
  createAction
} from 'redux-actions'

import {
  combineWrapperActions,
  createWrapperActions
} from './lib'


const actionType = 'MOVE'
const move: any = createAction(actionType)

const actionName = 'second'
const creators = createWrapperActions({ move }, actionName)

test('combineWrapperActions', () => {
  const actionType = combineWrapperActions(creators).toString()
  expect(actionType).toBe(combineActions(creators.move).toString())
})

test('createWrapperActions', () => {
  const action = creators.move()
  expect(action.type).toBe(`${actionName}/${ actionType }`)
})
