import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./Components/HomePage";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <main>
      <HomePage />
      <Hero />
    </main>
  );
}
