export interface IUser {
  blocked: boolean;
  confirmed: boolean;
  createdAt: string;
  email: string;
  id: number;
  username: string;
}

export interface IAuthState {
  user: IUser | null;
  token: string | null;
}
