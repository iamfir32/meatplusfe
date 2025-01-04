const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getImageLink=(link)=>{
    return apiUrl + "/resource/" +link;
}