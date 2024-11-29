import { type ImageSourcePropType } from "react-native";
import { assets } from "@/constants";
import * as React from "react";
import * as FileSystem from "expo-file-system";
import axios from "axios";
import { blobReader } from "@/lib/blob-reader";

export default function useAppImage(size: number, source: ImageSourcePropType | string | null | undefined) {
  const [img, setImg] = React.useState<ImageSourcePropType>(assets.placeholder01);
  const [isLoading, setIsLoading] = React.useState(false);
  const sizing = { width: size, height: size };

  const getImage = React.useCallback(async () => {
    if (!source) return setImg(assets.placeholder01);
    if (typeof source !== "string") return setImg(source);
    setIsLoading(true);
    try {
      const response = await axios.get(source, { responseType: "blob" });

      const num = Math.floor(Math.random() * 999999);
      const filePath = FileSystem.documentDirectory + `doc${num}.jpg`;
      const base64 = await blobReader(response.data);

      await FileSystem.writeAsStringAsync(filePath, base64, { encoding: FileSystem.EncodingType.Base64 });
      const fileInfo = await FileSystem.getInfoAsync(filePath);

      const status = response.status;
      const mimetype = response.headers['content-type']?.split("/")[0];
      if (status === 200 && mimetype === "image" && fileInfo.exists) return setImg({ uri: filePath });
      throw new Error("downloaded file not an image");
    } catch {
      setImg(assets.placeholder01);
    } finally {
      setIsLoading(false);
    }
  }, [source]);

  React.useEffect(() => {
    getImage();
  }, [getImage]);

  return {
    getImage,
    isLoading,
    img,
    sizing
  }
}
