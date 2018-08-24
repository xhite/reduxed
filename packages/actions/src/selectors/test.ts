import {
  createSelectors,
  getLastSegment,
  getUrlSegments,
  indexAsKey,
  pickOnlyTheseKeys,
  transduceIntoArray,
  transduceIntoObject
} from './index'

test('createSelectors', () => {
  const parentSelector = () => ({
    a: 'a',
    b: 'b',
    aa: 'aa'
  })
  const selectors = createSelectors(parentSelector, [
    'a',
    'b',
    'aa'
  ])
  expect(selectors.getA({})).toBe('a')
  expect(selectors.getB({})).toBe('b')
  expect(selectors.getAa({})).toBe('aa')
})

test('indexAsKey', () => {
  const props = () => ({
    a: 'a'
  })
  const key = 1
  expect(indexAsKey(props, key)).toEqual({ ...props, key })
})

test('getLastSegment', () => {
  expect(getLastSegment('/logo/id')).toEqual('id')
})

test('getUrlSegments', () => {
  expect(getUrlSegments('/logo/id')).toEqual([ 'logo', 'id' ])
  expect(getUrlSegments('/logo/id/')).toEqual([ 'logo', 'id' ])
})

test('pickOnlyTheseKeys', () => {
  const keysToKeep = [
    { src: 'a' },
    { src: 'b.c', dest: 'b' },
    { src: 'b.d' }
  ]
  const pickKeys = pickOnlyTheseKeys(keysToKeep)
  expect(pickKeys({ a: 'aprop', b: { c: 'cprop', d: 'dprop' } })).toEqual({ a: 'aprop', b: 'cprop', d: 'dprop' })
})

test('transduceIntoObject', () => {
  const obj = { a: 1, b: 2 }
  const tenx = transduceIntoObject(x => x * 2, x => x * 5)
  expect(tenx(obj)).toEqual({ a: 10, b: 20 })
})
