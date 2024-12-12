import ApiClient from "../ApiClient";
const ManageBannerApi ={
    getPosition: async ()=>{
        return ApiClient("/cms/manageBanner/getPosition","GET");
    }
}

export default ManageBannerApi;