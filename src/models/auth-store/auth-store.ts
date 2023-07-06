import { applySnapshot, cast, flow, getRoot, types } from "mobx-state-tree";
import Nookies from "nookies";

import { APP_CONSTANTS } from "@/constants";
import { AuthTypes } from "@/services/api/auth-api";

import { withEnvironment } from "../extensions/with-environment";
import { IRootStore } from "../root-store";
import { UserModel } from "./user-model";

export const AuthStoreModel = types
  .model("AuthStore")
  .props({
    isAuth: types.optional(types.boolean, false),
    user: types.optional(UserModel, {}),
  })
  .extend(withEnvironment)
  .actions((self) => {
    const actions = {
      setAuth(isAuth: boolean) {
        this.isAuth = isAuth;
      },

      login: flow(function* (
        data: AuthTypes.RequestLoginBody,
        isRememberMe?: boolean
      ) {
        const res: AuthTypes.RequestLoginResult = yield self.authApi.login(
          data
        );

        if (res.kind !== "ok") {
          return false;
        }

        if (res.result.status === "error") {
          return false;
        }

        Nookies.set(undefined, APP_CONSTANTS.AUTH, res.result.token, {
          path: "/",
          maxAge: isRememberMe ? 7 * 24 * 60 * 60 : null, // 7 days
        });

        return true;
      }),

      logout() {
        Nookies.destroy(undefined, APP_CONSTANTS.AUTH);

        const rootStore = getRoot<IRootStore>(self);
        applySnapshot(rootStore, {});
      },

      getMe: flow(function* () {
        const res: AuthTypes.RequestGetMeResult = yield self.authApi.getMe();

        if (res.kind !== "ok") {
          return null;
        }

        self.user = cast(res.result);

        return res.result;
      }),
    };

    return actions;
  });
