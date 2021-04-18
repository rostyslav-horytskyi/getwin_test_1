import React, { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';

export interface Data {
  name: string,
  size_now: string,
  ctime: string,
  mtime: string,
  date?: number,
}

interface Props {
  clickedRow: string,
  setClickedRow: Dispatch<SetStateAction<string>>,
  sortedDate: () => Data[],
}

export const TableBody: React.FC<Props> = (props) => {
  const {
    clickedRow,
    setClickedRow,
    sortedDate,
  } = props;

  return (
    <>
      {sortedDate().map((file: Data) => (
        <tr
          key={file.name}
          id={`${file.date}`}
          className={classNames(
            'table__row',
            { 'clicked': +clickedRow === file.date }
          )}
          onClick={() => {
            setClickedRow(`${file.date}`);
          }}
        >
          <td className="table__data name">
            &#128194; {file.name}
          </td>
          <td className="table__data size">
            {file.size_now}
          </td>
          <td className="table__data created">
            {file.ctime.slice(-5)}
          </td>
          <td className="table__data modificated">
            {file.mtime.slice(-5)}
          </td>
        </tr>
      ))}
    </>
  );
};