import { join } from 'path'

const pkgPath: string = join(__dirname, '..', '..')
const srcPath: string = join(pkgPath, 'src')

export const dstPath: string = join(pkgPath, 'dist')
export const findPath = (filename: string): string => join(srcPath, `${filename}.ts`)
