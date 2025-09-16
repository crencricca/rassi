import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Marissa V. Fitzgerald, M.Ed. - Educational Coach & Learning Specialist" },
    { name: "description", content: "Transform your child's academic journey with expert, individualized support. Personalized tutoring, test prep, and college counseling for students of all learning styles and abilities." },
  ];
}

export default function Home() {
  return <Welcome />;
}
