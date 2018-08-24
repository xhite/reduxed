import {
  addIndex,
  apply,
  assocPath,
  compose,
  curryN,
  filter,
  into,
  last,
  map,
  path,
  pipe,
  reduce,
  tap,
  unapply
} from 'ramda'
import {
  createSelector as createSelectorBase,
  ParametricSelector,
  Selector
} from 'reselect'
import { createElement as createElementBase } from 'react'

import { SelectorsMapObject } from './types'


/* creates wrapper selectors:
  * inputs: parent selector, object containing root selector functions
  * output: object containing selectors children of parent selector with key: selector name, value: selector function
  * */

export const createWrapperSelectors = (parent: Selector<any, any>, selectors: SelectorsMapObject): SelectorsMapObject =>
    map((selector: Selector<any, any>) => createSelector(parent, selector), selectors)

/* creates multiple selectors:
 * inputs: parent selector, array containing prop names
 * output: object containing selectors children of parent selector with key: selector name, value: selector function
 * */
export const createGetters = (...props: Array<string>): SelectorsMapObject =>
  pipe(
    transduceIntoArray(
      (prop: any) => ({ prop, value: ({ [prop]: value }) => value }),
      ({ prop: [ first, ...rest ], value }) => ({ prop: `${ first.toUpperCase() }${ rest }`, value })
    ),
    reduce((acc, { prop, value }) => ({ ...acc, [`get${prop}`]: value  }), {})
  )(props)

export const createSelectors = (parent: Selector<object, any>, props: Array<string>): SelectorsMapObject =>
  createWrapperSelectors(parent, createGetters(...props))

export const indexAsKey = (props: object, key: number) => ({ key, ...props })
export const mapIndexed = addIndex(map)

export const transduceIntoArray = pipe(
  unapply(map(mapIndexed)),
  apply(compose),
  into([]),
)

export const transduceIntoObject = (...args) => mapIndexed(value => pipe(...args)(value))

export const createElement = curryN(2, (Component, props) => createElementBase(Component, props, props.children))

export const getLastSegment = (url: string): string => url.replace(/.*\//, "")

export const getUrlSegments = (url: string): string => filter((str = '') => str.length > 0, url.split('/'))

export const pickOnlyTheseKeys = curryN(2,
  (keysToKeep: Array<{src: string, dest?: string}> = [], item: object = {}) =>
    keysToKeep.reduce(
      (result, key) => {
        const splitKeys = key.src.split('.')
        const destKeys = key.dest ? key.dest.split('.') : [ last(splitKeys) ]
        return assocPath(destKeys, path(splitKeys, item), result)
      },
      {}
    )
)

export const createSelector = curryN(2, (selector: ParametricSelector<object, {}, any>[], combiner: (...args: any[]) => any) => createSelectorBase(selector, combiner))
