import { ServiceResponse } from "../type/service";
import { IUser, TLoginForm } from "../type/user";

export function register(user: IUser): ServiceResponse<IUser> {
  try {
    console.log(user);
    const returnUser = JSON.parse(JSON.stringify(user));
    delete returnUser.password;

    return { ok: true, data: user };
  } catch (error) {
    console.log(error);

    return { ok: false, error: "Unexpected Error." };
  }
}

export function signIn(user: TLoginForm): ServiceResponse<IUser> {
  const existingUser: IUser = {
    name: "Jimy",
    email: "jimy@gmail.com",
    password: "Asdf123#",
  };
  try {
    if (
      user.email === existingUser.email &&
      user.password == existingUser.password
    ) {
      const returnUser = JSON.parse(JSON.stringify(existingUser));
      delete returnUser.password;

      return { ok: true, data: returnUser };
    } else {
      return { ok: false, error: "Invalid credentials." };
    }
  } catch (error) {
    console.log(error);

    return { ok: false, error: "Unexpected Error." };
  }
}
