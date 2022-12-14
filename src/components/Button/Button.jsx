import PropTypes from 'prop-types';
import StyledButton from './Button.styled';
// import Image from '../ImageGallery'

function LoadMore({ children, loadMore }) {
  return (
    <StyledButton type="button" onClick={loadMore}>
      {children}
    </StyledButton>
  )
}
LoadMore.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
export default LoadMore;