import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div>
      <Link to="/">Index</Link>
      <Link to="/login">Go to Login</Link>
      <Link to="/forgot-password">Forgot Password</Link>
      <Outlet />
    </div>
  ),
});

