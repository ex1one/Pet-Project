export interface IUser {
  id: number;
}

export interface IAuthState {
  user: IUser | null;
  isAuth: boolean;
  error: Error | null;
  isLoading: boolean;
}
