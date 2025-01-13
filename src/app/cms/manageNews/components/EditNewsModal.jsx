"use client";

import React, {useState, useEffect, useRef} from "react";
import {Modal, Button, Spin, notification} from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import manageBannerApi from "@/app/api/cms/manageBannerApi";
import ManageImage from "@/components/manageImage/ManageImage";
import SelectInput from "@/components/formikInput/SelectInput";
import TextInput from "@/components/formikInput/TextInput";
import Image from "next/image";
import {getImageLink} from "@/utils/common";

const EditNewsModal = ({ setIsShowCreateModal, isShowCreateModal,data,refresh,setSelectedBanner }) => {
    const [position,setPosition] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, title, content) => {
        api[type]({
            message: title,
            description:content,
            placement:'bottomRight'

        });
    };
    const handleOk = async (values) => {
        editBanner(values).then();
    };

    const editBanner = async(values)=>{
        try{
            setIsLoading(true);
            const res=await manageBannerApi.editBanner(values);
            openNotificationWithIcon("success","Thông báo","Sửa Banner thành công");
            refresh();
            handleCancel();
        }
        catch (e) {
            console.log(e)
        }finally {
            setIsLoading(false);
        }
    }
    const handleCancel = () => {
        setIsShowCreateModal(false);
        setSelectedBanner(null)
        if (resetFormRef.current) {
            resetFormRef.current();
        }
    };

    const validationSchema = Yup.object().shape({
        imageUrl: Yup.string().required("Vui lòng chọn ảnh."),
        position: Yup.string().required("Vui lòng chọn vị trí."),
        description: Yup.string().optional(),
    });

    useEffect(() => {
        const fetchPosition = async ()=>{
            const res= await manageBannerApi.getPosition();
            // setPosition(res?.map(position=>({
            //     label:position,
            //     value:position
            // })))
        }
        fetchPosition().then();
    }, []);

    const resetFormRef = useRef(null);
    return (
        <Modal
            title="Sửa Banner"
            open={isShowCreateModal}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            {contextHolder}
            <Spin spinning={isLoading}>
                <Formik
                    initialValues={{id:data?.id, imageUrl: data?.imageUrl||"", position:data?.position||"",description:data?.description||""}}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        handleOk(values).then();
                    }}
                >
                    {({ values,handleSubmit,setFieldValue,errors, touched,resetForm }) => {
                        resetFormRef.current = resetForm;
                        return (<Form>
                                <div className={'mb-[12px]'}>
                                    <ManageImage onChooseImage={(image) => {
                                        setFieldValue("imageUrl", image?.name).then();
                                    }}></ManageImage>

                                    {values?.imageUrl && <Image src={getImageLink(values?.imageUrl)} alt={"banner"} width={1920} height={120 } className={'w-full h-[120px] object-cover mt-[10px]'}></Image>}
                                    {errors.imageUrl && touched.imageUrl && (
                                        <p className="text-red-500 text-sm">{errors.imageUrl}</p>
                                    )}
                                </div>

                                <SelectInput name={"position"} placeholder={"Chọn vị trí hiển thị"}
                                             label={"Chọn vị trí hiển thị"} options={position}></SelectInput>
                                <TextInput
                                    label="Mô tả"
                                    name="description"
                                    type="text"
                                    placeholder="Nhập mô tả"></TextInput>
                                <div className="mt-4 flex justify-end gap-[10px]">
                                    <Button className="ml-2" onClick={() => {
                                        handleCancel();
                                    }}>
                                        Hủy bỏ
                                    </Button>
                                    <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                                        Lưu
                                    </Button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </Spin>
        </Modal>
    );
};

export default EditNewsModal;
