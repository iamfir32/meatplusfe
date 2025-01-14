import ApiClient from "../ApiClient";
const ManageMenuApi ={
    getPosition: async ()=>{
        return ApiClient("/cms/manageMenu/getPosition","GET");
    },
    createMenu: async (data)=>{
        return ApiClient("/cms/manageMenu","POST",data);
    },
    editMenu: async (data)=>{
        return ApiClient("/cms/manageMenu","PUT",data);
    },
    getAllMenu: async (page)=>{
        return ApiClient("/cms/manageMenu?page="+page,"GET");
    },
    deleteMenu: async (data)=>{
        return ApiClient("/cms/manageMenu/delete","POST",data);
    },
}

export default ManageMenuApi;