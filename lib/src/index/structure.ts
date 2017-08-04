import {
  createFile
} from '../utils'
import { SimpleFile } from '../model'

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
