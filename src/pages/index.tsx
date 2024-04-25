import { Lato } from "next/font/google";
import Dashboard from "./components/dashboard";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`flex justify-between ${lato.className}`}>
      <Dashboard />
    </main>
  );
}
