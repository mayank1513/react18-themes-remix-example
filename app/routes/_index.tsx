import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "react18-themes Remix Example" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <div></div>;
}
