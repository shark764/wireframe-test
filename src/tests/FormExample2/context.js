import React, { createContext, useState } from 'react';

export const ArmyContext = createContext();

function ArmyProvider({ children }) {
  const selectedEntity = useState({});
  const open = useState(false);

  const setFormState = (data, isOpen) => {
    const [, setSelected] = selectedEntity;
    const [, setOpen] = open;
    setSelected(data);
    setOpen(isOpen);
  };

  return (
    <ArmyContext.Provider
      value={{
        selectedEntity,
        open,
        setFormState,
      }}>
      {children}
    </ArmyContext.Provider>
  );
}

export default ArmyProvider;
