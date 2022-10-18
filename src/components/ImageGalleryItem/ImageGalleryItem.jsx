import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ images, handleClickModal }) => {

    return (
        <>
            {
                images.map((img) => (
                    <GalleryItem key={img.id} onClick={handleClickModal}>
                        <GalleryItemImage src={img.webformatURL} alt={img.tags} />
                    </GalleryItem>
                ))
            }
        </>
    );
} 