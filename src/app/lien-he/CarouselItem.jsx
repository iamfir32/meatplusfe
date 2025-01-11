import Image from "next/image";
import {Button} from "antd";
import classes from "./LienHe.module.css"
import {FaLocationDot} from "react-icons/fa6";
const CarouselItem=({item})=>{
    return <div className={`${classes.carouselItem} lien-he-item flex sm:block `}>
        <Image src={item?.imageUrl} alt={"anh location"} width={1920} height={1080} objectFit={'cover'} className={'w-[130px] h-[130px] sm:w-[226px] sm:h-[226px]   xl:w-full xl:h-full object-cover lien-he-image'}></Image>
        <div className={`sm:px-[20px] sm:pt-[10px] sm:pb-[20px] uppercase sm:normal-case sm:text-center ${classes.text}`}>
            <p className={'text-[#555] sm:text-[var(--primary)] text-[16px] sm:text-[18px] my-[2px] font-[700]'}>{item?.name}</p>
            <p className={"text-[14px] font-[700] text-[#555] hidden sm:inline-block"}>ĐT: <span className={'font-[500]'}>{item?.phoneNumber}</span></p>
            <p className={"text-[14px] font-[700] text-[#777] normal-case"}><span className={'sm:hidden inline-block'}><FaLocationDot /></span> <span className={'hidden sm:inline-block'}>ĐC: </span><span className={'font-[500]'}>{item?.address}</span></p>
            <div className={'mt-[10px] flex gap-[10px]'}>
                <Button type={'primary'} className={'rounded-0 flex-1'}>FANPAGE</Button>
                <Button type={'primary'} className={'rounded-0 sm:hidden flex-1'}>CHI TIẾT</Button>
            </div>
        </div>
    </div>
}

export default CarouselItem;