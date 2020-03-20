export type User = null | { uid: string }
export type SetUser = null | React.Dispatch<React.SetStateAction<User>>

export interface IAuthState {
  currentUser: User
  setCurrentUser: SetUser
}