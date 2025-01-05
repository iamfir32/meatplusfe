import Image from "next/image";
import Slider from "@/components/fe/common/slider/Slider";
import bannerApi from "@/app/api/fe/bannerApi";
import {getImageLink} from "@/utils/common";
async function fetchLocationBanner() {
    try {
        const banners = await bannerApi.getLocationBanner();
        return banners?.map((image) => ({
            id: image?.id,
            src: getImageLink(image.imageUrl),
            description: image.description,
        }));
    } catch (error) {
        console.error("Failed to fetch promotion banners:", error);
        return [];
    }
}
const Location =async ()=>{
    const listBanner = await fetchLocationBanner();

    const items = listBanner.map((image) => (
        <Image
            src={image.src}
            alt={image.description}
            key={image.id}
            width={270}
            height={200}
            objectFit={'cover'}
            className={"w-[270px] h-[200px] object-cover"}
        />
    ));
    return <div className={`w-full homeSection BOTTOM_TO_TOP`}>
        <Slider items={items} options={{
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        rows: 2,
                    },
                },
            ],
        }}></Slider>
    </div>
}

export default Location;