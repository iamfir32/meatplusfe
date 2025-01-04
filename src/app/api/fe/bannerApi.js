import ApiClientPublic from "../ApiClientPublic";
const ManageBannerApi ={
    getHeroBanner: async ()=>{
        return ApiClientPublic("/api/fe/banner/getBannerByType?position=HEROBANNER","GET");
    },
    getPromotionBanner: async ()=>{
        return ApiClientPublic("/api/fe/banner/getBannerByType?position=PRODUCTSHOWCASE","GET");
    },
}

export default ManageBannerApi;