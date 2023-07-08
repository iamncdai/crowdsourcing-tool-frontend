import { Instance, types } from "mobx-state-tree";

export const DuLieuModel = types.model("DuLieuModel").props({
  idDuAn: types.maybeNull(types.number),
  idDuLieu: types.maybeNull(types.number),
  tenDuAn: types.maybeNull(types.string),
  idLoaiNhan: types.maybeNull(types.string),
  vanBan: types.maybeNull(types.string),
  dsPhanCong: types.maybeNull(types.array(types.string)),
});

export type IDuLieu = Instance<typeof DuLieuModel>;
