import axios from 'axios';
import { DateTime } from 'luxon';
import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import DataTable from '../components/DataTable';

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

function TableExample() {
  const { data, isLoading } = useQuery('fetchWeapons', async () => {
    try {
      const result = await axios.get('https://army-server.herokuapp.com/api/v1/weapons');
      return result.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  });

  const columns = React.useMemo(
    () => [
      { Header: 'Id', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Type', accessor: 'type' },
      { Header: 'Calibre', accessor: 'calibre' },
      {
        Header: 'Created',
        accessor: 'createdAt',
        Cell: ({ value }) => DateTime.fromISO(value).toLocaleString(DateTime.DATETIME_MED),
      },
      {
        Header: 'Updated',
        accessor: 'updatedAt',
        Cell: ({ value }) => DateTime.fromISO(value).toLocaleString(DateTime.DATETIME_MED),
      },
    ],
    [],
  );

  const tdata = React.useMemo(() => {
    if (isLoading && !data) {
      return [];
    }
    return data;
  }, [isLoading, data]);

  return (
    <Styles>
      <DataTable columns={columns} data={tdata} showPagination loading={isLoading} />
    </Styles>
  );
}

export default TableExample;
