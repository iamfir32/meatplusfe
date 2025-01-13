import Section from "@/components/fe/home/section/Section";
import Background from "@/assets/images/background.jpg";
import classes from "./SectionWrapper.module.css"
import SectionSingle from "@/components/fe/home/section/SectionSingle";
import Introduction from "@/components/fe/home/section/Introduction";
import sectionApi from "@/app/api/fe/sectionApi";
import Script from "next/script";

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

    if (typeof window !== "undefined") {
        window.addEventListener("DOMContentLoaded", () => {
            const sections = document.querySelectorAll(`.${classes.sectionContainer}`);
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add(classes.active);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.2 }
            );

            sections.forEach((section) => observer.observe(section));
        });
    }

    return (
        <div
            className={classes.container}
            style={{
                backgroundImage: `url(${Background.src})`,
                backgroundPosition: "center",
                width: "100%",
            }}
        >
            <div className={'max-w-[1170px] w-full flex flex-col justify-center items-center gap-[85px]'}>
                {data?.sections?.map((section,i)=>section?.type==="MULTIPLE"?
                    <Section key={i} title={section?.title} items={section.options} data={section}></Section>:
                    <SectionSingle key={i} title={section?.title} item={section.options?.length>0?section.options[0]:{}} data={section}></SectionSingle>)}
                <Introduction></Introduction>
            </div>
            <Script
                src="/scripts/sectionAnimation.js"
                strategy="lazyOnload"
            />
        </div>
    );
};

export default SectionWrapper;
