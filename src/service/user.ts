import { loginUserRequest, RegisterUserRequest, User } from "../model/user";
import { UserValidation } from "./user-validation";
import { PasswordUtil } from "../util/password";
import { validate } from "../util/validation";
import { prismaClient } from "../db/db";
import { Prisma } from "@prisma/client";
import { JwtService } from "../util/jwt";

class UserService {
  static async signUp(request: RegisterUserRequest): Promise<User> {
    request = validate(UserValidation.REGISTER, request);

    const isUserExist : number = await prismaClient.user.count({
      where: { username: request.username },
    });

    if (isUserExist != 0) {
      throw new Error("user already exist!");
    }

    const isEmailExist : number = await prismaClient.user.count({
      where: { email: request.email },
    });

    if (isEmailExist != 0) {
      throw new Error("email already exist!");
    }

    const hashedPassword : string = await PasswordUtil.hash(request.password);

    const newUser: Prisma.UserCreateInput = {
      username: request.username,
      email: request.email,
      password: hashedPassword,
    };

    const user : User = await prismaClient.user.create({ data: newUser });

    const { password, ...res } = user;

    return res;
  }

  static async signIn(request: loginUserRequest): Promise<string> {
    request = validate(UserValidation.LOGIN, request);

    const user = await prismaClient.user.findFirst({
      where: { email: request.email },
    });

    if (!user || !(await PasswordUtil.compare(request.password, user.password))) {
      throw new Error("email or password is wrong!");
    }

    const payload : User = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    const accessToken : string = JwtService.generateAccessToken(payload);

    return accessToken;
  }
}

export default UserService;
