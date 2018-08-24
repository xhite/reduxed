import {
  applyTo,
  gt,
  lt,
  map,
  prop
} from 'ramda'
import { createStructuredSelector } from 'reselect'

import {
  createSelector,
  transduceIntoObject
} from '../../actions/src'


export const getUi = prop('ui')

export const createUiSelector = createSelector(getUi)

export const getDimensions = createUiSelector(
  prop('dimensions')
)

export const createDimensionsSelector = createSelector(getDimensions)

export const getWidth = createDimensionsSelector(
  prop('width')
)

let widthDimensions
export const setWidthDimensions = ({ small = 576, medium = 768, large = 992, extraLarge = 1200 } = {}) => {
  widthDimensions =  { small, medium, large, extraLarge }
  return () => widthDimensions
}
const getWidthDimensions = setWidthDimensions()

export const createWidthSelector = createSelector(getWidth)

export const getScreenIs = createWidthSelector(
  width => transduceIntoObject(
    gt,
    applyTo(width)
  )(getWidthDimensions())
)

export const getScreen = createStructuredSelector({
  is: getScreenIs
})

export const createScreenSelector = createSelector(getScreenIs)

export const getScreenIsSmall = createScreenSelector(
  prop('small')
)

export const getScreenIsMedium = createScreenSelector(
  prop('medium')
)

export const getScreenIsLarge = createScreenSelector(
  prop('large')
)

export const getScreenIsExtraLarge = createScreenSelector(
  prop('extraLarge')
)
