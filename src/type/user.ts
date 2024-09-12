export interface IUser {
  name: string;
  email: string;
  password: string;
}

export type TRegistrationForm = IUser | { confirmPassword: string };
