import { Instance, SnapshotOut, types } from "mobx-state-tree";

import { AuthStoreModel } from "../auth-store";
import { CommonStoreModel } from "../common-store";
import { withEnvironment } from "../extensions/with-environment";
import { ProjectsStoreModel } from "../projects-store";

export const RootStoreModel = types
  .model({
    authStore: types.optional(AuthStoreModel, {}),
    commonStore: types.optional(CommonStoreModel, {}),
    projectsStore: types.optional(ProjectsStoreModel, {}),
  })
  .extend(withEnvironment);

export type IRootStore = Instance<typeof RootStoreModel>;
export type IRootStoreSnapshot = SnapshotOut<typeof RootStoreModel>;
export type IStoreSnapshotOut = SnapshotOut<typeof RootStoreModel>;
