export interface User {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  created_at?: Date;
}

export interface RegisterUserRequest {
  username: string;
  email: string;
  password: string;
}

export interface loginUserRequest {
  email: string;
  password: string;
}
