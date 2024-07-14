import { Children, createContext, useState } from "react";

export const DicesContext = createContext([]);

const Myprovider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [chances, setChances] = useState(10);

  return (
    <DicesContext.Provider value={{ score, setScore, chances, setChances }}>
      {children}
    </DicesContext.Provider>
  );
};

export default Myprovider;
