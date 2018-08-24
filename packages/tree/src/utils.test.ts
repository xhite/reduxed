import { outputFile } from 'fs-extra'

import {
  NamedFile,
  SimpleFile
} from './model'
import {
  createFile,
  writeFile
} from './utils'
import {
  findFile,
  hasOptions
} from './paths'

jest.mock('fs-extra')

test('createFile', () => {
  const file: NamedFile = {
    data: 'content',
    imported: [
      { members: ['member1', 'member2'], moduleName: 'module' }
    ],
    name: 'filename'
  }
  const { data, path } = createFile(file)
  expect(data).toBe("import {\nmember1,\nmember2\n} from 'module'\ncontent")
  expect(path).toBe(findFile('filename'))
})

test('createFile with an empty file', () => {
  const file: NamedFile = {
    data: '',
    imported: [],
    name: ''
  }
  const { data, path } = createFile(file)
  expect(data).toBe('\n')
  expect(path).toBe(findFile(''))
})

test('writeFile', () => {
  const file: SimpleFile = {
    path: 'path/to/file',
    data: ''
  }
  const spy = jest.spyOn(console, 'info')
  outputFile.mockResolvedValue()
  writeFile(file)
    .then(() => {
      expect(spy).toHaveBeenCalled()
      spy.mockReset()
      spy.mockRestore()
    })
})

test('hasOptions', () => {
  expect(hasOptions).toBe(true)
})
