import ApiClientPublic from "../ApiClientPublic";
const ManageMenuApi ={
    getAll: async (page=1,pageSize=10)=>{
        return ApiClientPublic("/news?limit="+pageSize+"&page="+page,"GET");
    },
    getDetail: async (id)=>{
        return ApiClientPublic("/news/"+id,"GET");
    },
}

export default ManageMenuApi;