'use client';

import Image from "next/image";
import BannerLienHe from "@/assets/images/bannerLienhe.jpg";
import classes from "./LienHe.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {CiGift} from "react-icons/ci";
import LienHeCarousel from "@/app/lien-he/LienHeCarousel";
import Maps from "@/app/lien-he/Maps";
export default function CMS() {
    return <div>
        <Image src={BannerLienHe} className={'w-full'} alt={'banner lien he'}></Image>
        <div className={'w-full flex justify-center py-[30px]'}>
            <div className={'flex gap-[10px] items-center w-full max-w-[1170px] justify-center mb-[24px]'}>
                <div className={classes.line}></div>
                <div className={classes.title}><CiGift size={24} className={'inline-block'}/>
                    <span>Thông tin Khuyến Mãi</span></div>
                <div className={classes.line}></div>
            </div>
        </div>
        <LienHeCarousel></LienHeCarousel>
        <Maps></Maps>

        <div className={'w-full flex justify-center py-[30px]'}>
            <div className={'flex gap-[10px] items-center w-full max-w-[1170px] mb-[24px]'}>
                <div className={'w-1/2 text-[#777]'}>
                    <p className={'uppercase text-[28px] font-[700] text-black mb-[10px]'}>Liên Hệ</p>
                    <p className={'mb-[15px] leading-[26px]'}>Chúng tôi luôn trân trọng mọi ý kiến của quý khách, ý kiến từ quý khách sẽ giúp chúng tôi nâng
                        cao về
                        chất lượng phục vụ chính quý khách cũng góp phần vào sự thành công và phát triển thương hiệu
                        Meat
                        Plus
                        của chúng tôi:</p>
                    <p className={'mb-[15px]'}>Giuseart rất hoan nghênh độc giả gửi thông tin và góp ý cho chúng tôi!</p>
                    <p className={'font-[700] leading-[26px]'}>Địa chỉ: <span></span></p>
                    <p className={'font-[700] leading-[26px]'}>Email: <span></span></p>
                    <p className={'font-[700] leading-[26px]'}>SĐT: <span></span></p>
                    <p className={'font-[700] leading-[26px]'}>Website: <span></span></p>
                </div>

            </div>
        </div>
    </div>
}
