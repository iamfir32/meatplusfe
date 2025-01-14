import newsApi from "@/app/api/fe/newsApi";
import {headers} from "next/headers";
import LatestNews from "@/components/fe/news/LatestNews";
import Image from "next/image";
import TextArea from "antd/es/input/TextArea";
import TextAreaInputNormal from "@/components/input/TextAreaInputNormal";
import TextInputNormal from "@/components/input/TextInputNormal";
import Comment from "@/components/fe/news/Comment";

const pageSize=10;
const fetchDetailNews = async (id)=>{
    try{
        const res =await newsApi.getDetail(id);
        return res?.data["_new"];
    }catch (e) {
        console.log(e);
    }
}
export default async function CMS() {
    const headerList = await headers();
    const pathname = headerList.get("x-current-path");
    const array = pathname?.split("-");
    const data = await fetchDetailNews(array[array.length - 1]);
    const createdDate=new Date(data?.createdAt)
    return <div className={'w-full flex justify-center'}>
        <div className={'flex justify-center max-w-[1200px] py-[30px]'}>
            <div className={'px-[30px] w-[900px]'}>
                <div className={'relative'}>
                    <Image src={data?.imageUrl} alt={"anh tin tuc"} objectFit={'cover'}></Image>
                    <div
                        className={'absolute top-[20px] left-0 bg-[#f9e20a] w-[45px] h-[45px] flex flex-col text-white items-center justify-center font-[600]'}>
                        <p className={'leading-[1] '}>{createdDate?.getDate()}</p>
                        <p className={'leading-[1] text-[12px]'}>th{createdDate?.getMonth() + 1}</p>
                    </div>
                </div>

                <a href={"/category/tin-tuc"} className={"mt-[24px] text-[#334862] text-[12px] font-[700]"}>Tin tức</a>
                <p className={'text-[28px] text-[#555] font-[700]'}>{data?.name}</p>
                <div className={"bg-[rgba(0,0,0,.1)] h-[3px] w-[30px] my-[16px]"}></div>
                <p className={'text-[12px] text-[#777]'}>Đăng vào <span className={'text-black'}>{createdDate?.getDate() + "/" + createdDate.getMonth() + 1 + "/" + createdDate.getFullYear()}</span> bởi <span className={'text-black'}>{data?.createdBy?.fullname}</span>
                </p>
                <div className={'py-[24px]'}>
                    <div dangerouslySetInnerHTML={{__html: data?.content}}/>
                </div>

               <Comment></Comment>
            </div>
            <LatestNews></LatestNews>
        </div>
    </div>
}
