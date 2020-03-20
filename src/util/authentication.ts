import { User } from "./interfaces"

type UserWithPassword = {
  email: string,
  password: string
}

export const login = async (email:string, password:string) => {
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      const users: UserWithPassword[] = [
        { email: 'test@example.com', password: '123456' },
        { email: 'user@example.com', password: 'secret' }
      ]

      const validUser = users.find((user) => {
        return user.email === email && user.password === password
      })

      if (!validUser) {
        reject("User was not found!")
      }

      resolve({ uid: email } as User)
    }, 500)
  })
}

export const logout = async () => {
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 300)
  })
}

export const refreshToken = async () => {
  
}