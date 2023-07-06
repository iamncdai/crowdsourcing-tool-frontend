import { ApiResponse, ApisauceInstance } from "apisauce";

import { IUser } from "@/models/auth-store";

import { ApiConfig } from "../api-config";
import { Api } from "../api-core";
import { returnResponse } from "../api-utilities";
import * as Types from "./type";

const prefix = ApiConfig().auth;

const api: ApisauceInstance = Api.getInstance();

const routes = {
  login: () => `${prefix}/login`,
  getMe: () => `${prefix}/me`,
};

export const AuthApi = {
  async login(data: Types.RequestLoginBody): Promise<Types.RequestLoginResult> {
    const url = routes.login();
    const result: ApiResponse<Types.LoginResult> = await api.post(url, data);
    return returnResponse(result);
  },

  async getMe(): Promise<Types.RequestGetMeResult> {
    const url = routes.getMe();
    const result: ApiResponse<IUser> = await api.get(url);
    return returnResponse(result);
  },
};
