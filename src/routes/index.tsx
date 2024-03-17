import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  loader:
    ({ context }) =>
    () => {
      console.log(context);
    },
});

function Index() {
  console.log("hello world from index");

  return <p>this is index</p>;
}
