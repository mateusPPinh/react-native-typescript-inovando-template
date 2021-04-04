import React, { createContext, useCallback, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

interface AuthContextProvider {
  signIn(): Promise<void>;
  signOut(): Promise<void>;
  signed: boolean;
}

const AuthContext = createContext<AuthContextProvider>(
  {} as AuthContextProvider,
);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const storagedUser = await AsyncStorage.getItem('@user');
      const storagedToken = await AsyncStorage.getItem('@token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async (values: any) => {
    const response = await auth.signIn(values);

    setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@token', response.token);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.clear();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, signed: !!user, user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
