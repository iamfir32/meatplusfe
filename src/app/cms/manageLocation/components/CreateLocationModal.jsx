"use client";

import React, {useState, useEffect, useRef} from "react";
import {Modal, Button, Spin, notification} from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import manageLocationApi from "@/app/api/cms/manageLocationApi";
import TextInput from "@/components/formikInput/TextInput";
import ManageImage from "@/components/manageImage/ManageImage";
import Image from "next/image";
import {getImageLink} from "@/utils/common";
import {Editor} from "@tinymce/tinymce-react";
import ManageImageModal from "@/components/manageImage/ManageImageModal";

const CreateLocationModal = ({ setIsShowCreateModal, isShowCreateModal,refresh }) => {
    const [api, contextHolder] = notification.useNotification();

    const [isLoading,setIsLoading] = useState(false);

    const [editorCallback, setEditorCallback] = useState(null);
    const [isShowModalImage, setIsShowModalImage] = useState(false);

    const [content, setContent] = useState("");

    const openNotificationWithIcon = (type, title, content) => {
        api[type]({
            message: title,
            description:content,
            placement:'bottomRight'
        });
    };
    const handleOk = async (values) => {
        try{
            setIsLoading(true);
            const res=await manageLocationApi.createLocation({...values,promotionContent:content})
            openNotificationWithIcon("success","Thông báo","Thêm cơ sở thành công");
            refresh();
            handleCancel()
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setIsLoading(false)
        }
    };

    const handleCancel = () => {
        setIsShowCreateModal(false);
        if (resetFormRef.current) {
            resetFormRef.current();
        }
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Vui lòng điền tên cơ sở."),
        address: Yup.string().required("Vui lòng điền địa chỉ."),
        email: Yup.string().required("Vui lòng điền email."),
        facebook_link: Yup.string().required("Vui lòng điền Facebook."),
        phoneNumber: Yup.string().required("Vui lòng điền Hotline."),
        lat: Yup.string().required("Vui lòng điền vĩ độ."),
        lng: Yup.string().required("Vui lòng điền kinh độ."),
        // imageUrl: Yup.string().required("Vui lòng chọn ảnh."),
    });
    const handleEditorChange = (content) => {
        setContent(content);
    };

    const resetFormRef = useRef(null);
    return (
        <Modal
            title="Thêm cơ sở"
            open={isShowCreateModal}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width={1170}
        >
            {contextHolder}
            <Spin spinning={isLoading}>
                <Formik
                    initialValues={{name:"", address:"",email:"",facebook_link:"",phoneNumber:"",imageUrl:"",lat:"",lng:""}}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        handleOk(values).then();
                    }}
                >
                    {({ values,handleSubmit,setFieldValue,errors, touched,resetForm }) => {
                        resetFormRef.current = resetForm;
                        return (<Form>
                                <TextInput
                                    label="Tên cơ sở"
                                    name="name"
                                    type="text"
                                    placeholder="Nhập tên cơ sở">
                                </TextInput>
                                <TextInput
                                    label="Địa chỉ"
                                    name="address"
                                    type="text"
                                    placeholder="Nhập địa chỉ">
                                </TextInput>
                                <TextInput
                                    label="Facebook"
                                    name="facebook_link"
                                    type="text"
                                    placeholder="Nhập Facebook">
                                </TextInput>
                                <TextInput
                                    label="Hotline"
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Nhập Hotline">
                                </TextInput>
                                <TextInput
                                    label="Email"
                                    name="email"
                                    type="text"
                                    placeholder="Nhập Email">
                                </TextInput>
                                <TextInput
                                    label="Kinh độ"
                                    name="lng"
                                    type="text"
                                    placeholder="Nhập kinh độ">
                                </TextInput>
                                <TextInput
                                    label="Vĩ độ"
                                    name="lat"
                                    type="text"
                                    placeholder="Nhập vĩ độ">
                                </TextInput>

                                <div className={'mb-[12px]'}>
                                    <ManageImage title={"Chọn ảnh cơ sở"} onChooseImage={(image) => {
                                        setFieldValue("imageUrl", image?.name).then();
                                    }}></ManageImage>

                                    {values?.imageUrl &&
                                        <Image src={getImageLink(values?.imageUrl)} alt={"banner"} width={1920}
                                               height={120}
                                               className={'w-full h-[120px] object-cover mt-[10px]'}></Image>}
                                    {errors.imageUrl && touched.imageUrl && (
                                        <p className="text-red-500 text-sm">{errors.imageUrl}</p>
                                    )}
                                </div>
                                {<label className='text-[14px] font-[500] mb-[2px] inline-block'>Nội dung</label>}
                                <Editor
                                    apiKey="ko66q0g216w0296ekdu0hu5olo43brk1b3xutehpj0jemv4w"
                                    init={{
                                        plugins: [
                                            "emoticons",
                                            "image",
                                            "link",
                                            "lists",
                                            "media",
                                            "table",
                                            "export",
                                            "typography",
                                            'textcolor'
                                        ],
                                        toolbar:
                                            "undo redo | blocks fontfamily fontsize | bold italic underline  forecolor backcolor  | link image media table | align lineheight | checklist numlist bullist indent outdent | emoticons |",
                                        tinycomments_mode: "embedded",
                                        tinycomments_author: "Author name",
                                        file_picker_callback: (callback, value, meta) => {
                                            setEditorCallback(() => callback);
                                            setIsShowModalImage(true);
                                        },
                                    }}
                                    initialValue=""
                                    onEditorChange={handleEditorChange}
                                />
                                <div className="mt-4 flex justify-end gap-[10px]">
                                    <Button className="ml-2" onClick={() => {
                                        handleCancel();
                                    }}>
                                        Hủy bỏ
                                    </Button>
                                    <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                                        Thêm
                                    </Button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </Spin>
            <ManageImageModal
                onChooseImage={(image) => {
                    if (editorCallback) {
                        editorCallback(getImageLink(image.name));
                        setEditorCallback(null);
                    }
                    setIsShowModalImage(false);
                }}
                setIsModalOpen={setIsShowModalImage}
                isModalOpen={isShowModalImage}
            ></ManageImageModal>
        </Modal>
    );
};

export default CreateLocationModal;
