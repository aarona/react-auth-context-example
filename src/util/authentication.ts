import { User } from "./interfaces"

type UserWithPassword = {
  email: string,
  password: string
}

export const login = (email:string, password:string): User => {
  const users:UserWithPassword[] = [
    { email: 'test@example.com', password: '123456' },
    { email: 'user@example.com', password: 'secret' }
  ]

  const validUser = users.find((user) => {
    return user.email === email && user.password === password
  })

  if(!validUser) {
    return null
  }

  return { uid: email }
}