import { actionsFile } from './actions'
import { indexFile } from './index'
import { hasOptions } from './paths'
import { reducerFile } from './reducer'
import { writeFile } from './utils'

const writeFiles = (): Array<Promise<string>> => [
  actionsFile,
  reducerFile,
  indexFile
].map(writeFile)

hasOptions && writeFiles()
