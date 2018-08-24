import {
  ActionCreatorsMapObject,
} from 'redux'
import { Reducer } from 'redux-actions'

export interface ReducerActions {
  actions: ActionCreatorsMapObject
  reducer: Reducer<any, any>
}

export interface ReducerActionsMapObject {
  [name: string]: ReducerActions
}
