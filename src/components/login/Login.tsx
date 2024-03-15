import { useState } from "react";
import LoginAction from "./LoginAction";
import LoginInput from "./LoginInput";
import { Route } from "../../routes/login";
import { useNavigate } from "@tanstack/react-router";
import Alert from "../alert/Alert";

export default function Login() {
  const context = Route.useLoaderData();
  const navigate = useNavigate();
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

      context.user.email = user.email;
      context.user.username = user.username;
      context.user.role = user.role;
      context.user.isAuthenticated = true;
      context.user.id = user._id;

      navigate({ to: "/" });
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
