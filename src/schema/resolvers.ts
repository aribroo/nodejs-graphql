import { filterError } from "../util/error-handling";
import { RegisterUserRequest } from "../model/user";
import { loginUserRequest } from "./../model/user";
import UserService from "../service/user";
import { ZodError } from "zod";

const resolvers = {
  Mutation: {
    signUp: async (_: any, request: RegisterUserRequest) => {
      try {
        const result = await UserService.signUp(request);
        return {
          message: "signup successfully",
          user: result,
        };
      } catch (e: any) {
        if (e instanceof ZodError) {
          // If the error from Zod validation, filter the errors here
          const errors = filterError(e);
          throw new Error(JSON.stringify(errors));
        } else {
          throw new Error(e.message);
        }
      }
    },

    signIn: async (_: any, request: loginUserRequest) => {
      try {
        const result = await UserService.signIn(request);
        return {
          accessToken: result,
        };
      } catch (e: any) {
        if (e instanceof ZodError) {
          // If the error from Zod validation, filter the errors here
          const errors = filterError(e);
          throw new Error(JSON.stringify(errors));
        } else {
          throw new Error(e.message);
        }
      }
    },
  },
};

export default resolvers;
