import LayoutNews from "@/components/fe/news/LayoutNews";
import newsApi from "@/app/api/fe/newsApi";
import {headers} from "next/headers";

const pageSize=10;
const fetchNews = async (page)=>{
    try{
        const res =await newsApi.getAll(page,pageSize);
        return res?.data?.news;
    }catch (e) {
        console.log(e);
    }
}
export default async function CMS() {
    const headerList = await headers();
    const pathname = headerList.get("x-current-path");
    let page = 1;
    const pathParts = pathname.split("/");

    if (pathParts.length >= 5 && pathParts[4].startsWith("page")) {
        page = parseInt(pathParts[5], 10);
    }

    const data = await fetchNews(page);

    return <LayoutNews news={data} ></LayoutNews>
}
