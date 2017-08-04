import {
  createFile
} from '../utils'
import { SimpleFile } from '../model'

export const componentFile: SimpleFile = createFile({
  name: 'reducer',
  imported: [
    { members: [ 'handl' ], moduleName: './reducer' },
    { members: [], moduleName: './actions' }
  ],
  data: `
import { handleActions } from 'redux-actions'

import {
} from './actions'

const initialState = {
}

export default handleActions({
}, initialState)
  `
})
