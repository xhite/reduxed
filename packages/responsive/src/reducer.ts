import { handleActions } from 'redux-actions'

import { changeDimensions } from './actions'


const initialState = {}

export const reducer = handleActions({
  [changeDimensions]: (state, { payload }) => ({ ...payload })
}, initialState)
