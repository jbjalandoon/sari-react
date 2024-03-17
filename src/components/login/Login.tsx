import { useState } from "react";
import LoginAction from "./LoginAction";
import LoginInput from "./LoginInput";
import { useNavigate } from "@tanstack/react-router";
import Alert from "../alert/Alert";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [loginStatus, setLoginStatus] = useState({
    isFailed: false,
    message: "",
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleClientLogin() {
    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.status >= 400) {
        const { errorMessage } = await response.json();
        throw errorMessage;
      }

      const { user } = await response.json();

      auth.setUser({
        isAuthenticated: true,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      });

      return navigate({ to: "/" });
    } catch (error) {
      setLoginStatus({
        isFailed: true,
        message: error as string,
      });
    }
  }

  return (
    <div className="container flex flex-col justify-center items-center w-100 h-lvh text-slate-800">
      <div className="bg-white p-9 rounded min-w-[500px] flex flex-col items-center justify-center gap-10 shadow-xl">
        <div className="text-3xl font-bold">LOGIN</div>
        <LoginInput
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
        <LoginAction onLogin={handleClientLogin} />
      </div>
      {loginStatus.message !== "" && <Alert message={loginStatus.message} />}
    </div>
  );
}
