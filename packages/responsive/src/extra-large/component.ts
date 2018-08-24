export default ({
  children,
  input: screenIsExtraLarge
}) =>
  screenIsExtraLarge ? children : ''
