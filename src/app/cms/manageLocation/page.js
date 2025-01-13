'use client';

import {Button, notification, Popconfirm, Spin, Table} from "antd";
import HeaderPage from "@/components/cms/headerPage/HeaderPage";
import LayoutPage from "@/components/cms/LayoutPage";
import HeaderAction from "@/components/cms/headerPage/HeaderAction";
import React, {useEffect, useState} from "react";
import CreateLocationModal from "@/app/cms/manageLocation/components/CreateLocationModal";
import manageLocationApi from "@/app/api/cms/manageLocationApi";
import {FaTrash} from "react-icons/fa";
import {MdEdit} from "react-icons/md";
import EditSectionModal from "@/app/cms/manageLocation/components/EditLocationModal";

const breadScrum = [
    {
        title:'Quản lý trang chủ'
    },
    {
        title:'Quản lý cơ sở'
    },
    {
        title:'Danh sách cơ sở'
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
    const [locations,setLocation] = useState([]);
    const [totalLocation,setTotalLocation]=useState(0)
    const [page,setPage]=useState(0);

    const [selectedSection,setSelectedSection] = useState()
    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const deleteSection=async (ids)=>{
        try{
            setIsLoading(true)
            const res = await manageLocationApi.deleteLocation(ids);
            openNotificationWithIcon("success","Thông báo","Xóa Section thành công");
            fetchSection().then()
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
            title: 'Tên cơ sở',
            dataIndex: 'name',
            key: 'title'
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Facebook',
            dataIndex: 'facebook_link',
            key: 'facebook_link'
        },
        {
            title: 'Hotline',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber'
        },
        {
            title: '',
            key: 'func',
            width: 100,
            render: (data,record) => <div className='flex gap-[10px] items-center'>
                <Button type={'primary'} icon={ <MdEdit />} onClick={()=>{
                    setSelectedSection(record)
                    setIsShowEditModal(true)
                }}>Sửa</Button>
                <Popconfirm
                    placement="topLeft"
                    title={"Bạn có chắc mun xóa cơ sở này"}
                    description={"Không thể hoàn tác sau khi xóa"}
                    okText="Xóa"
                    cancelText="Hủy"
                    onConfirm={()=>deleteSection([record["_id"]])}
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
            title={"Bạn có chắc muốn xóa cơ sở này"}
            description={"Không thể hoàn tác sau khi xóa"}
            okText="Xóa"
            cancelText="Hủy"
            onConfirm={()=> {
                deleteSection(selectedRowKeys).then()
                setSelectedRowKeys([])
            }}
        >
            <Button color="danger" variant="solid" >Xóa</Button>
        </Popconfirm>
    </HeaderAction>
    const fetchSection =async ()=>{
        try{
            setIsLoading(true);
            const res=await manageLocationApi.getAllLocation(page);
            setLocation(res.data?.retreasts);
            setTotalLocation(res.data?.pagination?.total);
        }catch (e) {
            console.log(e);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchSection().then();
    }, []);
    console.log(locations)
    return (
        <LayoutPage>
            {contextHolder}
            <CreateLocationModal isShowCreateModal={isShowCreateModal} setIsShowCreateModal={setIsShowCreateModal} refresh={()=>{fetchSection().then();
                setSelectedSection(null)}}
            ></CreateLocationModal>
            {isShowEditModal&&<EditSectionModal isShowCreateModal={isShowEditModal} setIsShowCreateModal={setIsShowEditModal}
                                                data={selectedSection} refresh={() => {
                fetchSection().then();
                setSelectedSection(null)
            }} setSelectedSection={setSelectedSection}
            ></EditSectionModal>}

            <HeaderPage title={"Quản lý cơ sở"} breadScrum={breadScrum} action={headerAction}></HeaderPage>
            <Spin spinning={isLoading} className={'mt-[20px]'}>
                <Table columns={columns} dataSource={locations} rowSelection={rowSelection} rowKey={'_id'}></Table>
            </Spin>
        </LayoutPage>
    );
}
