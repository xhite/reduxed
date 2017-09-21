import {
  join
} from 'path'

const [
  path = '',
  name = '',
  option = ''
] = process.argv.slice(2)

const dirPath: string = join(path, name)

export const hasOptions: boolean = path.length > 0 && name.length > 0

export const reducerOption: boolean = option.includes('--reducer')

export const findFile = (name: string, ext: string = 'js'): string => join(dirPath, `${name}.${ext}`)
