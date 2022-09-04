export const login = async data => {
  const { userName, password } = data
  if (userName === 'tester' && password === 'AaBbCcDd') {
    return {
      userName,
      email: 'abc@gmail.com',
      profilePic: undefined,
    }
  } else {
    return undefined
  }
}
export const register = async data => {
  const { userName, password, email } = data
  if (userName && password && email) {
    return {
      userName,
      email,
      profilePic: undefined,
    }
  } else {
    return undefined
  }
}
