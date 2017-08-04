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
