import Section from "@/components/fe/home/section/Section";
import Background from "@/assets/images/background.jpg";
import Menu1 from "@/assets/images/menu1.jpg"
import Rautuoi from "@/assets/images/rautuoi.jpg"
import classes from "./SectionWrapper.module.css"
import SectionSingle from "@/components/fe/home/section/SectionSingle";
import Introduction from "@/components/fe/home/section/Introduction";
import sectionApi from "@/app/api/fe/sectionApi";

async function fetchSectionData() {
    try {
        return await sectionApi.getAll();
    } catch (error) {
        console.error("Failed to fetch banners:", error);
        return [];
    }
}

const SectionWrapper =async () => {
    const data= await fetchSectionData();
    return (
        <div
            className={classes.container}
            style={{
                backgroundImage: `url(${Background.src})`,
                backgroundPosition: "center",
                width: "100%",
            }}
        >
            {data?.map((section,i)=>section?.type==="MULTIPLE"?
                <Section key={i} title={section?.title} items={section.items}></Section>:
                <SectionSingle key={i} title={section?.title} item={section.items?.length>0?section.items[0]:{}}></SectionSingle>)}
            <Introduction></Introduction>
        </div>
    );
};

export default SectionWrapper;
