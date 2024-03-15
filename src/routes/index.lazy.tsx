import { createLazyFileRoute } from "@tanstack/react-router";
import LoginComponent from "../components/login/Login";

export const Route = createLazyFileRoute("/")({
  component: Login,
});

function Login() {
  return <LoginComponent />;
}
