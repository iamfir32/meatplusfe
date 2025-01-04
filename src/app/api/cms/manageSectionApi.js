import ApiClient from "../ApiClient";
const ManageSectionApi ={
    createSection: async (data)=>{
        return ApiClient("/cms/manageSection","POST",data);
    },
    editSection: async (data)=>{
        return ApiClient("/cms/manageSection","PUT",data);
    },
    getAllSection: async (page)=>{
        return ApiClient("/cms/manageSection?page="+page,"GET");
    },
    deleteSection: async (data)=>{
        return ApiClient("/cms/manageSection/delete","POST",data);
    },
}

export default ManageSectionApi;