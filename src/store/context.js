import React, {useState, createContext} from 'react';
export const Context = createContext();

export const ContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Context.Provider value={{isAuth, setIsAuth}}>
      {props.children}
    </Context.Provider>
  );
};
