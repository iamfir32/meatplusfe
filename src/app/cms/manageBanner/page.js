'use client';

import {Button, notification, Spin} from "antd";
import HeaderPage from "@/components/cms/headerPage/HeaderPage";
import LayoutPage from "@/components/cms/LayoutPage";
import HeaderAction from "@/components/cms/headerPage/HeaderAction";
const breadScrum = [
    {
        title:'Quản lý hệ thống'
    },
    {
        title:'Quản lý Banner'
    },
    {
        title:'Danh sách Banner'
    },
]
export default function Login() {
    const [api, contextHolder] = notification.useNotification();

    const headerAction = <HeaderAction>
        <Button type='primary'>Thêm mới</Button>
        <Button color="danger" variant="solid" >Xóa</Button>
    </HeaderAction>

    return (
        <LayoutPage>
            {contextHolder}
            <HeaderPage title={"Quản lý Banner"} breadScrum={breadScrum} action={headerAction}></HeaderPage>
        </LayoutPage>
    );
}
