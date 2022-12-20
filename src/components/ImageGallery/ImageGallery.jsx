import { Component } from 'react';
import getApiResult from '../../service/apiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import Button from '../Button/Button';
import GalleyItem from '../ImageGalleryItem/ImageGalleryItem';
import GalleryList from './ImageGallery.styled';
 

export default class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    totalHits: 1,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { searchQuery } = this.props;
    const { page } = this.state;
    const updatePage = prevProps.searchQuery !== searchQuery ? 1 : page;
    if (prevProps.searchQuery !== searchQuery || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const updatedImages = await getApiResult(searchQuery, updatePage);
        if (updatedImages.hits.length === 0) {
          toast('No results');
          this.setState({ loading: false });
        }
        if (prevProps.searchQuery !== searchQuery) {
          this.setState({
            images: updatedImages.hits,
            page: 1,
            totalHits: updatedImages.totalHits,
          });
        }
        if (prevState.page !== page && page !== 1) {
          this.setState({
            images: [...this.state.images, ...updatedImages.hits],
            totalHits: updatedImages.totalHits,
          });
        }
      } catch (error) {
        this.setState({
          error,
        });
      } finally {
        this.setState({
          loading: false,
        });
      }
    }
  };

  onLoadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  render() {
    const { images, loading, totalHits } = this.state;
    return (
      <>
        <GalleryList>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <GalleyItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
            />
          ))}
        </GalleryList>
        {images.length !== 0 && !loading && images.length !== totalHits && (
          <Button loadMore={this.onLoadMore} />
        )}
        {this.state.loading && <Loader />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
};
