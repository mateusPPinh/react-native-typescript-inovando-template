import React, { createContext, ReactNode, useCallback } from 'react';

interface AuthContextInterface {
  name: string;
  signIn(): void;
}

interface IProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface,
);

const AuthProvider = ({ children }: IProps): any => {
  const signIn = useCallback(() => {
    console.log('hello');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Mateus', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
