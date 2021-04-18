import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { TableHeader } from './TableHeader';
import { TableBody, Data } from './TableBody';
import Cookies from 'universal-cookie';

interface Props {
  data: Data[],
}

export const TableWithData: React.FC<Props> = (props) => {
  const [clickedRow, setClickedRow] = useState<string>('');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cookies = new Cookies();
  const { data } = props;

  const sortedDate = () => {
    const sortBy = searchParams.get('sortBy');
    let sorted;

    cookies.set('sortBy', sortBy);

    switch (sortBy) {
      case 'NameASC':
        sorted = [...data]
          .sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'NameDESC':
        sorted = [...data]
          .sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'SizeASC':
        sorted = [...data]
          .sort((a, b) => parseFloat(a.size_now) - parseFloat(b.size_now));
        break;
      case 'SizeDESC':
        sorted = [...data]
          .sort((a, b) => parseFloat(b.size_now) - parseFloat(a.size_now));
        break;
      case 'Creation-timeASC':
        sorted = [...data]
          .sort((a, b) => a.ctime.slice(-5).localeCompare(b.ctime.slice(-5)));
        break;
      case 'Creation-timeDESC':
        sorted = [...data]
          .sort((a, b) => b.ctime.slice(-5).localeCompare(a.ctime.slice(-5)));
        break;
      case 'Modification-timeASC':
        sorted = [...data]
          .sort((a, b) => a.mtime.slice(-5).localeCompare(b.mtime.slice(-5)));
        break;
      case 'Modification-timeDESC':
        sorted = [...data]
          .sort((a, b) => b.mtime.slice(-5).localeCompare(a.mtime.slice(-5)));
        break;
      default:
        sorted = data;
    }

    return sorted;
  };

  return (
    <Table
      striped
      bordered
      hover
      className="table"
    >
      <thead className="table__head"
      onClick={() => setClickedRow('')}
      >
        <TableHeader />
      </thead>
      <tbody>
        <TableBody
          clickedRow={clickedRow}
          setClickedRow={setClickedRow}
          sortedDate={sortedDate}
        />
      </tbody>
    </Table>
  );
};
