import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.styled";

export const ImageGallery = ({ images, handleClickModal }) => (
    <>        
        <ImageGalleryList>            
            <ImageGalleryItem images={images} handleClickModal={handleClickModal}/>
        </ImageGalleryList>
    </>
);