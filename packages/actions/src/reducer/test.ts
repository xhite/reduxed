import {
  createAction,
  createActions,
  handleActions
} from 'redux-actions'

import {
  createReducer,
  getInitialState
} from './lib'


const defaultState = { country: 'France', city:'' }

const move1: any = createAction('MOVE1')

const actions = createActions('MOVE')
const reducer = handleActions({
  [actions.move]: () => 'Bordeaux'
}, '')

const r1 = createReducer(
  {
    [move1]: state => ({ ...state, country: 'Italy' })
  },
  defaultState,
  {
    city: {
      actions,
      reducer
    }
  })

const r2 = createReducer(
  {
    [move1]: state => ({ ...state, country: 'Italy' })
  },
  defaultState
)

test('reduce to nextState', () => {
  const nextState = r1({}, move1())
  const nextState2 = r1({}, actions.move())
  expect(nextState.country).toBe('Italy')
  expect(Object.keys(nextState).length).toBe(1)
})

test('createInitialState', () => {
  const initialState = getInitialState(r1)
  expect(initialState).toEqual(defaultState)
})
