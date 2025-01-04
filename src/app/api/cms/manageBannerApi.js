import ApiClient from "../ApiClient";
const ManageBannerApi ={
    getPosition: async ()=>{
        return ApiClient("/cms/manageBanner/getPosition","GET");
    },
    createBanner: async (data)=>{
        return ApiClient("/cms/manageBanner","POST",data);
    },
    editBanner: async (data)=>{
        return ApiClient("/cms/manageBanner","PUT",data);
    },
    getAllBanner: async (page)=>{
        return ApiClient("/cms/manageBanner?page="+page,"GET");
    },
    deleteBanner: async (data)=>{
        return ApiClient("/cms/manageBanner/delete","POST",data);
    },
}

export default ManageBannerApi;