import {
  handleActions,
  Action,
  Reducer,
  ReducerMap
} from 'redux-actions'

import { combineWrapperActions } from '../actions/index'
import {
  ReducerActions,
  ReducerActionsMapObject
} from './types'
import { ActionCreatorsMapObject } from 'redux'


export const createReducer = (reducerMap: ReducerMap<any, any>, defaultState: any, childReducerMap: ReducerActionsMapObject = {}): Reducer<any, any> =>
  handleActions({
    ...reducerMap,
    ...Object.keys(childReducerMap)
      .reduce((res, name: string) => ({
        ...res,
        [ combineWrapperActions(childReducerMap[name].actions) ]: (state, action) => ({
          ...state,
          [name]: childReducerMap[name].reducer(state[name], action)
        })
      }), {})
    },
    {
    ...defaultState,
      ...Object.keys(childReducerMap)
    .reduce((res, name: string) => ({
      ...res,
      [name]: getInitialState(childReducerMap[name].reducer)
    }), {})
  })

export const getInitialState = (reducer: Reducer<any, any>): any => reducer(undefined, { type: '' })

export const createInitialState = (reducers: Array<Reducer<any, any>>): any =>
  reducers.reduce((acc, reducer) => ({
    ...acc,
    ...getInitialState(reducer)
  }), {})

export const createWrapperReducer = (reducer: Reducer<any, any>, actions: ActionCreatorsMapObject, childReducer: Reducer<any, any> = state => state): Reducer<any, any> =>
  handleActions({
    [ combineWrapperActions(actions) ]: (state, action: Action<any>) =>
      childReducer(reducer(state, { ...action, type: action.type.split('/').slice(1).join('/') }), action)
  }, createInitialState([ reducer, ...childReducer ? [ childReducer ] : [] ]))
