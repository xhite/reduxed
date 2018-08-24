import { createActions } from 'redux-actions'

const names = [
  'CHANGE_DIMENSIONS'
]

const creators = createActions(...names)

export const {
  changeDimensions
} = creators

