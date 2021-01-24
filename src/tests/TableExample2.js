import axios from 'axios';
import React, { useCallback } from 'react';
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

function TableExample2() {
  const resAlbums = useQuery('fetchAlbums', async function () {
    try {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/albums`
      );
      return result.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  });

  const resPhotos = useQuery(
    'fetchPhotos',
    async function () {
      try {
        const result = await axios.get(
          `https://jsonplaceholder.typicode.com/photos`
        );
        return result.data;
      } catch (err) {
        console.error(err);
        return [];
      }
    },
    {
      enabled: !resAlbums.isLoading,
    }
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Id', accessor: 'id' },
      { Header: 'Title', accessor: 'title' },
      { Header: 'URL', accessor: 'url' },
      { Header: 'Album Id', accessor: 'albumId' },
      { Header: 'Album', accessor: 'album' },
      { Header: 'Thumbnail URL', accessor: 'thumbnailUrl' },
    ],
    []
  );

  const fixData = useCallback(
    function () {
      // callback
      if (!(resAlbums.data && resPhotos.data)) {
        return [];
      }
      return resPhotos.data.map((photo) => {
        photo.album = resAlbums.data.find((album) => {
          return album.id === photo.albumId;
        }).title;
        return photo;
      });
    },
    [resAlbums.data, resPhotos.data]
  );

  const data = React.useMemo(() => fixData(), [fixData]);

  if (resPhotos.isIdle || resPhotos.isLoading) {
    return null;
  }

  return (
    <Styles>
      <DataTable columns={columns} data={data} />
    </Styles>
  );
}

export default TableExample2;
