import {IoSearch} from "react-icons/io5";
import {Input} from "antd";
import {getImageLink} from "@/utils/common";
import Image from "next/image";
import classes from "./LayoutNews.module.css";

const LatestNews  =()=>{
    const items=[{
        imageUrl:getImageLink("anhthit3.jpg"),
        title:"MEAT PLUS LONG BIÊN: SIÊU KHUYẾN MÃI LỚN NHẤT NĂM 2021"
    },
        {
            imageUrl:getImageLink("anhthit3.jpg"),
            title:"MEAT PLUS LONG BIÊN: SIÊU KHUYẾN MÃI LỚN NHẤT NĂM 2021"
        },
        {
            imageUrl:getImageLink("anhthit3.jpg"),
            title:"MEAT PLUS LONG BIÊN: SIÊU KHUYẾN MÃI LỚN NHẤT NĂM 2021"
        }]

    return <div className={'px-[30px] w-[300px]'} style={{borderLeft:'1px solid #ececec;'}}>
        <div className={'flex h-[35px]'}>
            <Input className={'h-full mb-0'} style={{marginBottom:0, height:'100%',borderRadius:0}} placeholder={"Search..."}></Input>
            <div className={'px-[10px] bg-[var(--primary)] text-white h-full flex items-center justify-center'}>
                <IoSearch size={22}/>
            </div>
        </div>

        <div>
            <p className={"text-[#555] font-[700] mt-[30px]"}>BÀI VIẾT MỚI</p>
            <div className={"bg-[rgba(0,0,0,.1)] h-[2px] w-[30px] my-[8px]"}></div>
            {
                items?.map((item,i)=><div key={i} className={`flex gap-[10px] ${classes.latestNews}`}>
                    <Image src={item?.imageUrl} alt={"anh news"} width={1920} height={1080} objectFit={'cover'} className={'w-[45px] h-[45px] object-cover'}></Image>
                    <p className={`text-[15px] ${classes.otherNewsTitle} `}>{item?.title}</p>
                </div>)
            }
        </div>
    </div>
}

export default LatestNews;