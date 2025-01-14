import TextAreaInputNormal from "@/components/input/TextAreaInputNormal";
import TextInputNormal from "@/components/input/TextInputNormal";
import {Button, Checkbox} from "antd";

const Comment =()=> {
    return <div className={'px-[25px] py-[15px] mt-[15px] bg-[rgba(0,0,0,.05)]'}>
        <p className={'text-[#555] text-[20px] font-[700]'}>Để lại một bình luận</p>
        <p className={'text-[16px] mt-[12px] mb-[6px] text-[#777]'}>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</p>
        <TextAreaInputNormal label={"Bình luận *"} rows={5}></TextAreaInputNormal>
        <div className={'flex gap-[20px]'}>
            <TextInputNormal label={"Tên *"} className={"flex-1"}></TextInputNormal>
            <TextInputNormal label={"Email *"} className={"flex-1"}></TextInputNormal>
            <TextInputNormal label={"Trang web"} className={"flex-1"}></TextInputNormal>
        </div>

        <div className={'flex gap-[6px] items-center'}>
            <Checkbox></Checkbox>
            <label className={'inline-block text-[14px] font-[700] text-[#222]'}>Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.</label>
        </div>
        <Button className={"text-black font-[700] bg-[#f9e20a] mt-[10px]"}>GỬI BÌNH LUẬN</Button>
    </div>
}

export default Comment;