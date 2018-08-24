import {
  getScreenIsSmall,
  setWidthDimensions
} from './selectors'

test('getScreenIsSmall', () => {
  expect(getScreenIsSmall({ ui: { dimensions: { width: 500 } } })).toBe(true)
  setWidthDimensions({ small: 700 })
  expect(getScreenIsSmall({ ui: { dimensions: { width: 600 } } })).toBe(true)
})
