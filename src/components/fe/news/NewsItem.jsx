import Image from "next/image";
import {createUrlFriendly} from "@/utils/common";

const NewsItem = ({item})=>{
    return <a href={`/category/tin-tuc/${createUrlFriendly(item?.name+"-"+item["_id"])}`} className={'flex items-center gap-[10px] px-[15px] pb-[30px] cursor-pointer'}>
        <div className={'w-full sm:w-[40%] relative'}>
            <Image src={item?.imageUrl} alt={"image news"} width={1920} height={1080} objectFit={'cover'} className={'w-full h-[180px] object-cover'}></Image>
            <div className={'absolute top-[10px] left-0 bg-[#f9e20a] w-[45px] h-[45px] flex flex-col items-center justify-center font-[600]'}>
                <p className={'leading-[1] '}>{new Date(item?.createdAt)?.getDate()}</p>
                <p className={'leading-[1] text-[12px]'}>th{new Date(item?.createdAt)?.getMonth()+1}</p>
            </div>
        </div>
        <div className={''}>
            <p className={'text-[#555] text-[16px] font-[700]'}>{item?.name}</p>
            <div className={"bg-[rgba(0,0,0,.1)] h-[2px] w-[30px] my-[8px]"}></div>
            <p className={'text-[#777] text-[14px]'}>{item?.shortDescription}</p>
        </div>

    </a>
}

export default NewsItem;