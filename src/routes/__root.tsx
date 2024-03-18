import { Link, redirect, useNavigate } from "@tanstack/react-router";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { AuthenticationContext, useAuth } from "../context/AuthContext";

export type RouterContext = {
  auth: AuthenticationContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  beforeLoad: async ({ context, location }) => {
    try {
      const { auth } = context;
      const { pathname } = location;

      const response = await fetch(
        "http://localhost:8080/auth/initial-authentication",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (response.status >= 400) {
        auth.setUser({
          isAuthenticated: false,
          user: null,
        });

        if (pathname === "/login") {
          return context;
        }
        return redirect({ to: "/login", throw: false });
      }
      const { user } = await response.json();
      auth.setUser({
        isAuthenticated: true,
        user: {
          id: user._id,
          email: user.email,
          username: user.username,
          role: user.role,
        },
      });

      return context;
    } catch (error) {
      return redirect({ to: "/login", throw: false });
    }
  },
  component: RootComponent,
});

function RootComponent() {
  const navigate = useNavigate();
  const auth = useAuth();

  async function handleLogout() {
    try {
      const response = await fetch("http://localhost:8080/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.status >= 400) {
        throw new Error("Something went wrong in logout functionality");
      }

      auth.setUser({
        user: null,
        isAuthenticated: false,
      });

      return navigate({ to: "/login" });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col gap-20 w-full items-center">
      {auth.user.isAuthenticated && (
        <div className="w-full flex justify-center items-center bg-slate-200 h-20">
          <div className="container flex justify-center text-slate-950">
            <ul className="flex gap-6 justify-center">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="container pr-10 pl-10">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  );
}
