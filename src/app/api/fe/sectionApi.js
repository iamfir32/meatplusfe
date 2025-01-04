import ApiClientPublic from "../ApiClientPublic";
const SectionApi ={
    getAll: async ()=>{
        return ApiClientPublic("/api/fe/section/getAllSection","GET");
    }
}

export default SectionApi;