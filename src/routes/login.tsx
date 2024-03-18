import { createFileRoute, redirect } from "@tanstack/react-router";
import LoginComponent from "../components/login/Login";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context }) => {
    const { auth } = context;
    if (auth.user.isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
  component: Login,
});

function Login() {
  return <LoginComponent />;
}
