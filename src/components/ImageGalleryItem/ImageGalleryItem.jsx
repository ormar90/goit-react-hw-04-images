import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ img, handleClickModal }) => {

    return (
        <>
            <GalleryItem onClick={handleClickModal}>
                <GalleryItemImage src={img.webformatURL} alt={img.tags} />
            </GalleryItem>
        </>
    );
} 