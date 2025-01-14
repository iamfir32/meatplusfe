import ApiClientPublic from "../ApiClientPublic";
const SectionApi ={
    getAll: async ()=>{
        return ApiClientPublic("/sections","GET");
    }
}

export default SectionApi;