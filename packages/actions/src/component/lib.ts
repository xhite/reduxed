import {
  bindActionCreators,
  ActionCreatorsMapObject,
  Dispatch
} from 'redux'
import {
  connect as defaultConnect,
  DispatchProp,
  InferableComponentEnhancer,
  MapDispatchToPropsParam
} from 'react-redux'
import {
  Selector
} from 'reselect'

import {
  ComponentInput,
  ComponentOutput
} from './types'


export const createDispatcher = (actions: ActionCreatorsMapObject = {}): MapDispatchToPropsParam<any, any> =>
  (dispatch: Dispatch<any>): ComponentOutput => ({
    output: bindActionCreators(actions, dispatch)
  })

export const createInput = (selector: Selector<any, any> = state => state) =>
  (state: any): ComponentInput => ({
    input: selector(state)
  })

export const connect = (mapStateToProps?, mapDispatchToProps?, mergeProps?, options?): InferableComponentEnhancer<DispatchProp<any>> =>
  defaultConnect(createInput(mapStateToProps), createDispatcher(mapDispatchToProps), mergeProps, options)
