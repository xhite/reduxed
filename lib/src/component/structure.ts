import {
  createFile
} from '../utils'
import { SimpleFile } from '../model'

export const componentFile: SimpleFile = createFile({
  ext: 'jsx',
  name: 'component',
  data: `
export default ({ input, output }) =>
  <div></div>
`
})

export const inputFile: SimpleFile = createFile({
  name: 'input',
  data: `
export default state => ({
  })
`
})

export const outputFile: SimpleFile = createFile({
  name: 'output',
  data: `
export default {
}
`
})

export const indexFile: SimpleFile = createFile({
  name: 'index',
  imported: [
    { members: [ 'connect' ], moduleName: '@reduxed/actions' }
  ],
  data: `
import mapStateToProps from './input'
import mapDispatchToProps from './output'
import Component from './component'

export default connect(mapStateToProps, mapDispatchToProps)(Component)
`
})
