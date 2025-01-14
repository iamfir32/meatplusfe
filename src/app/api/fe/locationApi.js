import ApiClientPublic from "../ApiClientPublic";
const SectionApi ={
    getAll: async ()=>{
        return ApiClientPublic("/locations","GET");
    }
}

export default SectionApi;