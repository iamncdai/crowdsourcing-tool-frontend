import { IUser } from "@/models/auth-store";

import { Response } from "../type";

export type RequestGetMeResult = Response<IUser>;

export type RequestLoginBody = {
  UserName: string;
  Password: string;
};

export type LoginResult = {
  accessToken: string;
  status: "error" | "success";
  message: string;
  token: string;
};

export type RequestLoginResult = Response<LoginResult>;
