import axios from 'axios';
import { DateTime } from 'luxon';
import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import DataTable from '../components/DataTable';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
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

  if (isLoading) {
    return null;
  }

  return (
    <Styles>
      <DataTable columns={columns} data={data} />
    </Styles>
  );
}

export default TableExample;
