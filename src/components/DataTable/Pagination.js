import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
  const {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    pageSizeOptions,
  } = props;

  return (
    <div className="pagination">
      <button type="button" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </button>
      {' '}
      <button type="button" onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>
      {' '}
      <button type="button" onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>
      {' '}
      <button type="button" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </button>
      {' '}
      <span>
        Page
        {' '}
        <strong>
          {pageIndex + 1}
          {' of '}
          {pageOptions.length}
        </strong>
        {' '}
      </span>
      <span>
        | Go to page:
        {' '}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const gtPage = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(gtPage);
          }}
          style={{ width: '100px' }}
        />
      </span>
      {' '}
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {pageSizeOptions.map((optPageSize) => (
          <option key={optPageSize} value={optPageSize}>
            Show
            {' '}
            {optPageSize}
          </option>
        ))}
      </select>
    </div>
  );
}

Pagination.propTypes = {
  canPreviousPage: PropTypes.bool,
  canNextPage: PropTypes.bool,
  state: PropTypes.shape({
    pageIndex: PropTypes.number,
    pageSize: PropTypes.number,
  }),
  pageCount: PropTypes.number,
  pageOptions: PropTypes.arrayOf(PropTypes.number),
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  gotoPage: PropTypes.func,
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
  setPageSize: PropTypes.func,
};

export default Pagination;
