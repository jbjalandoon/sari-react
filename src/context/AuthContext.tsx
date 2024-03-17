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
    user: User;
    isAuthenticated: boolean;
  } | null;
  setUser: Dispatch<
    React.SetStateAction<{
      user: User;
      isAuthenticated: boolean;
    } | null>
  >;
};

const AuthenticationContext = createContext<AuthenticationContext | null>(null);

export function AuthenticationProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<{
    user: User;
    isAuthenticated: boolean;
  } | null>(null);

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
