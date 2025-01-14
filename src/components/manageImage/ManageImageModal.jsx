'use client';

import React, {useEffect, useState} from "react";
import {UploadOutlined} from "@ant-design/icons";
import {Button, Modal, notification, Pagination, Spin, Upload} from "antd";
import fileApi from "@/app/api/cms/file/fileApi";
import ImageItem from "@/components/manageImage/ImageItem";
import classes from "./ManageImage.module.css"
import {getSession} from "next-auth/react";
import fetchData from "@/app/api/ApiClient";
import {FaTrash} from "react-icons/fa";
import Image from "next/image";
const ManageImage =({onChooseImage,isModalOpen,setIsModalOpen})=>{
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type, title, content) => {
        api[type]({
            message: title,
            description:content,
            placement:'bottomRight'
        });
    };
    const [isLoading,setIsLoading] = useState(false);
    const [files,setFiles] = useState([]);
    const [totalFiles,setTotalFiles]= useState();
    const [page,setPage] = useState(0);

    const [selectedImage,setSelectedImage] = useState()

    const fetchAllFiles = async ()=>{
        try{
            setIsLoading(true);
            const res =await fileApi.getAll(page);
            setFiles(res?.data?.files);
            setTotalFiles(res?.data?.pagination?.total)
        }
        catch (e){
            console.log(e)
        }finally {
            setIsLoading(false)
        }
    }
    const handleDeleteImage= async ()=>{
        try{
            if(selectedImage && selectedImage?.id){
                setIsLoading(true);
                const res =await fileApi.delete(selectedImage?.id);
                openNotificationWithIcon("success","Thông báo","Xóa ảnh thành công");
                fetchAllFiles().then();
                setSelectedImage(null)
            } else{
                openNotificationWithIcon("error","Thông báo","Có lỗi xảy ra thử lại sau!");
            }
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setIsLoading(false)
        }
    }
    const handleOk = () => {
        if(onChooseImage){
            onChooseImage(selectedImage);
        }
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const customRequest = async ({ file, onSuccess, onError }) => {
        const session = await getSession();
        if (!session || !session.user?.token) {
            onError(new Error('Unauthorized'));
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            setIsLoading(true)
            const response = await fetchData('/api/files/upload', 'POST', formData, session.user.token);
            onSuccess(response);
            openNotificationWithIcon("success","Thông báo","Tải lên ảnh thành công");
            fetchAllFiles().then();
        } catch (error) {
            onError(error);
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        if(isModalOpen){
            fetchAllFiles().then()
        } else{
            setSelectedImage(null)
        }
    }, [isModalOpen,page]);

    return <div>
        {contextHolder}
        <Modal title="Quản lý hình ảnh" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1170} zIndex={999999}>
            <div className='flex items-center gap-[10px]'>
                <Upload
                    customRequest={customRequest}
                    showUploadList={false}
                    accept="image/*"
                >
                    <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
                </Upload>
                {selectedImage && <Button icon={<FaTrash />} danger onClick={handleDeleteImage}>Xóa</Button>}
            </div>
            <Spin spinning={isLoading} >
                <div className={classes.imageContainer}>
                    {files?.map((file,i)=><ImageItem key={i} file={file} selectedImage={selectedImage} setSelectedImage={setSelectedImage}></ImageItem>)}
                    {files?.length===0&& <p className='w-full text-center'>Không có dữ liệu</p>}
                </div>
                {totalFiles>0 && <Pagination defaultCurrent={1} onChange={(page) => {
                    setPage(page);
                }} total={totalFiles} pageSize={50}/>}
            </Spin>
        </Modal>
    </div>
}

export default ManageImage;