import {
  Selector
} from 'reselect'

export interface SelectorsMapObject {
  [key: string]: Selector<any, any>
}
