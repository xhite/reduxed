import {
  createFile
} from '../utils'
import { SimpleFile } from '../model'

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
