import IntroductionImage from "@/assets/images/introduction.jpg"
import Image from "next/image";
import classes from "./Introduction.module.css"
import Location from "@/components/fe/home/section/Location";
const Introduction = ()=>{
    return <div className={'w-full flex flex-col gap-[30px]'}>
        <div className={`flex w-full gap-[20px] flex-wrap sm:flex-nowrap homeSection BOTTOM_TO_TOP`}>
            <Image src={IntroductionImage} alt={"introduction image"}
                   className='w-full sm:w-1/2 sm:h-[330px] object-cover'></Image>
            <div className='flex flex-col w-full sm:w-1/2'>
                <p className={classes.title}>MEAT PLUS</p>
                <p className={classes.content}>Ra đời từ 2003, Meat Plus – thương hiệu thịt nướng nổi tiếng đến từ Hàn
                    Quốc nay đã có mặt tại hầu khắp
                    các quận nội thành của thủ đô. Thương hiệu này được biết đến với ba thế mạnh nổi bật: thịt bò Mỹ
                    thượng
                    hạng nhập khẩu từ Hàn Quốc được sơ chế nghiêm ngặt theo quy trình HACPP; nguồn rau cuốn hữu cơ tự
                    cung, được
                    trồng trên chính các nông trường của Meat Plus và sử dụng than Bijang loại than cao cấp không chứa
                    lưu huỳnh độc
                    hại cho quá trình nướng. Vì lẽ đó, Meat Plus đã, đang và ngày càng chinh phục nhiều hơn khẩu vị của
                    các thực khách,
                    những người sành ăn có niềm đam mê với ẩm thực nướng xứ Kim Chi.</p>
                <p className={classes.pass}>Tư vấn nhượng quyền: <span className={classes.phone}>0328.666.782</span></p>
            </div>
        </div>
        <Location></Location>
    </div>

}

export default Introduction;