import {
  createSelector,
  Selector
} from 'reselect'

import { SelectorsMapObject } from './types'


/* creates wrapper selectors:
  * inputs: parent selector, object containing root selector functions
  * output: object containing selectors children of parent selector with key: selector name, value: selector function
  * */

export const createWrapperSelectors = (parent: Selector<any, any>, selectors: SelectorsMapObject): SelectorsMapObject =>
  Object.keys(selectors)
    .reduce((acc, key: string) => ({
      ...acc,
      [key]: createSelector(parent, selectors[key])
    }), {})

/* creates multiple selectors:
 * inputs: parent selector, array containing prop names
 * output: object containing selectors children of parent selector with key: selector name, value: selector function
 * */
export const createGetters = (...props: Array<string>): SelectorsMapObject =>
  props.map((prop: any) => ({ prop, value: ({ [prop]: value }) => value }))
    .map(({ prop: [ first, ...rest ], value }) => ({ prop: `${ first.toUpperCase() }${ rest }`, value }))
    .reduce((acc, { prop, value }) => ({ ...acc, [`get${prop}`]: value  }), {})

export const createSelectors = (parent: Selector<any, any>, props: Array<string>): SelectorsMapObject =>
  createWrapperSelectors(parent, createGetters(...props))
