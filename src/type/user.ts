export interface IUser {
  name: string;
  email: string;
  password: string;
}

export type TRegistrationForm = IUser & { confirmPassword: string };

export type TLoginForm = Omit<IUser, "name">;

export interface IAuthContextType {
  isAuthenticate: boolean;
  user: IUser | null;
  login: (user: IUser) => void;
  isCheckingAuthState: boolean;
  logout: () => void;
}
