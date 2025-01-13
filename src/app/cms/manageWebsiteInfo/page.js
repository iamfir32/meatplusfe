'use client';

import {Button, notification, Spin, Table} from "antd";
import HeaderPage from "@/components/cms/headerPage/HeaderPage";
import LayoutPage from "@/components/cms/LayoutPage";
import HeaderAction from "@/components/cms/headerPage/HeaderAction";
import React, {useEffect, useState} from "react";
import manageWebsiteInfoApi from "@/app/api/cms/manageWebsiteInfoApi";
import {MdEdit} from "react-icons/md";
import EditWebsiteInfoModal from "@/app/cms/manageWebsiteInfo/components/EditWebsiteInfoModal";

const breadScrum = [
    {
        title:'Quản lý hệ thống'
    },
    {
        title:'Quản lý thông tin Website'
    },
    {
        title:'Danh sách thông tin Website'
    },
]

function mapJsonToKeyValueArray(json) {
    const result = [];

    for (const key in json) {
        if (json.hasOwnProperty(key)) {
            result.push({
                title: key,
                value: json[key],
            });
        }
    }

    return result;
}
const pageSize=10;
export default function ManageWebsiteInfo() {
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, title, content) => {
        api[type]({
            message: title,
            description:content,
            placement:'bottomRight'
        });
    };
    const [isShowEditModal,setIsShowEditModal] = useState(false);
    const [isLoading,setIsLoading] = useState(false)
    const [banners,setWebsiteInfos] = useState([]);
    const [page,setPage]=useState(0);

    const [selectedWebsiteInfo,setSelectedWebsiteInfo] = useState()

    const columns = [
        {
            title: "STT",
            align: "center",
            width: "50px",
            render: (text, record, index) => {
                return page * pageSize+ index + 1;
            },
        },
        {
            title: 'Thông tin',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Giá trị',
            dataIndex: 'value',
            key: 'value',
        },
        {
            title: '',
            key: 'func',
            width: 100,
            render: (data,record) => <div className='flex gap-[10px] items-center'>
                <Button type={'primary'} icon={ <MdEdit />} onClick={()=>{
                    setSelectedWebsiteInfo(record)
                    setIsShowEditModal(true)
                }}>Sửa</Button>
            </div>,
        },

    ]

    const headerAction = <HeaderAction>
    </HeaderAction>
    const fetchWebsiteInfo =async ()=>{
        try{
            setIsLoading(true);
            const res=await manageWebsiteInfoApi.getAllWebsiteInfo();
            setWebsiteInfos(mapJsonToKeyValueArray(res?.data?.setting));
        }catch (e) {
            console.log(e);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchWebsiteInfo().then();
    }, []);
    console.log(isShowEditModal,selectedWebsiteInfo)
    return (
        <LayoutPage>
            {contextHolder}
            {isShowEditModal&&<EditWebsiteInfoModal isShowEditModal={isShowEditModal} setIsShowEditModal={setIsShowEditModal}
                                             data={selectedWebsiteInfo} refresh={() => {
                fetchWebsiteInfo().then();
                setSelectedWebsiteInfo(null)
            }} setSelectedWebsiteInfo={setSelectedWebsiteInfo}
            ></EditWebsiteInfoModal>}

            <HeaderPage title={"Quản lý thông tin Website"} breadScrum={breadScrum} action={headerAction}></HeaderPage>
            <Spin spinning={isLoading} className={'mt-[20px]'}>
                <Table columns={columns} dataSource={banners} rowKey={'id'} pagination={{
                    onChange:(page)=>{
                        setPage(page-1)
                    }
                }}></Table>
            </Spin>
        </LayoutPage>
    );
}
