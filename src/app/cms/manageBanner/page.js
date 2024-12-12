'use client';

import {Button, notification, Spin} from "antd";
import HeaderPage from "@/components/cms/headerPage/HeaderPage";
import LayoutPage from "@/components/cms/LayoutPage";
import HeaderAction from "@/components/cms/headerPage/HeaderAction";
import {useState} from "react";
import CreateBannerModal from "@/app/cms/manageBanner/components/CreateBannerModal";
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
    const [isShowCreateModal,setIsShowCreateModal] = useState(false);
    const headerAction = <HeaderAction>
        <Button type='primary' onClick={()=>{setIsShowCreateModal(true)}}>Thêm mới</Button>
        <Button color="danger" variant="solid" >Xóa</Button>
    </HeaderAction>

    return (
        <LayoutPage>
            {contextHolder}
            <CreateBannerModal isShowCreateModal={isShowCreateModal} setIsShowCreateModal={setIsShowCreateModal}></CreateBannerModal>
            <HeaderPage title={"Quản lý Banner"} breadScrum={breadScrum} action={headerAction}></HeaderPage>
        </LayoutPage>
    );
}
