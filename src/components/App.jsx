import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { getImages } from "../services/api";
import { Button } from "./Button/Button";

export class App extends Component {

  state = {
    images: [],
    page: 1,
    query: '',
    isLoading: false,
    showModal: false,
    currentModalElement: null,
  }

  async componentDidUpdate(_, prevState) {
    if (this.state.query !== prevState.query || this.state.page !== prevState.page) {
      this.setState({ showButton: false });
      this.setState({ isLoading: true });
      try {
        const images = await getImages(this.state.query, this.state.page);
        this.setState({ images: images.hits })
      } catch (error) {
        console.log(error);
      }
      finally {
        this.setState({ isLoading: false });
      }      
    }

    if (this.state.query !== prevState.query) {
      this.setState({ page: 1 });
    } 
  }

  currentPage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  }

  handleSubmit = (values) => {
    this.setState({ query: values.value });
  }

  handleClickModal = (e) => {
    const currentElement = this.state.images.find(image => {
      return image.webformatURL === e.target.currentSrc;
    })
    console.log(currentElement.largeImageURL);
    this.setState({ currentModalElement: currentElement })

    this.toggleModal();
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal
    }))
  }

  render() {
    const isImages = this.state.images.length > 0;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <Loader isLoading={this.state.isLoading }/>
        <ImageGallery
          images={this.state.images}
          handleClickModal={this.handleClickModal}/>
        {isImages && <Button onClick={this.currentPage} />}
        {this.state.showModal &&
          <Modal onClose={this.toggleModal}>
            <img src={this.state.currentModalElement.largeImageURL} alt="" />
          </Modal>}
      </>
    )
  }
}
