'use client';

import {Button, notification, Popconfirm, Spin, Table} from "antd";
import HeaderPage from "@/components/cms/headerPage/HeaderPage";
import LayoutPage from "@/components/cms/LayoutPage";
import HeaderAction from "@/components/cms/headerPage/HeaderAction";
import React, {useEffect, useState} from "react";
import CreateSectionModal from "@/app/cms/manageSection/components/CreateSectionModal";
import manageSectionApi from "@/app/api/cms/manageSectionApi";
import {FaTrash} from "react-icons/fa";
import {MdEdit} from "react-icons/md";
import EditSectionModal from "@/app/cms/manageSection/components/EditSectionModal";

const breadScrum = [
    {
        title:'Quản lý hệ thống'
    },
    {
        title:'Quản lý Section'
    },
    {
        title:'Danh sách Section'
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
    const [banners,setSections] = useState([]);
    const [totalSections,setTotalSections]=useState(0)
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
            const res = await manageSectionApi.deleteSection(ids);
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
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'title',
            width: '2/12'
        },
        {
            title: 'Hiệu ứng xuất hiện',
            dataIndex: 'appearTransition',
            key: 'appearTransition',
            width: '2/12'
        },
        {
            title: 'Loại',
            dataIndex: 'type',
            key: 'type',
            width: '2/12'
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
                    title={"Bạn có chắc mun xóa Section này"}
                    description={"Không thể hoàn tác sau khi xóa"}
                    okText="Xóa"
                    cancelText="Hủy"
                    onConfirm={()=>deleteSection([record?.id])}
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
            title={"Bạn có chắc mun xóa Section này"}
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
            const res=await manageSectionApi.getAllSection(page);
            setSections(res.content);
            setTotalSections(res.totalElements);
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


    return (
        <LayoutPage>
            {contextHolder}
            <CreateSectionModal isShowCreateModal={isShowCreateModal} setIsShowCreateModal={setIsShowCreateModal} refresh={()=>{fetchSection().then();
                setSelectedSection(null)}}
            ></CreateSectionModal>
            {isShowEditModal&&<EditSectionModal isShowCreateModal={isShowEditModal} setIsShowCreateModal={setIsShowEditModal}
                                               data={selectedSection} refresh={() => {
                fetchSection().then();
                setSelectedSection(null)
            }} setSelectedSection={setSelectedSection}
            ></EditSectionModal>}

            <HeaderPage title={"Quản lý Section"} breadScrum={breadScrum} action={headerAction}></HeaderPage>
            <Spin spinning={isLoading} className={'mt-[20px]'}>
                <Table columns={columns} dataSource={banners} rowSelection={rowSelection} rowKey={'id'}></Table>
            </Spin>
        </LayoutPage>
    );
}
