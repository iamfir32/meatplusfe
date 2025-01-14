import ApiClient from "../../ApiClient";
const FileApi ={
    getAll: async (page)=>{
        return ApiClient("files?page"+page+"&limit=50","GET");
    },
    delete: async (id)=>{
        return ApiClient("/api/files/delete/"+id,"DELETE");
    }
}

export default FileApi;