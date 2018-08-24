import {
  reducerOption,
  hasOptions
} from './paths'
import { writeFile } from './utils'
import reducerFiles from './reducer'
import componentFiles from './component'

const writeReducerFiles = (): Array<Promise<void>> =>
  reducerFiles.map(writeFile)

const writeComponentFiles = (): Array<Promise<void>> =>
  componentFiles.map(writeFile)

const writeFiles = reducerOption ? writeReducerFiles : writeComponentFiles

if (hasOptions) {
  writeFiles()
}
