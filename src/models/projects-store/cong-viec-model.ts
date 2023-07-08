import { Instance, types } from "mobx-state-tree";

const DS_TRANG_THAI_CV = [
  "NONE",
  "PENDING",
  "DONE",
  "APPROVED",
  "REJECTED",
] as const;

export const CongViecModel = types.model("CongViecModel").props({
  _id: types.maybeNull(types.string),
  idDuAn: types.maybeNull(types.number),
  idDuLieu: types.maybeNull(types.number),
  tenDuAn: types.maybeNull(types.string),
  idLoaiNhan: types.maybeNull(types.string),
  vanBan: types.maybeNull(types.string),
  trangThai: types.maybeNull(types.enumeration([...DS_TRANG_THAI_CV])),
  phanCong: types.maybeNull(types.string),
});

export type ICongViec = Instance<typeof CongViecModel>;
export type ITrangThaiCV = (typeof DS_TRANG_THAI_CV)[number];
