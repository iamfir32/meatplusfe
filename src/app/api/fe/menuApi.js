import ApiClientPublic from "../ApiClientPublic";
const ManageBannerApi ={
    getAll: async ()=>{
        return ApiClientPublic("/api/fe/menu","GET");
    },
    getDetail: async (id)=>{
        return ApiClientPublic("/api/fe/menu/getDetail/"+id,"GET");
    },
    getOtherMenus: async (id)=>{
        return ApiClientPublic("/api/fe/menu/getOtherMenus/"+id,"GET");
    }
}

export default ManageBannerApi;