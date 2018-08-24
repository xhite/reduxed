import { connect } from '../../../actions/src/component/lib'

import mapStateToProps from './input'
import mapDispatchToProps from './output'
import Component from './component'

export default connect(mapStateToProps, mapDispatchToProps)(Component)
