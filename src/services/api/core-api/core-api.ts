import { ApiResponse, ApisauceInstance } from "apisauce";

import { ApiConfig } from "../api-config";
import { Api } from "../api-core";
import { returnResponse } from "../api-utilities";
import * as Types from "./type";

const prefix = ApiConfig().core;

const api: ApisauceInstance = Api.getInstance();

const routes = {
  getLanguages: () => `${prefix}/ds-ngonngu`,
  getDsPhanCong: () => `${prefix}/ds-phancong`,
};

export const CoreApi = {
  async getLanguages(): Promise<Types.RequestGetLanguageResult> {
    const url = routes.getLanguages();
    const result: ApiResponse<Types.GetLanguageResult> = await api.get(url);
    return returnResponse(result);
  },

  async getDsPhanCong(): Promise<Types.RequestGetDsPhanCongResult> {
    const url = routes.getDsPhanCong();
    const result: ApiResponse<Types.GetDsPhanCongResult> = await api.get(url);
    return returnResponse(result);
  },
};
