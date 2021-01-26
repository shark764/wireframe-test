import React, { useState } from 'react';
import FormExample from './FormExample';
import FormExample2 from './FormExample2';
import StackedBarExample from './StackedBarExample';
import TableExample from './TableExample';
import TableExample2 from './TableExample2';
import TableExample3 from './TableExample3';

function Tests() {
  const [example, setExample] = useState(null);

  let content;
  switch (example) {
    case 'table':
      content = <TableExample />;
      break;
    case 'table2':
      content = <TableExample2 />;
      break;
    case 'stacked-bar':
      content = <StackedBarExample />;
      break;
    case 'table-stacked-bar':
      content = <TableExample3 />;
      break;
    case 'form':
      content = <FormExample />;
      break;
    case 'list-form':
      content = <FormExample2 />;
      break;
    default:
      break;
  }

  const options = ['table', 'table2', 'stacked-bar', 'table-stacked-bar', 'form', 'list-form'];

  return (
    <div>
      Examples
      {' '}
      <select onChange={(e) => setExample(e.target.value)}>
        <option value="">-- pick an example --</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {content}
    </div>
  );
}

export default Tests;
