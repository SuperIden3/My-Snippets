var isArray = (variable: any): boolean => {
  if(variable[0] && (variable[variable.length - 1] || variable[variable.length - 2]) && variable.forEach) {
    return true
  } else {
    return false
  }
}
