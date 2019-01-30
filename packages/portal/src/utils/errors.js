const DUPLICATE_EMAIL = 'email_1 dup key'
const DUPLICATE_UERNAME = 'username_1 dup key'

const registrationErrors = string => {
  if (string.includes(DUPLICATE_EMAIL)) {
    return 'Email address already in use!'
  }
  if (string.includes(DUPLICATE_UERNAME)) {
    return 'Username already in use!'
  }
}

const getErrorField = string => {
  if (string.includes(DUPLICATE_EMAIL)) {
    console.log(' error email ')
    return 'email'
  }
  if (string.includes(DUPLICATE_UERNAME)) {
    console.log(' error username ')
    return 'username'
  }
}

export { registrationErrors, getErrorField }
