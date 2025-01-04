import Slider from "@/components/fe/common/slider/Slider";
import { getImageLink } from "@/utils/common";
import bannerApi from "@/app/api/fe/bannerApi";
import Image from "next/image"
async function fetchBannerData() {
    try {
        const banners = await bannerApi.getHeroBanner();
        return banners?.map((image) => ({
            id: image?.id,
            src: getImageLink(image.imageUrl),
            description: image.description,
        }));
    } catch (error) {
        console.error("Failed to fetch banners:", error);
        return [];
    }
}

export default async function HeroBanner() {
    const listBanner = await fetchBannerData();
    const items = listBanner.map((image) => (
        <Image
            src={image.src}
            alt={image.description}
            key={image.id}
            width={1920}
            height={1080}
        />
    ));
    return <Slider items={items} />;
}
