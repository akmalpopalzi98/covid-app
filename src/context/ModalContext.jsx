import { Children, createContext, useState } from "react";

const ModalContext = createContext(0);

const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const sharedValue = { openModal, setOpenModal };

  return (
    <ModalContext.Provider value={sharedValue}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
