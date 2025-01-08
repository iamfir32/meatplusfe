import LatestNews from "@/components/fe/news/LatestNews";
import NewsItem from "@/components/fe/news/NewsItem";
const LayoutNews = ({news})=>{
    return <div className={'w-full flex justify-center'}>
        <div className={'flex justify-center max-w-[1200px] py-[30px]'}>
            <div className={'px-[30px] w-[900px]'}>
                {news?.map((news, i) => <NewsItem item={news} key={i}></NewsItem>)}
            </div>
            <LatestNews></LatestNews>
        </div>
    </div>
}

export default LayoutNews;