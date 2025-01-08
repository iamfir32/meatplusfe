const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getImageLink=(link)=>{
    return apiUrl + "/resource/" +link;
}

export function createUrlFriendly(input) {
    const removeVietnameseTones = (str) => {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D");
    };

    return removeVietnameseTones(input)
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}