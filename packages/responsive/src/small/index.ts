import {
  connect
} from '@reduxed/actions'

import mapStateToProps from './input'
import mapDispatchToProps from './output'
import Component from './component'

export const ScreenIsSmall = connect(mapStateToProps, mapDispatchToProps)(Component)
