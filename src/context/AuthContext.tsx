import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

export type User = {
  id: string;
  username: string;
  email: string;
  role: string;
};

export type AuthenticationContext = {
  user: {
    user: User | null;
    isAuthenticated: boolean;
  };
  setUser: Dispatch<
    React.SetStateAction<{
      user: User | null;
      isAuthenticated: boolean;
    }>
  >;
};

const AuthenticationContext = createContext<AuthenticationContext | null>(null);

export function AuthenticationProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<{
    user: User | null;
    isAuthenticated: boolean;
  }>({
    user: null,
    isAuthenticated: false,
  });

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error(
      "Please wrap your component in Authentication Provider before using useAuth"
    );
  }

  return context;
}
