import {
  outputFile
} from 'fs-extra'

import { findFile } from './paths'
import {
  Import,
  NamedFile,
  SimpleFile
} from './model'

const createImported = (imported: Array<Import>): string =>
  imported.map(({ members, moduleName }: Import): string => `import {\n${ members.join(',\n') }\n} from '${ moduleName }'` )
    .join('\n')

export const createFile = ({ data, imported = [], name, ext }: NamedFile): SimpleFile => ({
  path: findFile(name, ext),
  data: `${ createImported(imported) }\n${ data }`
})

export const writeFile = ({ path, data }: SimpleFile): Promise<string> => outputFile(path, data)
  .then(() => console.info(`${ path } created`) || path)
