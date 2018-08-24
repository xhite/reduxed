export default ({
  children,
  input: screenIsLarge
}) =>
  screenIsLarge ? children : ''
