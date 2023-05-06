import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

const CustomPagination = props => {
  const { count, currentPage, onPageChange } = props;
  return (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      pageCount={count || 1}
      activeClassName="active"
      forcePage={currentPage !== 0 ? currentPage - 1 : 0}
      onPageChange={onPageChange}
      pageClassName={'page-item'}
      nextLinkClassName={'page-link'}
      nextClassName={'page-item next'}
      previousClassName={'page-item prev'}
      previousLinkClassName={'page-link'}
      pageLinkClassName={'page-link'}
      containerClassName={'pagination react-paginate justify-content-end my-2 pr-1'}
    />
  );
};

CustomPagination.propTypes = {
  total: PropTypes.number
};

CustomPagination.defaultProps = {
  total: 1
};

export default CustomPagination;
