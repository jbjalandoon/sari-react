import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/login")({
  component: Test,
});

function Test() {
  return <div>Hello world</div>;
}
