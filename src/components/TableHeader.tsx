import React, { MouseEvent } from 'react';
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import { useHistory } from 'react-router';

export const TableHeader: React.FC = () => {
  const history = useHistory();

  const tableTitles = [
    'Name', 'Size', 'Creation time', 'Modification time'
  ];

  const selectSortedType = (val: string, event: MouseEvent): void => {
    const { textContent } = event.target as HTMLElement;

    if (textContent === 'Cancel sorting') {
      history.push('');
    } else {
      if (textContent) {
        history.push(
          `?sortBy=${
            val.split(' ').join('-')
          }${
            textContent.slice(textContent.lastIndexOf(' ') + 1)
          }`
        );
      }
    }
  };

  return (
    <tr className="table__row">
      {tableTitles.map(title => (
        <th
          key={title}
          className="table__title"
        >

      <Dropdown as={ButtonGroup} size="sm">
        <Button variant="secondary">{title}</Button>

        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

        <Dropdown.Menu onClick={(event: any) => selectSortedType(title, event)}>
          <Dropdown.Item>Cancel sorting</Dropdown.Item>
          <Dropdown.Item>Sort by ASC</Dropdown.Item>
          <Dropdown.Item>Sort by DESC</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </th>
      ))}
    </tr>
  );
}
