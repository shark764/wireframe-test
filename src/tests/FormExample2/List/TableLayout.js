import React from 'react';
import styled from 'styled-components';
import DataTable from '../../../components/DataTable';

const Styles = styled.div`
  padding: 1rem;
  display: block;
  overflow: auto;

  .table {
    border-spacing: 0;
    border: 1px solid black;

    .thead {
      overflow-y: auto;
      overflow-x: hidden;
    }

    .tbody {
      overflow-x: hidden;
    }

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      overflow-wrap: break-word;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 1.2rem 0;
  }
`;

function TableLayout({ columns, data, isLoading }) {
  return (
    <Styles>
      <DataTable columns={columns} data={data} showPagination loading={isLoading} />
    </Styles>
  );
}

export default TableLayout;
