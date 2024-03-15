import { createFileRoute } from "@tanstack/react-router";
import { redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: async ({ context }) => {
    const { user } = context;
    if (!user.isAuthenticated) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: Index,
  loader:
    ({ context }) =>
    () => {
      console.log(context);
    },
});

function Index() {
  return <p>this is index</p>;
}
