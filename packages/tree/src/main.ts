import {
  reducerOption,
  hasOptions
} from './paths'
import { writeFile } from './utils'
import reducerFiles from './reducer/index'
import componentFiles from './component/index'

const writeReducerFiles = (): Array<Promise<string>> =>
  reducerFiles.map(writeFile)

const writeComponentFiles = (): Array<Promise<string>> =>
  componentFiles.map(writeFile)

const writeFiles = reducerOption ? writeReducerFiles : writeComponentFiles

hasOptions && writeFiles()
