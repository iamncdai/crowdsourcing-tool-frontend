import { Instance, types } from "mobx-state-tree";

export const UserType1Model = types.model("UserType1Model").props({
  idUser: types.maybeNull(types.number),
  HoTen: types.maybeNull(types.string),
  userName: types.maybeNull(types.string),
});

export type IUserType1 = Instance<typeof UserType1Model>;
