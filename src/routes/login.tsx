import { createFileRoute, redirect } from "@tanstack/react-router";
import LoginComponent from "../components/login/Login";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context }) => {
    const { user } = context;
    console.log(user.isAuthenticated);
    if (user.isAuthenticated) {
      throw redirect({ to: "/" });
    }
  },
  loader: ({ context }) => context,
  component: Login,
});

function Login() {
  return <LoginComponent />;
}
