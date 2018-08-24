import { ActionCreator } from 'react-redux'
import {
  ActionCreatorsMapObject,
  bindActionCreators
} from 'redux'
import {
  combineActions
} from 'redux-actions'

const stringify = creators => Object.keys(creators).reduce((acc, key) => {
  creators[key].toString = () => creators[key]().type
  return  { ...acc, [key]: creators[key] }
}, {})

export const createWrapperActions = (creators: ActionCreatorsMapObject, name:  string): ActionCreatorsMapObject =>
  stringify(bindActionCreators(creators, (action: any) => ({ ...action, type: `${name}/${action.type}` })))

export const combineWrapperActions = (creators: ActionCreatorsMapObject): string =>
  combineActions(
    ...Object.keys(creators)
      .map((id: string) => creators[id])
      .map((creator: ActionCreator<any>) => creator)
  )
