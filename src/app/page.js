import Social from "@/components/fe/home/social/Social";
import MeatPromotion from "@/components/fe/home/meetPromo/MeatPromotion";
import SectionWrapper from "@/components/fe/home/section/SectionWrapper";
import HeroBanner from "@/components/fe/home/heroBanner/HeroBanner";

export default function Home() {

  return (
    <div className="">
        <HeroBanner></HeroBanner>
        <Social></Social>
        <MeatPromotion></MeatPromotion>
        {/*<SectionWrapper></SectionWrapper>*/}
    </div>
  );
}
