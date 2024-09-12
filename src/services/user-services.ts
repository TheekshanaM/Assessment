import { actionResponse } from "../type/service";
import { IUser } from "../type/user";

export function register(user: IUser): actionResponse<IUser> {
  try {
    console.log(user);
    return { ok: true, data: user };
  } catch (error) {
    console.log(error);

    return { ok: false, error: "Unexpected Error." };
  }
}
