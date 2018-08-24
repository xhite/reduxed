import { createSelectors } from './index'

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
