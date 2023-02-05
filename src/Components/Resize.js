import { useEffect, useState } from "react";
import Jimp from "jimp";

export default function Resize(imageUrl) {
  const [jimpImage, setJimpImage] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [transformedImage, setTransformedImage] = useState(undefined);

  // loading an image every time imageUrl changes
  useEffect(() => {
    const loadImage = async () => {
      // generating the Jimp data structure
      // loading an image from an URL
      const jimpImage = await Jimp.read(imageUrl);
      setJimpImage(jimpImage);

      // transforming jimpImage into its Base64 representation
      // and storing it
      const image = await jimpImage.getBase64Async(Jimp.MIME_JPEG);
      setImage(image);
    };

    loadImage();
  }, [imageUrl]);

  // generating the transformed image
  // as soon as the Jimp data structure is ready
  useEffect(() => {
    if (jimpImage) {
      const transformImage = async () => {
        // performing the Jimp image processing operation
        // on jimpImage...
        jimpImage.resize(300, 300);
        // e.g. jimpImage.crop(100, 100)

        // storing the transformed image
        // in Base64 format
        const transformedImage = await jimpImage.getBase64Async(Jimp.MIME_JPEG);
        setTransformedImage(transformedImage);
      };

      transformImage();
    }
  }, [jimpImage]);

  return image && jimpImage
    ? transformedImage
    : "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
}
