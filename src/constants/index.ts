export const APP_CONSTANTS = {
  AUTH: "@CrowdsourcingTool/AUTH_TOKEN",
};

export const ROUTES_NO_AUTH = ["/login"];

export const LOAI_NHAN_OPTIONS = [
  { value: "Phan_Loai_Van_Ban", label: "Phân loại văn bản" },
  { value: "Hoi_Dap", label: "Hỏi đáp" },
  { value: "Gan_Nhan_Thuc_The", label: "Gán nhãn thực thể" },
  {
    value: "Gan_Nhan_Cap_Van_Ban",
    label: "Gán nhãn cặp văn bản (đồng nghĩa)",
  },
  {
    value: "Cap_Cau_Hoi_Van_Ban",
    label: "Gán nhãn câu trả lời của cặp câu hỏi và văn bản",
  },
  {
    value: "Tim_Cau_Hoi_Dong_Nghia",
    label: "Tìm câu hỏi đồng nghĩa",
  },
  { value: "Dich_May", label: "Dịch máy" },
];
