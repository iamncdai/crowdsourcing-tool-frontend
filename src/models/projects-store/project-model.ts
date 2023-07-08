import { Instance, types } from "mobx-state-tree";

export const ProjectModel = types.model("ProjectModel").props({
  idDuAn: types.maybeNull(types.identifierNumber),
  TenDA: types.maybeNull(types.string),

  idLoaiNhan: types.maybeNull(types.string),
  LoaiNhan: types.maybeNull(types.string),
});

export type IProject = Instance<typeof ProjectModel>;
