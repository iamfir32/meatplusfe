import ApiClient from "../ApiClient";
const ManageLocationApi ={
    getAllLocation: async ()=>{
        return ApiClient("/retreasts","GET");
    },
    createLocation: async (data)=>{
        return ApiClient("/retreasts","POST",data);
    },
    editLocation: async (id,data)=>{
        return ApiClient("/retreasts/"+id,"PATCH",data);
    },
    deleteLocation: async (data)=>{
        return ApiClient("/retreasts/"+data,"DELETE");
    },
}

export default ManageLocationApi;