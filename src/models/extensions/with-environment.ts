import { getEnv, IStateTreeNode } from "mobx-state-tree";

import { AuthApi } from "@/services/api/auth-api";
import { CoreApi } from "@/services/api/core-api";

import { Environment } from "../environment";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withEnvironment = (self: IStateTreeNode) => ({
  views: {
    get environment() {
      return getEnv<Environment>(self);
    },
  },
  state: {
    authApi: AuthApi,
    coreApi: CoreApi,
  },
});
