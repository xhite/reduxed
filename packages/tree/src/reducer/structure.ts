import {
  createFile
} from '../utils'
import { SimpleFile } from '../model'

export const reducerFile: SimpleFile = createFile({
  name: 'reducer',
  imported: [
    { members: [ 'handleActions' ], moduleName: 'redux-actions' },
    { members: [], moduleName: './actions' }
  ],
  data: `
const initialState = {
}

export default handleActions({
}, initialState)
`
})

export const indexFile: SimpleFile = createFile({
  name: 'index',
  imported: [
    { members: [ 'reducer' ], moduleName: './reducer' },
    { members: [], moduleName: './actions' }
  ],
  data: `
export default reducer
`
})

export const actionsFile: SimpleFile = createFile({
  name: 'actions',
  imported: [
    { members: [ 'createActions' ], moduleName: 'redux-actions' }
  ],
  data: `
export const names = [
]

export const creators = createActions(...names)

export const {
} = creators
  `
})
