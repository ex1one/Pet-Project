export interface IUser {
  displayName: string;
  id: number;
  email: string;
  photoUrl: string;
  regDate: string;
}

export interface IAuthState {
  user: IUser | null;
  error: Error | null;
  isLoading: boolean;
  authToken: string | null;
}
