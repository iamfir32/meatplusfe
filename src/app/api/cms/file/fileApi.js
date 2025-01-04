import ApiClient from "../../ApiClient";
const FileApi ={
    getAll: async (page)=>{
        return ApiClient("/api/files?page="+page,"GET");
    },
    delete: async (id)=>{
        return ApiClient("/api/files/delete/"+id,"DELETE");
    }
}

export default FileApi;