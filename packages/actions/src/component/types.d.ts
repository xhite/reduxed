import {
  ActionCreatorsMapObject,
} from 'redux'
import { Selector } from 'reselect'

export interface ComponentOutput {
  output: ActionCreatorsMapObject
}

export interface ComponentInput {
  input: Selector<any, any>
}
