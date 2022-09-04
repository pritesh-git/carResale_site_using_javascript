export const ValidateLogin = data => {
  const { userName, password } = data

  let errors = {}
  let isValid = true

  if (!userName) {
    isValid = false
    errors['userName'] = 'Please enter a username.'
  } else {
    if (!userName.match(/^[a-zA-Z]+$/)) {
      isValid = false
      errors['userName'] = 'Please enter only Alphabet.'
    }
  }
  if (!password || password.length <= 6) {
    isValid = false
    errors['password'] = 'Please enter 6 digit long password.'
  } else {
    if (!password.match(/^[a-zA-Z]+$/)) {
      isValid = false
      errors['password'] = 'Please enter only Alphabet.'
    }
  }

  return { errors, isValid }
}

export const ValidateRegister = data => {
  const { userName, email, password } = data

  let errors = {}
  let isValid = true

  if (!userName) {
    isValid = false
    errors['userName'] = 'Please enter a username.'
  } else {
    if (!userName.match(/^[a-zA-Z]+$/)) {
      isValid = false
      errors['userName'] = 'Please enter only Alphabet.'
    }
  }
  if (!password || password.length <= 6) {
    isValid = false
    errors['password'] = 'Please enter 6 digit long password.'
  } else {
    if (!password.match(/^[a-zA-Z]+$/)) {
      isValid = false
      errors['password'] = 'Please enter only Alphabet.'
    }
  }
  if (!email || email.length <= 6) {
    isValid = false
    errors['email'] = 'Please enter valid email'
  } else {
    const lastAtPos = email.lastIndexOf('@')
    const lastDotPos = email.lastIndexOf('.')
    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        email.indexOf('@@') === -1 &&
        lastDotPos > 2 &&
        email.length - lastDotPos > 2
      )
    ) {
      isValid = false
      errors['email'] = 'Please enter valid email'
    }
  }

  return { errors, isValid }
}
