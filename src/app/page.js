import Image1 from "@/assets/images/banner1.jpg"
import Image2 from "@/assets/images/banner2.jpg"
import Image3 from "@/assets/images/banner3.jpg"

import Image from "next/image";
import Slider from "@/components/fe/common/slider/Slider";

export default function Home() {
  const items=[
      <Image key={1} src={Image1} alt={"banner1"}></Image>,
    <Image key={2} src={Image2} alt={"banner2"}></Image>,
      <Image key={3} src={Image3} alt={"banner3"}></Image>
  ]
  return (
    <div className="">
      <Slider items={items}></Slider>
    </div>
  );
}
