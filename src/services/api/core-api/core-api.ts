import { ApiResponse, ApisauceInstance } from "apisauce";

import { ITrangThaiCV } from "@/models/projects-store/cong-viec-model";

import { ApiConfig } from "../api-config";
import { Api } from "../api-core";
import { returnResponse } from "../api-utilities";
import * as Types from "./type";

const prefix = ApiConfig().core;

const api: ApisauceInstance = Api.getInstance();

const routes = {
  getLanguages: () => `${prefix}/ds-ngonngu`,
  getDsPhanCong: () => `${prefix}/ds-phancong`,
  getDsDuAn: () => `${prefix}/du-an/danh-sach`,
  getDsDuLieu: (idDuAn: number) => `${prefix}/du-an/${idDuAn}/ds-du-lieu`,

  getDuAn: (idDuAn: number) => `${prefix}/du-an/${idDuAn}/chi-tiet`,
  themDuAn: () => `${prefix}/du-an/them`,

  themDLPhanLoaiVanBan: () => `${prefix}/phan-loai-van-ban/them`,
  themDLHoiDap: () => `${prefix}/hoi-dap/them`,
  themDLGanNhanThucThe: () => `${prefix}/thuc-the/them`,
  themDLGanNhanCapVanBan: () => `${prefix}/van-ban-dong-nghia/them`,
  themDLDichMay: () => `${prefix}/dich-may/them`,
  themDLCauHoiDongNghia: () => `${prefix}/cau-hoi-dong-nghia/them`,
  themDLCapCauHoiVanBan: () => `${prefix}/cap-cau-hoi-van-ban/them`,

  getDuLieu: (idDuLieu: number) => `${prefix}/du-lieu/${idDuLieu}/chi-tiet`,
  getDsCongViec: () => `${prefix}/du-lieu/ds-cong-viec`,
  getCTGanNhan: (idDuLieu: number) =>
    `${prefix}/du-lieu/${idDuLieu}/chi-tiet-gan-nhan`,
  duyetGanNhan: (idDuLieu: number) =>
    `${prefix}/du-lieu/${idDuLieu}/duyet-gan-nhan`,

  ganNhanPhanLoaiVanBan: () => `${prefix}/phan-loai-van-ban/gan-nhan`,
  ganNhanHoiDap: () => `${prefix}/hoi-dap/gan-nhan`,
  ganNhanThucThe: () => `${prefix}/thuc-the/gan-nhan`,
  ganNhanCapVanBan: () => `${prefix}/van-ban-dong-nghia/gan-nhan`,
  ganNhanDichMay: () => `${prefix}/dich-may/gan-nhan`,
  ganNhanCauHoiDongNghia: () => `${prefix}/cau-hoi-dong-nghia/gan-nhan`,
  ganNhanCapCauHoiVanBan: () => `${prefix}/cap-cau-hoi-van-ban/gan-nhan`,
};

export const CoreApi = {
  async getLanguages(): Promise<Types.RequestGetLanguageResult> {
    const url = routes.getLanguages();
    const result: ApiResponse<Types.GetLanguageResult> = await api.get(url);
    return returnResponse(result);
  },

  async getDsPhanCong(): Promise<Types.RequestGetDsPhanCongResult> {
    const url = routes.getDsPhanCong();
    const result: ApiResponse<Types.GetDsPhanCongResult> = await api.get(url);
    return returnResponse(result);
  },

  // DuAn

  async getDsDuAn(): Promise<Types.RequestGetDsDuAnResult> {
    const url = routes.getDsDuAn();
    const result: ApiResponse<Types.GetDsDuAnResult> = await api.get(url);
    return returnResponse(result);
  },

  async getDuAn(idDuAn: number): Promise<Types.RequestGetDuAnResult> {
    const url = routes.getDuAn(idDuAn);
    const result: ApiResponse<Types.GetDuAnResult> = await api.get(url);
    return returnResponse(result);
  },

  async themDuAn(
    body: Types.RequestThemDuAnBody
  ): Promise<Types.RequestThemDuAnResult> {
    const url = routes.themDuAn();
    const result: ApiResponse<Types.ThemDuAnResult> = await api.post(url, body);
    return returnResponse(result);
  },

  // DuLieu

  async getDsDuLieu(idDuAn: number): Promise<Types.RequestGetDsDuLieuResult> {
    const url = routes.getDsDuLieu(idDuAn);
    const result: ApiResponse<Types.GetDsDuLieuResult> = await api.get(url);
    return returnResponse(result);
  },

  async getDuLieu(idDuLieu: number): Promise<Types.RequestGetDuLieuResult> {
    const url = routes.getDuLieu(idDuLieu);
    const result: ApiResponse<Types.GetDuLieuResult> = await api.get(url);
    return returnResponse(result);
  },

  async themDLPhanLoaiVanBan(
    body: Types.RequestThemDLPhanLoaiVanBanBody
  ): Promise<Types.RequestThemDuLieuResult> {
    const url = routes.themDLPhanLoaiVanBan();
    const result: ApiResponse<Types.ThemDuLieuResult> = await api.post(
      url,
      body
    );
    return returnResponse(result);
  },

  // help me create: themDLHoiDap
  async themDLHoiDap(
    body: Types.RequestThemDLHoiDapBody
  ): Promise<Types.RequestThemDuLieuResult> {
    const url = routes.themDLHoiDap();
    const result: ApiResponse<Types.ThemDuLieuResult> = await api.post(
      url,
      body
    );
    return returnResponse(result);
  },

  // themDLGanNhanThucThe
  async themDLGanNhanThucThe(
    body: Types.RequestThemDLGanNhanThucTheBody
  ): Promise<Types.RequestThemDuLieuResult> {
    const url = routes.themDLGanNhanThucThe();
    const result: ApiResponse<Types.ThemDuLieuResult> = await api.post(
      url,
      body
    );
    return returnResponse(result);
  },

  // themDLGanNhanCapVanBan
  async themDLGanNhanCapVanBan(
    body: Types.RequestThemDLGanNhanCapVanBanBody
  ): Promise<Types.RequestThemDuLieuResult> {
    const url = routes.themDLGanNhanCapVanBan();
    const result: ApiResponse<Types.ThemDuLieuResult> = await api.post(
      url,
      body
    );
    return returnResponse(result);
  },

  // themDLDichMay
  async themDLDichMay(
    body: Types.RequestThemDLDichMayBody
  ): Promise<Types.RequestThemDuLieuResult> {
    const url = routes.themDLDichMay();
    const result: ApiResponse<Types.ThemDuLieuResult> = await api.post(
      url,
      body
    );
    return returnResponse(result);
  },

  // themDLCauHoiDongNghia
  async themDLCauHoiDongNghia(
    body: Types.RequestThemDLCauHoiDongNghiaBody
  ): Promise<Types.RequestThemDuLieuResult> {
    const url = routes.themDLCauHoiDongNghia();
    const result: ApiResponse<Types.ThemDuLieuResult> = await api.post(
      url,
      body
    );
    return returnResponse(result);
  },

  // themDLCapCauHoiVanBan
  async themDLCapCauHoiVanBan(
    body: Types.RequestThemDLCapCauHoiVanBanBody
  ): Promise<Types.RequestThemDuLieuResult> {
    const url = routes.themDLCapCauHoiVanBan();
    const result: ApiResponse<Types.ThemDuLieuResult> = await api.post(
      url,
      body
    );
    return returnResponse(result);
  },

  // GanNhan
  // ganNhanPhanLoaiVanBan
  async ganNhanPhanLoaiVanBan(
    body: Types.RequestGanNhanPhanLoaiVanBanBody
  ): Promise<Types.RequestGanNhanResult> {
    const url = routes.ganNhanPhanLoaiVanBan();
    const result: ApiResponse<Types.GanNhanResult> = await api.post(url, body);
    return returnResponse(result);
  },

  // ganNhanHoiDap
  async ganNhanHoiDap(
    body: Types.RequestGanNhanHoiDapBody
  ): Promise<Types.RequestGanNhanResult> {
    const url = routes.ganNhanHoiDap();
    const result: ApiResponse<Types.GanNhanResult> = await api.post(url, body);
    return returnResponse(result);
  },

  // ganNhanThucThe
  async ganNhanThucThe(
    body: Types.RequestGanNhanThucTheBody
  ): Promise<Types.RequestGanNhanResult> {
    const url = routes.ganNhanThucThe();
    const result: ApiResponse<Types.GanNhanResult> = await api.post(url, body);
    return returnResponse(result);
  },

  // ganNhanCapVanBan
  async ganNhanCapVanBan(
    body: Types.RequestGanNhanCapVanBanBody
  ): Promise<Types.RequestGanNhanResult> {
    const url = routes.ganNhanCapVanBan();
    const result: ApiResponse<Types.GanNhanResult> = await api.post(url, body);
    return returnResponse(result);
  },

  // ganNhanDichMay
  async ganNhanDichMay(
    body: Types.RequestGanNhanDichMayBody
  ): Promise<Types.RequestGanNhanResult> {
    const url = routes.ganNhanDichMay();
    const result: ApiResponse<Types.GanNhanResult> = await api.post(url, body);
    return returnResponse(result);
  },

  // ganNhanCauHoiDongNghia
  async ganNhanCauHoiDongNghia(
    body: Types.RequestGanNhanCauHoiDongNghiaBody
  ): Promise<Types.RequestGanNhanResult> {
    const url = routes.ganNhanCauHoiDongNghia();
    const result: ApiResponse<Types.GanNhanResult> = await api.post(url, body);
    return returnResponse(result);
  },

  // ganNhanCapCauHoiVanBan
  async ganNhanCapCauHoiVanBan(
    body: Types.RequestGanNhanCapCauHoiVanBanBody
  ): Promise<Types.RequestGanNhanResult> {
    const url = routes.ganNhanCapCauHoiVanBan();
    const result: ApiResponse<Types.GanNhanResult> = await api.post(url, body);
    return returnResponse(result);
  },

  async getDsCongViec(): Promise<Types.RequestGetDsCongViecResult> {
    const url = routes.getDsCongViec();
    const result: ApiResponse<Types.GetDsCongViecResult> = await api.get(url);
    return returnResponse(result);
  },

  async getCTGanNhan(idDuLieu: number): Promise<Types.RequestGetDuLieuResult> {
    const url = routes.getCTGanNhan(idDuLieu);
    const result: ApiResponse<Types.GetDuLieuResult> = await api.get(url);
    return returnResponse(result);
  },

  async duyetGanNhan(
    idDuLieu: number,
    idNguoiGanNhan: number,
    trangThai: ITrangThaiCV
  ): Promise<Types.RequestDuyetGanNhanResult> {
    const url = routes.duyetGanNhan(idDuLieu);
    const result: ApiResponse<Types.DuyetGanNhanResult> = await api.put(url, {
      idNguoiGanNhan,
      trangThai,
    });
    return returnResponse(result);
  },
};
