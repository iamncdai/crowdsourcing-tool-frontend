import { cast, flow, types } from "mobx-state-tree";

import { CoreTypes } from "@/services/api/core-api";

import { withEnvironment } from "../extensions/with-environment";
import { CongViecModel } from "./cong-viec-model";
import { DuLieuModel } from "./du-lieu-model";
import { ProjectModel } from "./project-model";

export const ProjectsStoreModel = types
  .model("ProjectsStoreModel")
  .props({
    dsDuAn: types.optional(types.map(ProjectModel), {}),
    dsDuLieu: types.optional(types.map(DuLieuModel), {}),
    duAnSelected: types.maybeNull(types.safeReference(ProjectModel)),

    dsCongViec: types.optional(types.map(CongViecModel), {}),
  })
  .extend(withEnvironment)
  .views((self) => {
    const views = {
      get viewDsDuAn() {
        return Array.from(self.dsDuAn.values());
      },

      get viewDsDuLieu() {
        return Array.from(self.dsDuLieu.values());
      },

      get viewDsCongViec() {
        return Array.from(self.dsCongViec.values());
      },
    };

    return views;
  })
  .actions((self) => {
    const actions = {
      setDuAnSelected: (idDuAn: number) => {
        self.duAnSelected = self.dsDuAn.get(String(idDuAn));
        console.log(JSON.stringify(self.duAnSelected));
      },

      getDsDuAn: flow(function* () {
        const res: CoreTypes.RequestGetDsDuAnResult =
          yield self.coreApi.getDsDuAn();

        if (res.kind !== "ok") {
          return null;
        }

        self.dsDuAn.clear();

        res.result.forEach((item) => {
          self.dsDuAn.set(String(item.idDuAn), cast(item));
        });

        return res.result;
      }),

      getDuAn: flow(function* (idDuAn: number) {
        const res: CoreTypes.RequestGetDuAnResult = yield self.coreApi.getDuAn(
          idDuAn
        );

        if (res.kind !== "ok") {
          return null;
        }

        self.dsDuAn.set(String(res.result.idDuAn), cast(res.result));
        self.duAnSelected = self.dsDuAn.get(String(res.result.idDuAn));

        return res.result;
      }),

      getDsDuLieu: flow(function* (idDuAn: number) {
        const res: CoreTypes.RequestGetDsDuLieuResult =
          yield self.coreApi.getDsDuLieu(idDuAn);

        if (res.kind !== "ok") {
          return null;
        }

        self.dsDuLieu.clear();

        res.result.forEach((item) => {
          self.dsDuLieu.set(String(item.idDuLieu), cast(item));
        });

        return res.result;
      }),

      getDsCongViec: flow(function* () {
        const res: CoreTypes.RequestGetDsCongViecResult =
          yield self.coreApi.getDsCongViec();

        if (res.kind !== "ok") {
          return null;
        }

        self.dsCongViec.clear();

        res.result.forEach((item) => {
          self.dsCongViec.set(String(item._id), cast(item));
        });

        return res.result;
      }),
    };

    return actions;
  });
