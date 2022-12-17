import PropTypes from 'prop-types';
import StyledButton from './Button.styled';

export default function LoadMore({ children, loadMore }) {
  return (
    <StyledButton type="button" onClick={loadMore}>
      {children}
    </StyledButton>
  );
}
LoadMore.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
