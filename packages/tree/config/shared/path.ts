import { join } from 'path'

const rootPath: string = join(__dirname, '..', '..', '..')
const srcPath: string = join(rootPath, 'lib', 'src')

export const dstPath: string = join(rootPath, 'dist')
export const findPath = (filename: string): string => join(srcPath, `${filename}.ts`)
