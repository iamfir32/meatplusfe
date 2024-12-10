import {FaBookmark} from "react-icons/fa";

const Booking = ()=>{
    return <>
        <div className='flex rounded-[5px] border-[2px] border-[#ebd4d3] px-[11px] gap-[4px] items-center text-[#ebd4d3] ml-[12px]'>
            <FaBookmark size={21}/>
            <span className='text-[19px] font-[700] p-[6px]'>ĐẶT BÀN</span>
        </div>
    </>
}

export default Booking;