import { useEffect } from "react";

import { useStores } from "@/models";

export const useInitData = () => {
  const { commonStore } = useStores();

  useEffect(() => {
    if (!commonStore.dsNgonNgu.length) {
      console.log("getDsNgonNgu");
      commonStore.getDsNgonNgu();
    }

    if (!commonStore.dsPhanCong.length) {
      console.log("getDsPhanCong");
      commonStore.getDsPhanCong();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
