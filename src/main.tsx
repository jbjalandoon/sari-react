import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  AnyRoute,
  Router,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { AuthenticationProvider, useAuth } from "./context/AuthContext";

const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as Router<AnyRoute, Record<string, any>, Record<string, any>>;

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function InnerApp() {
  const auth = useAuth();

  return <RouterProvider router={router} context={{ auth }} />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <InnerApp />
    </AuthenticationProvider>
  </React.StrictMode>
);
