import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.styled";

export const ImageGallery = ({ images, handleClickModal }) => (
  <>
    <ImageGalleryList>
      {images.map((img) => (
        <ImageGalleryItem
          key={img.id}
          img={img}
          handleClickModal={handleClickModal}
        />
      ))}
    </ImageGalleryList>
  </>
);
