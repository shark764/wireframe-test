import axios from 'axios';
import { DateTime } from 'luxon';
import React, { useCallback, useContext } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components';
import { log } from '../../../utilities';
import { ArmyContext } from '../context';
import TableLayout from './TableLayout';

const ListContainer = styled.div`
  grid-area: list;
  padding: 15px;
`;

function List() {
  const {
    selectedEntity: [selected],
    setFormState,
  } = useContext(ArmyContext);

  const { data, isLoading } = useQuery('fetchWeapons', async function () {
    return axios
      .get(`https://army-server.herokuapp.com/api/v1/weapons`)
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        console.error(err);
        return [];
      });
  });

  const queryClient = useQueryClient();

  const deleteMutation = useMutation(
    async function (id) {
      return axios.delete(`https://army-server.herokuapp.com/api/v1/weapons/${id}`);
    },
    {
      onSuccess: function ({ data }) {
        log('success', data.message, data.data);
        queryClient.invalidateQueries('fetchWeapons');
      },
      onError: function (err) {
        console.error(err);
      },
      onSettled: function () {},
    }
  );

  const removeEntry = useCallback(
    (id) => {
      deleteMutation.mutate(id);
      if (id === selected.id) {
        setFormState({}, undefined);
      }
    },
    [deleteMutation, selected.id, setFormState]
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Id', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Type', accessor: 'type' },
      { Header: 'Calibre', accessor: 'calibre' },
      {
        Header: 'Created',
        accessor: 'createdAt',
        Cell: ({ value }) => {
          return DateTime.fromISO(value).toLocaleString(DateTime.DATETIME_MED);
        },
      },
      {
        Header: 'Updated',
        accessor: 'updatedAt',
        Cell: ({ value }) => {
          return DateTime.fromISO(value).toLocaleString(DateTime.DATETIME_MED);
        },
      },
      {
        Header: '',
        accessor: 'actions',
        Cell: ({ row }) => {
          return (
            <div>
              <button type="button" onClick={() => setFormState(row.original, true)}>
                Edit
              </button>
              <button type="button" onClick={() => removeEntry(row.original.id)}>
                Remove
              </button>
            </div>
          );
        },
      },
    ],
    [removeEntry, setFormState]
  );

  if (isLoading) {
    return null;
  }

  return (
    <ListContainer>
      <button type="button" onClick={() => setFormState({}, true)}>
        + Register
      </button>

      <TableLayout columns={columns} data={data} />
    </ListContainer>
  );
}

export default List;
