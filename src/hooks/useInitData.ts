import { useEffect } from "react";

import { useStores } from "@/models";

export const useInitData = () => {
  const { commonStore } = useStores();

  useEffect(() => {
    console.log("useInitData");

    if (!commonStore.languages.length) {
      commonStore.getLanguages();
    }

    if (!commonStore.dsPhanCong.length) {
      commonStore.getDsPhanCong();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
