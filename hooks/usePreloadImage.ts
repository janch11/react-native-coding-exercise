import { useCallback, useEffect, useState } from "react";
import { Asset } from "expo-asset";

export const usePreloadImage = (imageUrl: string = "") => {
  const [img, setImg] = useState<null | string>(null);
  const [err, setError] = useState(false);

  const prefetchImage = useCallback(
    async () => await Asset.loadAsync(imageUrl),
    [imageUrl]
  );

  useEffect(() => {
    prefetchImage()
      .then(([{ localUri }]) => setImg(localUri))
      .catch(() => setError(true));
  }, [prefetchImage]);

  return { img, err };
};
