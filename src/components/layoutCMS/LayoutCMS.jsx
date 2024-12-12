'use client';

import React, {useEffect, useState} from 'react';
import {FloatButton, Layout, Menu} from 'antd';
import {PiFlagBannerFill} from "react-icons/pi";
import {BsFillInfoCircleFill, BsMenuButtonWideFill} from "react-icons/bs";
import {MdDiscount, MdOutlineMenuBook} from "react-icons/md";
import {IoLocationSharp, IoLogOut} from "react-icons/io5";
import {FaNewspaper} from "react-icons/fa";
import {VscFeedback} from "react-icons/vsc";
import {signOut, useSession} from "next-auth/react";
import {useRouter, usePathname} from "next/navigation";
import Loading from "@/components/layout/Loading";
const {  Content, Sider } = Layout;

const items = [
    {
        key:"manageBanner",
        label:"Quản lý Banner",
        icon:<PiFlagBannerFill />,
        route:"/cms/manageBanner"
    },
    {
        key:"manageSection",
        label:"Quản lý Section",
        icon:<BsMenuButtonWideFill />,
        route:"/cms/manageSection"
    },
    {
        key:"manageMenu",
        label:"Quản lý Menu",
        icon:<MdOutlineMenuBook />,
        route:"/cms/manageMenu"
    },
    {
        key:"manageLocation",
        label:"Quản lý cơ sở",
        icon:<IoLocationSharp />,
        route:"/cms/manageLocation"
    },
    {
        key:"managePromotion",
        label:"Quản lý khuyến mại",
        icon:<MdDiscount />,
        route:"/cms/managePromotion"
    },
    {
        key:"manageNews",
        label:"Quản lý tin tức",
        icon:<FaNewspaper />,
        route:"/cms/manageNews"
    },
    {
        key:"manageWebsiteInfo",
        label:"Quản lý thông tin website",
        icon:<BsFillInfoCircleFill />,
        route:"/cms/manageWebsiteInfo"
    },
    {
        key:"feedback",
        label:"Ý kiến khách hàng",
        icon:<VscFeedback />,
        route:"/cms/feedback"
    },
];
const LayoutCMS = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return <Loading/>;
    }

    if (session) {
        return (
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <Menu theme="dark" defaultSelectedKeys={[items.find(x=>x.route===pathname)?items.find(x=>x.route===pathname).key:items[0].key]} mode="inline" items={items} onSelect={({ item })=>{
                        router.push(item?.props?.route)
                    }} />
                </Sider>
                <Layout>
                    <Content>
                        {children}
                    </Content>
                </Layout>
                <FloatButton onClick={() => signOut()} icon={<IoLogOut />} tooltip={"Đăng xuất"} type="primary"/>
            </Layout>
        );
    }

    return null;

};
export default LayoutCMS;