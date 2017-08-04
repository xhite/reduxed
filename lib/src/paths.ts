import {
  join
} from 'path'

const [
  path = '',
  name = ''
] = process.argv.slice(2)

const dirPath: string = join(path, name)

export const hasOptions = path.length > 0 && name.length > 0

export const findFile = (name: string): string => join(dirPath, `${name}.js`)
