import React, {useState, createContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

export const Context = createContext();

export const ContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  const onAuthStateChanged = (uid) => {
    setUser(uid);
    if (initializing) setInitializing(false);
    if (uid) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <Context.Provider value={{isAuth, setIsAuth, user, initializing}}>
      {props.children}
    </Context.Provider>
  );
};
