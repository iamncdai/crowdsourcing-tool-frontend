import { ILanguage, IUserType1 } from "@/models/common-store";

import { Response } from "../type";

export type GetLanguageResult = ILanguage[];
export type RequestGetLanguageResult = Response<GetLanguageResult>;

export type GetDsPhanCongResult = IUserType1[];
export type RequestGetDsPhanCongResult = Response<GetDsPhanCongResult>;
