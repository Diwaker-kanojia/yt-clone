import { createContext, useContext, useState } from "react";
export const UtilsContext = createContext(null);

export const UtilsContextProvider = ({ children }) => {
  const [isSlidebar, setIsSlidebar] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);
  return (
    <UtilsContext.Provider
      value={{ isSlidebar, setIsSlidebar, mobileShow, setMobileShow }}
    >
      {children}
    </UtilsContext.Provider>
  );
};
export const useUtils = () => {
  const utilsContext = useContext(UtilsContext);
  if (!utilsContext) return null;
  return utilsContext;
};
