export interface Import {
  members: Array<string>
  moduleName: string
}

interface File {
  data: string
}

export interface NamedFile extends File {
  imported: Array<Import>
  name: string
}

export interface SimpleFile extends File {
  path: string
}
