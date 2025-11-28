import HomeFifthSection from "@/features/home/HomeFifthSection";
import HomeFirstSection from "@/features/home/HomeFirstSection";
import HomeFourthSection from "@/features/home/HomeFourthSection";
import HomeSecondSection from "@/features/home/HomeSecondSection";
import HomeThirdSection from "@/features/home/HomeThirdSection";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection />
      <HomeFourthSection />
      <HomeFifthSection />
    </div>
  );
}
