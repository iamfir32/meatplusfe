import ApiClient from "../ApiClient";

const ManageBannerApi ={
    getPosition: async (position, page, limit)=>{
        return ApiClient(`banners/?page=${page}&limit=${limit}&position=${position}`,"GET");
    },
    createBanner: async (data)=>{
        return ApiClient("banners","POST", data);
    },
    editBanner: async (data)=>{
        return ApiClient("banners","PATCH", data);
    },
    getAllBanner: async (page, limit)=>{
        return ApiClient(`banners?page=${page}&limit=${limit}`,"GET");
    },
    deleteBanner: async (data)=>{
        return ApiClient("banners/delete","POST", data);
    },
}

export default ManageBannerApi;