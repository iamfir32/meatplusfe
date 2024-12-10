import Link from "next/link";
import NavLink from "@/components/layout/header/components/NavLink";

const navList =[
    {
        title:"TRANG CHỦ",
        link:'/',
    },
    {
        title:"MENU",
        link:'#',
        dropdown:<></>
    },
    {
        title:"KHUYẾN MÃI",
        link:'/category/khuyen-mai',
        dropdown: <></>
    },
    {
        title:"TIN TỨC",
        link:'/category/tin-tuc',
    },
    {
        title:"LIÊN HỆ",
        link:'/lien-he',
    }
]

const HeaderNav = ()=>{
    return <>
        {navList?.map((nav,index)=><NavLink key={index} title={nav.title} href={nav.link} dropdown={nav?.dropdown} />)}
    </>
}

export default HeaderNav;