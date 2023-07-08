import { ILanguage, IUserType1 } from "@/models/common-store";
import { IProject } from "@/models/projects-store";
import {
  ICongViec,
  ITrangThaiCV,
} from "@/models/projects-store/cong-viec-model";
import { IDuLieu } from "@/models/projects-store/du-lieu-model";

import { Response } from "../type";

export type GetLanguageResult = ILanguage[];
export type RequestGetLanguageResult = Response<GetLanguageResult>;

export type GetDsPhanCongResult = IUserType1[];
export type RequestGetDsPhanCongResult = Response<GetDsPhanCongResult>;

export type GetDsDuAnResult = IProject[];
export type RequestGetDsDuAnResult = Response<GetDsDuAnResult>;

export type GetDsDuLieuResult = IDuLieu[];
export type RequestGetDsDuLieuResult = Response<GetDsDuLieuResult>;

export type GetDuAnResult = IProject;
export type RequestGetDuAnResult = Response<GetDuAnResult>;

export type RequestThemDuAnBody = {
  tenDuAn: string;
  idLoaiNhan: string;
};
export type ThemDuAnResult = {
  status: "success" | "error";
  message: string;
};
export type RequestThemDuAnResult = Response<ThemDuAnResult>;

export type ThemDuLieuResult = {
  status: "success" | "error";
  message: string;
};
export type RequestThemDuLieuResult = Response<ThemDuLieuResult>;

export type RequestThemDLPhanLoaiVanBanBody = {
  idDuAn: number;
  vanBan: string;
  dsPhanCong: string[];
};

export type RequestThemDLHoiDapBody = {
  idDuAn: number;
  cauHoi: string;
  vanBan: string;
  dsPhanCong: string[];
};

export type RequestThemDLGanNhanThucTheBody = {
  idDuAn: number;
  vanBan: string;
  dsPhanCong: string[];
};

export type RequestThemDLGanNhanCapVanBanBody = {
  idDuAn: number;
  vanBan1: string;
  vanBan2: string;
  dsPhanCong: string[];
};

export type RequestThemDLDichMayBody = {
  idDuAn: number;
  vanBan: string;
  idNgonNgu: number;
  dsPhanCong: string[];
};

export type RequestThemDLCauHoiDongNghiaBody = {
  idDuAn: number;
  cauHoi: string;
  dsPhanCong: string[];
};

export type RequestThemDLCapCauHoiVanBanBody = {
  idDuAn: number;
  vanBan: string;
  cauHoi: string;
  dsPhanCong: string[];
};

type IDLBase = {
  idDuLieu: number;
  tenLoaiNhan: string;
  dsPhanCong: string[];
  idNguoiGanNhan?: number;
  trangThai?: ITrangThaiCV;
};

export type IDLPhanLoaiVanBan = {
  idLoaiNhan: "Phan_Loai_Van_Ban";
  vanBan: string;
  noiDung?: string;
} & IDLBase;

export type IDLHoiDap = {
  idLoaiNhan: "Hoi_Dap";
  vanBan: string;
  cauHoi: string;
  noiDung?: string;
} & IDLBase;

export type IDLCauHoiDongNghia = {
  idLoaiNhan: "Tim_Cau_Hoi_Dong_Nghia";
  cauHoi: string;
  dsCauHoiDongNghia?: string[];
} & IDLBase;

export type IDLCapCauHoiVanBan = {
  idLoaiNhan: "Cap_Cau_Hoi_Van_Ban";
  vanBan: string;
  cauHoi: string;
  noiDung?: string;
} & IDLBase;

export type IDLGanNhanThucThe = {
  idLoaiNhan: "Gan_Nhan_Thuc_The";
  vanBan: string;
  dsThucThe?: string[];
} & IDLBase;

export type IDLGanNhanCapVanBan = {
  idLoaiNhan: "Gan_Nhan_Cap_Van_Ban";
  vanBan1: string;
  vanBan2: string;
  noiDung?: string;
} & IDLBase;

export type IDLDichMay = {
  idLoaiNhan: "Dich_May";
  vanBanGoc: string;
  idNgonNguGoc: number;
  tenNgonNguGoc: string;

  vanBanDich?: string;
  idNgonNguDich?: string;
  tenNgonNguDich?: string;
} & IDLBase;

export type GetDuLieuResult =
  | IDLPhanLoaiVanBan
  | IDLHoiDap
  | IDLCauHoiDongNghia
  | IDLCapCauHoiVanBan
  | IDLGanNhanThucThe
  | IDLGanNhanCapVanBan
  | IDLDichMay;

export type RequestGetDuLieuResult = Response<GetDuLieuResult>;

export type GanNhanResult = {
  status: "success" | "error";
  message: string;
};

export type RequestGanNhanPhanLoaiVanBanBody = {
  idDuLieu: number;
  noiDung: string;
};

export type RequestGanNhanHoiDapBody = {
  idDuLieu: number;
  noiDung: string;
};

export type RequestGanNhanThucTheBody = {
  idDuLieu: number;
  dsTenThucThe: string[];
};

export type RequestGanNhanCapVanBanBody = {
  idDuLieu: number;
  noiDung: string;
};

export type RequestGanNhanDichMayBody = {
  idDuLieu: number;
  noiDung: string;
  idNgonNguDich: number;
};

export type RequestGanNhanCauHoiDongNghiaBody = {
  idDuLieu: number;
  dsCauHoiDongNghia: string[];
};

export type RequestGanNhanCapCauHoiVanBanBody = {
  idDuLieu: number;
  noiDung: string;
};

export type RequestGanNhanResult = Response<GanNhanResult>;

export type GetDsCongViecResult = ICongViec[];
export type RequestGetDsCongViecResult = Response<GetDsCongViecResult>;

export type DuyetGanNhanResult = {
  status: "success" | "error";
  message: string;
};
export type RequestDuyetGanNhanResult = Response<DuyetGanNhanResult>;
