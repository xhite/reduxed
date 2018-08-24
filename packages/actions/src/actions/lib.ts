import {
  clone,
  identity,
  map,
  reduce,
  values
} from 'ramda'
import {
  ActionCreator,
  ActionCreatorsMapObject
} from 'redux'
import {
  Action,
  ActionFunctionAny,
  combineActions,
  createActions
} from 'redux-actions'

export const createWrapperActions = (name:  string, creators: ActionCreatorsMapObject): ActionFunctionAny<Action<any>> =>
  createActions({
    [name]: reduce(
      (acc, creator: ActionCreator<any>) => ({
        ...acc,
        [creator().type]: [
          payload => creator(payload).payload,
          payload => creator(payload).meta
        ]
      }),
      {}
    )(values(creators))
  })[name]

export const createNestedActions = (name:  string, actionTypes: string[]): ActionFunctionAny<Action<any>> =>
  createActions({
    [name]: reduce(
      (acc, actionType) => ({
        ...acc,
        [actionType]: identity
      }),
      {}
    )(actionTypes)
  })[name]

export const combineWrapperActions = (creators: ActionFunctionAny<Action<any>>): any => combineActions(...values(creators))
