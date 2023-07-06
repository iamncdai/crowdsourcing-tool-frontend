import { Instance, SnapshotOut, types } from "mobx-state-tree";

import { AuthStoreModel } from "../auth-store";
import { withEnvironment } from "../extensions/with-environment";

export const RootStoreModel = types
  .model({
    authStore: types.optional(AuthStoreModel, {}),
  })
  .extend(withEnvironment);

export type IRootStore = Instance<typeof RootStoreModel>;
export type IRootStoreSnapshot = SnapshotOut<typeof RootStoreModel>;
export type IStoreSnapshotOut = SnapshotOut<typeof RootStoreModel>;