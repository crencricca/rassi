import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Rassi Websiterson" },
    { name: "description", content: "Welcome Rassi!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
