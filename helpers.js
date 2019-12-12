export function isAuthError(errorObject) {
  return errorObject.response.status === 401
}
