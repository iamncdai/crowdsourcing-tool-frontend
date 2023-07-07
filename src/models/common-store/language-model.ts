import { Instance, types } from "mobx-state-tree";

export const LanguageModel = types.model("LanguageModel").props({
  idNgonNgu: types.maybeNull(types.number),
  NgonNgu: types.maybeNull(types.string),
});

export type ILanguage = Instance<typeof LanguageModel>;
