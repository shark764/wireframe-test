import axios from 'axios';
import { DateTime } from 'luxon';
import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import DataTable from '../components/DataTable';
import StackedBar from '../components/StackedBar';

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

function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function TableExample3() {
  const { data, isLoading, refetch } = useQuery('fetchWeapons', async () => {
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
        Header: 'Bar Example',
        accessor: 'barColumn',
        Cell: ({ value }) => <StackedBar columns={value} />,
      },
    ],
    [],
  );

  const fixedData = React.useMemo(() => {
    if (isLoading && !data) {
      return [];
    }
    return data.map((item) => ({
      ...item,
      barColumn: [1, 2, 3, 4, 5].map((barValue) => ({
        name: `color-${barValue}`,
        bgColor: generateRandomColor(),
        value: generateRandomNumber(1, 50),
      })),
    }));
  }, [data, isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <Styles>
      <button type="button" onClick={(e) => refetch()}>
        Refetch
      </button>

      <DataTable columns={columns} data={fixedData} />
    </Styles>
  );
}

export default TableExample3;
