import React, { useState } from 'react';
import StackedBar from '../components/StackedBar';

function StackedBarExample() {
  const [columns, setColumns] = useState([
    { name: 'apples', bgColor: '#48bb78', value: 20 },
    { name: 'bananas', bgColor: '#ecc94b', value: 5 },
    { name: 'peaches', bgColor: '#ed8936', value: 10 },
    { name: 'pears', bgColor: '#283fd6', value: 17 },
    { name: 'cherries', bgColor: '#e53e3e', value: 2 },
    { name: 'grapes', bgColor: '#805ad5', value: 12 },
  ]);

  const handleChangeColumnValue = (oldColumns, index, value) => {
    return oldColumns.map((column, i) => {
      if (index === i) {
        return {
          ...column,
          value,
        };
      }
      return column;
    });
  };

  const renderInputNumber = (index) => {
    return (
      <input
        key={`input-${index}`}
        type="number"
        value={columns[index].value}
        onChange={(e) =>
          setColumns((oldColumns) => {
            return handleChangeColumnValue(oldColumns, index, e.target.value);
          })
        }
        min={0}
      />
    );
  };

  return (
    <div style={{ padding: 40 }}>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', margin: 20 }}
      >
        {[0, 1, 2, 3, 4, 5].map((index) => {
          return renderInputNumber(index);
        })}
      </div>

      <StackedBar columns={columns} />
    </div>
  );
}

export default StackedBarExample;
