import Image from "next/image";

const ImageItem = ({ file,selectedImage,setSelectedImage }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    return (
        <div className="w-[100px] h-[100px] overflow-hidden flex items-center justify-center bg-gray-700" style={{backgroundColor:"#e9e9e9",border:selectedImage?.id===file?.id?"2px solid var(--primary)":"none"}} onClick={()=>{
            setSelectedImage(file);
        }}>
            <Image
                src={apiUrl + "/resource/" + file?.name}
                alt={file?.name}
                width={100}
                height={100}
                style={{
                    objectFit: 'contain',
                }}
            />
        </div>
    );
};

export default ImageItem;
