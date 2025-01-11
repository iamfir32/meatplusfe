'use client';

import Image from "next/image";
import BannerLienHe from "@/assets/images/bannerLienhe.jpg";
import classes from "./LienHe.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {CiGift} from "react-icons/ci";
import CarouselItem from "@/app/lien-he/CarouselItem";
import LienHeCarousel from "@/app/lien-he/LienHeCarousel";
export default function CMS() {
    return <div>
        <Image src={BannerLienHe} className={'w-full'} alt={'banner lien he'}></Image>
        <div className={'w-full flex justify-center py-[30px]'}>
            <div className={'flex gap-[10px] items-center w-full max-w-[1170px] justify-center mb-[24px]'}>
                <div className={classes.line}></div>
                <div className={classes.title}><CiGift size={24} className={'inline-block'}/> <span>Thông tin Khuyến Mãi</span></div>
                <div className={classes.line}></div>
            </div>
        </div>
        <LienHeCarousel></LienHeCarousel>

    </div>
}
