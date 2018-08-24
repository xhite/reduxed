import { map } from 'ramda'
import {
  Action,
  handleActions,
  Reducer,
  ReducerMap
} from 'redux-actions'

import { combineWrapperActions } from '../actions'
import {
  ReducerActions,
  ReducerActionsMapObject
} from './types'


export const getInitialState = (reducer: Reducer<any, any>): any => reducer(undefined, { type: '' })

export const createReducer = (reducerMap: ReducerMap<any, any>, defaultState: object, childReducerMap: ReducerActionsMapObject = {}): Reducer<any, any> =>
  handleActions(
    {
      ...reducerMap,
      ...Object.keys(childReducerMap)
        .reduce((res: object, name: string) => ({
          ...res,
          [ combineWrapperActions(childReducerMap[name].actions) ]: (state: object, action: Action<any>) => ({
            ...state,
            [name]: childReducerMap[name].reducer(state[name], action)
          })
        }), {})
    },
    {
      ...defaultState,
      ...map((childReducerMap: ReducerActions) => getInitialState(childReducerMap.reducer), childReducerMap)
    }
  )
