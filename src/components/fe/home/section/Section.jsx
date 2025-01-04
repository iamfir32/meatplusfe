import Link from "next/link";
import Image from "next/image";
import classes from "./SectionWrapper.module.css"
import {getImageLink} from "@/utils/common";

const Section = ({title,items})=>{
    return <div className={classes.sectionContainer}>
        <p className={'promo-title'}>{title}</p>
        <div className={classes.section}>
            {items?.map((item,i)=>(item?.link?<Link className={classes.sectionItem} key={i} href={item?.link}>
                <Image key={i} src={getImageLink(item?.imageUrl)} alt={"menu"} width={1920} height={1080} objectFit={'cover'}></Image>
            </Link>:<Image className={classes.sectionItem} key={i} src={getImageLink(item?.imageUrl)} alt={"menu"} width={1920} height={1080} objectFit={'cover'}></Image>))}
        </div>
    </div>
}

export default Section;