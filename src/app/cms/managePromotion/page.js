'use client';

import {Button, notification, Popconfirm, Spin, Table} from "antd";
import HeaderPage from "@/components/cms/headerPage/HeaderPage";
import LayoutPage from "@/components/cms/LayoutPage";
import HeaderAction from "@/components/cms/headerPage/HeaderAction";
import React, {useEffect, useState} from "react";
import CreateBannerModal from "@/app/cms/manageNews/components/CreateNewsModal";
import manageNewsApi from "@/app/api/cms/manageNewsApi";
import {getImageLink} from "@/utils/common";
import Image from "next/image";
import {FaTrash} from "react-icons/fa";
import {MdEdit} from "react-icons/md";
import EditBannerModal from "@/app/cms/manageNews/components/EditNewsModal";

const breadScrum = [
    {
        title:'Quản lý hệ thống'
    },
    {
        title:'Quản lý khuyến mại'
    },
    {
        title:'Danh sách khuyến mại'
    },
]
const pageSize=10;
export default function Login() {
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, title, content) => {
        api[type]({
            message: title,
            description:content,
            placement:'bottomRight'
        });
    };
    const [isShowCreateModal,setIsShowCreateModal] = useState(false);
    const [isShowEditModal,setIsShowEditModal] = useState(false);
    const [isLoading,setIsLoading] = useState(false)
    const [banners,setBanners] = useState([]);
    const [totalBanners,setTotalBanners]=useState(0)
    const [page,setPage]=useState(0);

    const [selectedBanner,setSelectedBanner] = useState()
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const deleteBanner=async (ids)=>{
        try{
            setIsLoading(true)
            const res = await manageNewsApi.deleteNews(ids);
            openNotificationWithIcon("success","Thông báo","Xóa khuyến mại thành công");
            fetchBanner().then()
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setIsLoading(false)
        }
    }

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
            title: 'Tiêu đề',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Mô tả ngắn',
            dataIndex: 'shortDescription',
            key: 'shortDescription'
        },
        {
            title: 'Thumbnail',
            dataIndex: 'imageUrl',
            key: 'imageUrl',
            width: '6/12',
            render: (imageUrl) => <div className='h-[120px]'>
                {imageUrl&&<Image src={getImageLink(imageUrl)} height={1080} width={1920}
                                  className={'w-full h-full object-contain'} alt={"banner hero"}></Image>}
            </div>
        },
        {
            title: '',
            key: 'func',
            width: 100,
            render: (data,record) => <div className='flex gap-[10px] items-center'>
                <Button type={'primary'} icon={ <MdEdit />} onClick={()=>{
                    setSelectedBanner(record)
                    setIsShowEditModal(true)
                }}>Sửa</Button>
                <Popconfirm
                    placement="topLeft"
                    title={"Bạn có chắc muốn xóa khuyến mại này"}
                    description={"Không thể hoàn tác sau khi xóa"}
                    okText="Xóa"
                    cancelText="Hủy"
                    onConfirm={()=>deleteBanner([record["_id"]])}
                >
                    <Button icon={<FaTrash />} danger onClick={()=>{}}>Xóa</Button>
                </Popconfirm>
            </div>,
        },
    ]

    const headerAction = <HeaderAction>
        <Button type='primary' onClick={()=>{setIsShowCreateModal(true)}}>Thêm mới</Button>
        <Popconfirm
            placement="topLeft"
            title={"Bạn có chắc muốn xóa khuyến mại này"}
            description={"Không thể hoàn tác sau khi xóa"}
            okText="Xóa"
            cancelText="Hủy"
            onConfirm={()=> {
                deleteBanner(selectedRowKeys).then()
                setSelectedRowKeys([])
            }}
        >
            <Button color="danger" variant="solid" >Xóa</Button>
        </Popconfirm>
    </HeaderAction>
    const fetchBanner =async ()=>{
        try{
            setIsLoading(true);
            const res=await manageNewsApi.getAllNews(page);
            setBanners(res.data?.news);
            setTotalBanners(res.data?.pagination);
        }catch (e) {
            console.log(e);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchBanner().then();
    }, []);


    return (
        <LayoutPage>
            {contextHolder}
            <CreateBannerModal isShowCreateModal={isShowCreateModal} setIsShowCreateModal={setIsShowCreateModal} refresh={()=>{fetchBanner().then();
                setSelectedBanner(null)}}
            ></CreateBannerModal>
            {isShowEditModal&&<EditBannerModal isShowCreateModal={isShowEditModal} setIsShowCreateModal={setIsShowEditModal}
                                               data={selectedBanner} refresh={() => {
                fetchBanner().then();
                setSelectedBanner(null)
            }} setSelectedBanner={setSelectedBanner}
            ></EditBannerModal>}
            <HeaderPage title={"Quản lý khuyến mại"} breadScrum={breadScrum} action={headerAction}></HeaderPage>
            <Spin spinning={isLoading} className={'mt-[20px]'}>
                <Table columns={columns} dataSource={banners} rowSelection={rowSelection} rowKey={'_id'}></Table>
            </Spin>
        </LayoutPage>
    );
}
