import { IoLocationSharp } from "react-icons/io5";
import FbIcon from "@/assets/images/fbIcon.png";
import YtbIcon from "@/assets/images/ytbIcon.png";
import InstagramIcon from "@/assets/images/instagramIcon.png";
import Image from "next/image";
import classes from "./social.module.css"
const Social = () => {
  return <div className={classes.container}>
    <div className={`${classes.title} `}>
      <IoLocationSharp size={40}/>
      <p>
        HỆ THỐNG CỬA HÀNG MEAT PLUS
      </p>
    </div>
    <div className='flex justify-center gap-[26px] flex-wrap'>
      <Image src={FbIcon.src} alt={"facebook icon"} width={70} height={70} objectFit={'cover'} className='w-[70px] h-[70px]'></Image>
      <Image src={YtbIcon.src} alt={"youtube icon"} width={70} height={70} objectFit={'cover'} className='w-[70px] h-[70px]'></Image>
      <Image src={InstagramIcon.src} alt={"instagram icon"} width={70} height={70} objectFit={'cover'} className='w-[70px] h-[70px]'></Image>
    </div>
  </div>
}

export default Social;