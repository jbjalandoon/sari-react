import { Link } from "@tanstack/react-router";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

type RouteContextInterface = {
  user: User;
};

export type User = {
  id: string | null;
  username: string | null;
  email: string | null;
  isAuthenticated: boolean;
  role: string | null;
};

export const Route = createRootRouteWithContext<RouteContextInterface>()({
  beforeLoad: () => {
    
  },
  component: () => (
    <div className="flex gap-10 flex-col justify-center items-center">
      <div>
        <Link to={"/"}> Index </Link>
        <Link to={"/login"}> Login </Link>
        <Link to={"/logout"}> Logout </Link>
      </div>
      <Outlet />
    </div>
  ),
});
