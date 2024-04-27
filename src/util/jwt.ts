import { User } from "../model/user";
import jwt from "jsonwebtoken";

export class JwtService {
  static generateAccessToken(payload: User): string {
    return jwt.sign(payload, String(process.env.SECRET_KEY), {
      algorithm: "HS256",
      expiresIn: "30s",
    });
  }
}
