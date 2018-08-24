import { createAction } from 'redux-actions'

import {
  connect,
  createDispatcher,
  createInput
} from './lib'


test('createInput', () => {
  const select1 = createInput()
  const { input: input1 } = select1('a')

  expect(input1).toBe('a')

  const select2 = createInput(({ a }) => a)
  const { input: input2 } = select2({ a: 'A' })

  expect(input2).toBe('A')
})

test('createDispatcher', () => {
  const actions = {
    a: createAction('A'),
    b: createAction('B')
  }
  const dispatcher = createDispatcher(actions)
  const dispatch = ({ type }) => type
  const { output } = dispatcher(dispatch)

  expect(Object.keys(output).length).toBe(2)
  expect(output.a()).toBe('A')
  expect(output.b()).toBe('B')
})

test('connect', () => {
  const actions = {
    a: createAction('A'),
    b: createAction('B')
  }
  const dispatcher = createDispatcher(actions)
  const dispatch = ({ type }) => type
  const { output } = dispatcher(dispatch)

  expect(Object.keys(output).length).toBe(2)
  expect(output.a()).toBe('A')
  expect(output.b()).toBe('B')
  expect(typeof connect({})).toBe('function')
})
