import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { getImages } from '../services/api';
import { Button } from './Button/Button';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [maxPage, setMaxPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [currentModalElement, setCurrentModalElement] =
    useState(null);
  const [isShowModal, setIsShowModal] = useState(false);

  const isImages = images.length > 0;

  useEffect(() => {
    
    if (query) {
      try {
        const fetchApi = async () => {
          setIsLoading(true);
          const images = await getImages(query, page);
          // console.log(images);
          setImages(prevState => [
            ...prevState,
            ...images.hits,
          ]);
          setIsLoading(false);
          setMaxPage(Math.ceil(images.total / 12));
          if (images.hits.length === 0) {
            toast.error('Sorry! Nothing found your request.', {
              autoClose: 2000,
            });
          }
        };
        fetchApi();
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
  }, [page, query]);

  const currentPage = () => {
    setPage(prevState => prevState + 1);
  };

  const handleSubmit = values => {
    if (values.value.trim() === '') {
      toast.error('Please! Enter your search request.', {
        autoClose: 2000,
      });
    }
    if (query === values.value) {
      return;
    }

    setQuery(values.value);
    setPage(1);
    setImages([]);
  };

  const handleClickModal = e => {
    const currentElement = images.find(image => {
      return image.webformatURL === e.target.currentSrc;
    });
    console.log(currentElement.largeImageURL);
    setCurrentModalElement(currentElement);

    toggleModal();
  };

  const toggleModal = () => {
    setIsShowModal(prevState => !prevState);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <Loader isLoading={isLoading} />
      <ToastContainer />
      <ImageGallery images={images} handleClickModal={handleClickModal} />
      {isImages && page < maxPage && <Button onClick={currentPage} />}
      {isShowModal && (
        <Modal onClose={toggleModal}>
          <img src={currentModalElement.largeImageURL} alt="" />
        </Modal>
      )}
    </>
  );
};
