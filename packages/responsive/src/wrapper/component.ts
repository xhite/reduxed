import { cloneElement } from 'react'

export default ({
  children,
  output: { changeDimensions }
}) =>
  cloneElement(children, { onLayout: changeDimensions })
