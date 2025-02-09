import Hero from "./component/Hero";
import { heroContent } from "@/lib/heroData";

export default function Home() {
  return (
    <div>
      <Hero {...heroContent} />
    </div>
  );
}
