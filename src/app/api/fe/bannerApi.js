import ApiClientPublic from "../ApiClientPublic";
const ManageBannerApi ={
    getHeroBanner: async ()=>{
        return ApiClientPublic("/api/fe/banner/getBannerByType?position=HEROBANNER","GET");
    },
    getPromotionBanner: async ()=>{
        return ApiClientPublic("/api/fe/banner/getBannerByType?position=PRODUCTSHOWCASE","GET");
    },
    getLocationBanner: async ()=>{
        return ApiClientPublic("/api/fe/banner/getBannerByType?position=LOCATIONINFO","GET");
    },
}

export default ManageBannerApi;