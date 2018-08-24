import {
  Action,
  ActionFunctionAny,
  Reducer
} from 'redux-actions'

export interface ReducerActions {
  actions: ActionFunctionAny<Action<any>>
  reducer: Reducer<any, any>
}

export interface ReducerActionsMapObject {
  [name: string]: ReducerActions
}
