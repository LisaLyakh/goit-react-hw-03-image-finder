import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import Container from './App.styled';
import Button from './Button/Button'


class App extends Component {
  state = {
    searchQuery: '',
  };

  onSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { images, loading } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        <ToastContainer autoClose={3000} />
        <ImageGallery searchQuery={this.state.searchQuery} />
        {images?.length !== 0 && !loading && (
          <Button LoadMore={this.LoadMore}
         />)}
      </Container>
    );
  }
}
export default App;
