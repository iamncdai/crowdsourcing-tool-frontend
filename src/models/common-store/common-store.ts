import { cast, flow, types } from "mobx-state-tree";

import { CoreTypes } from "@/services/api/core-api";

import { withEnvironment } from "../extensions/with-environment";
import { LanguageModel } from "./language-model";
import { UserType1Model } from "./user-type1-model";

export const CommonStoreModel = types
  .model("CommonStore")
  .props({
    languages: types.optional(types.array(LanguageModel), []),
    dsPhanCong: types.optional(types.array(UserType1Model), []),
  })
  .extend(withEnvironment)
  .views((self) => {
    const views = {
      get languageOptions() {
        return self.languages.map((item) => ({
          label: item.NgonNgu,
          value: item.idNgonNgu,
        }));
      },

      get viewDsPhanCongOptions() {
        return self.dsPhanCong.map((item) => ({
          label: `${item.HoTen} (@${item.userName})`,
          value: item.idUser,
        }));
      },
    };

    return views;
  })
  .actions((self) => {
    const actions = {
      getLanguages: flow(function* () {
        const res: CoreTypes.RequestGetLanguageResult =
          yield self.coreApi.getLanguages();

        if (res.kind !== "ok") {
          return null;
        }

        self.languages = cast(res.result);

        return res.result;
      }),

      getDsPhanCong: flow(function* () {
        const res: CoreTypes.RequestGetDsPhanCongResult =
          yield self.coreApi.getDsPhanCong();

        if (res.kind !== "ok") {
          return null;
        }

        self.dsPhanCong = cast(res.result);

        return res.result;
      }),
    };

    return actions;
  });
