"use client";

import React, {useState, useEffect} from "react";
import { Modal, Button } from "antd";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ImagePicker from "@/components/formikInput/ImagePicker";
import manageBannerApi from "@/app/api/cms/manageBannerApi";

const CreateBannerModal = ({ setIsShowCreateModal, isShowCreateModal }) => {
    const [position,setPosition] = useState();
    const handleOk = () => {
        setIsShowCreateModal(false);
    };

    const handleCancel = () => {
        setIsShowCreateModal(false);
    };

    const validationSchema = Yup.object().shape({
        bannerFile: Yup.mixed()
            .required("A file is required")
            .test(
                "fileSize",
                "File size exceeds the maximum limit of 10MB.",
                (value) => !value || value.size <= 10 * 1024 * 1024
            )
            .test(
                "fileType",
                "Only image files are allowed.",
                (value) =>
                    !value ||
                    ["image/jpeg", "image/png", "image/jpg", "image/gif"].includes(value.type)
            ),
    });

    useEffect(() => {
        const fetchPosition = async ()=>{
            const res= await manageBannerApi.getPosition();
            console.log(res)
        }
        fetchPosition().then();
    }, []);
    return (
        <Modal
            title="Thêm Banner"
            open={isShowCreateModal}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <Formik
                initialValues={{ bannerFile: null }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log("File to upload:", values.bannerFile);
                    handleOk();
                }}
            >
                {({ handleSubmit }) => (
                    <Form>
                        <ImagePicker
                            name="bannerFile"
                            label="Chọn banner"
                            accept="image/jpeg,image/png,image/gif"
                            maxFileSize={10 * 1024 * 1024}
                        />

                        <div className="mt-4 flex justify-end gap-[10px]">
                            <Button className="ml-2" onClick={handleCancel}>
                                Hủy bỏ
                            </Button>
                            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                                Thêm
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default CreateBannerModal;
