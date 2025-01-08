import LayoutNews from "@/components/fe/news/LayoutNews";
import {getImageLink} from "@/utils/common";

export default function CMS() {
    const items=[
        {
            imageUrl:getImageLink("anhthit3.jpg"),
            title:"MEAT PLUS LONG BIÊN: SIÊU KHUYẾN MÃI LỚN NHẤT NĂM 2021",
            shortDescription:"Bàn tiệc chủ quyền – Độc quyền ưu đãi với khuyến mãi khủng cuối năm Bàn tiệc chủ quyền – Độc quyền ưu đãi với khuyến mãi khủng cuối năm ...",
            createdAt:new Date()
        },
        {
            imageUrl:getImageLink("anhthit3.jpg"),
            title:"MEAT PLUS LONG BIÊN: SIÊU KHUYẾN MÃI LỚN NHẤT NĂM 2021",
            shortDescription:"Bàn tiệc chủ quyền – Độc quyền ưu đãi với khuyến mãi khủng cuối năm Bàn tiệc chủ quyền – Độc quyền ưu đãi với khuyến mãi khủng cuối năm ...",
            createdAt:new Date()
        },
        {
            imageUrl:getImageLink("anhthit3.jpg"),
            title:"MEAT PLUS LONG BIÊN: SIÊU KHUYẾN MÃI LỚN NHẤT NĂM 2021",
            shortDescription:"Bàn tiệc chủ quyền – Độc quyền ưu đãi với khuyến mãi khủng cuối năm Bàn tiệc chủ quyền – Độc quyền ưu đãi với khuyến mãi khủng cuối năm ...",
            createdAt:new Date()
        },
        {
            imageUrl:getImageLink("anhthit3.jpg"),
            title:"MEAT PLUS LONG BIÊN: SIÊU KHUYẾN MÃI LỚN NHẤT NĂM 2021",
            shortDescription:"Bàn tiệc chủ quyền – Độc quyền ưu đãi với khuyến mãi khủng cuối năm Bàn tiệc chủ quyền – Độc quyền ưu đãi với khuyến mãi khủng cuối năm ...",
            createdAt:new Date()
        },
        {
            imageUrl:getImageLink("anhthit3.jpg"),
            title:"MEAT PLUS LONG BIÊN: SIÊU KHUYẾN MÃI LỚN NHẤT NĂM 2021",
            shortDescription:"Bàn tiệc chủ quyền – Độc quyền ưu đãi với khuyến mãi khủng cuối năm Bàn tiệc chủ quyền – Độc quyền ưu đãi với khuyến mãi khủng cuối năm ...",
            createdAt:new Date()
        }
        ,{
            imageUrl:getImageLink("anhthit3.jpg"),
            title:"MEAT PLUS LONG BIÊN: SIÊU KHUYẾN MÃI LỚN NHẤT NĂM 2021",
            shortDescription:"Bàn tiệc chủ quyền – Độc quyền ưu đãi với khuyến mãi khủng cuối năm Bàn tiệc chủ quyền – Độc quyền ưu đãi với khuyến mãi khủng cuối năm ...",
            createdAt:new Date()
        }
        ,{
            imageUrl:getImageLink("anhthit3.jpg"),
            title:"MEAT PLUS LONG BIÊN: SIÊU KHUYẾN MÃI LỚN NHẤT NĂM 2021",
            shortDescription:"Bàn tiệc chủ quyền – Độc quyền ưu đãi với khuyến mãi khủng cuối năm Bàn tiệc chủ quyền – Độc quyền ưu đãi với khuyến mãi khủng cuối năm ...",
            createdAt:new Date()
        }
    ]
    return <LayoutNews news={items}></LayoutNews>
}
