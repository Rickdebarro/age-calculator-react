import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import AgeCalculatorPage from "./ageCalculatorPage/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Calculadora de Idade" },
    { name: "description", content: "Bem vindo a calculadora de idade" },
  ];
}

export default function Home() {
  return <AgeCalculatorPage />;
}
