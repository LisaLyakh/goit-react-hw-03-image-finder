import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import Container from './App.styled';

class App extends Component {
  state = {
    searchQuery: '',
  };

  onSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        <ToastContainer autoClose={3000} />
        <ImageGallery searchQuery={this.state.searchQuery} />
      </Container>
    );
  }
}
export default App;
