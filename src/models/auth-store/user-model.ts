import { Instance, types } from "mobx-state-tree";

export const UserModel = types.model("UserModel").props({
  idUser: types.maybeNull(types.number),
  UserName: types.maybeNull(types.string),
  Hoten: types.maybeNull(types.string),
  typeUser: types.maybeNull(types.number),
  LevelUser: types.maybeNull(types.number),
});

export type IUser = Instance<typeof UserModel>;

export enum ETypeUser {
  NguoiGanNhan = 1,
  QuanLi = 2,
}

export enum ELevelUser {
  NguoiGanNhanCap1 = 1,
  NguoiGanNhanCap2 = 2,
}
