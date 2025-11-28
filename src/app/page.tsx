import HomeFirstSection from "@/features/home/HomeFirstSection";
import HomeSecondSection from "@/features/home/HomeSecondSection";

export default function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <HomeFirstSection />
      <HomeSecondSection />
    </div>
  );
}
