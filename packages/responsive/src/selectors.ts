import {
  gt,
  lt,
  prop
} from 'ramda'
import {
  createStructuredSelector
} from 'reselect'
import { createSelector } from '../../actions/src'


export const getUi = prop('ui')

export const getDimensions = createSelector(
  getUi,
  prop('dimensions')
)

export const getWidth = createSelector(
  getDimensions,
  prop('width')
)

export const createWidthSelector = createSelector(getWidth)

export const getScreenIsSmall = createWidthSelector(
  gt(576)
)

export const getScreenIsMedium = createWidthSelector(
  gt(768)
)

export const getScreenIsLarge = createWidthSelector(
  gt(992)
)

export const getScreenIsExtraLarge = createWidthSelector(
  lt(1200)
)

export const getScreen = createStructuredSelector({
  isSmall: getScreenIsSmall,
  isMedium: getScreenIsMedium,
  isLarge: getScreenIsLarge,
  isExtraLarge: getScreenIsExtraLarge
})
