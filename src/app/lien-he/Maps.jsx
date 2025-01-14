'use client';
import { MFMap } from "react-map4d-map";
import classes from "./LienHe.module.css";
import {useState} from "react";
const Maps= ()=>{
    const items=[
        {
            name: "Cơ sở 15: Times City",
            imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
            phoneNumber: "0243.203.1988 / 085.319.1988",
            address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            lng:21.020799,
            lat:105.809476
        },
        {
            name: "Cơ sở 15: Times City",
            imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
            phoneNumber: "0243.203.1988 / 085.319.1988",
            address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            lng:21.020799,
            lat:105.809476
        },
        {
            name: "Cơ sở 15: Times City",
            imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
            phoneNumber: "0243.203.1988 / 085.319.1988",
            address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            lng:21.020799,
            lat:105.809476
        },
        {
            name: "Cơ sở 15: Times City",
            imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
            phoneNumber: "0243.203.1988 / 085.319.1988",
            address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            lng:21.020799,
            lat:105.809476
        },
        {
            name: "Cơ sở 15: Times City",
            imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
            phoneNumber: "0243.203.1988 / 085.319.1988",
            address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            lng:21.020799,
            lat:105.809476
        },
        {
            name: "Cơ sở 15: Times City",
            imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
            phoneNumber: "0243.203.1988 / 085.319.1988",
            address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            lng:21.020799,
            lat:105.809476
        },
        {
            name: "Cơ sở 15: Times City",
            imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
            phoneNumber: "0243.203.1988 / 085.319.1988",
            address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            lng:21.020799,
            lat:105.809476
        },
        {
            name: "Cơ sở 15: Times City",
            imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
            phoneNumber: "0243.203.1988 / 085.319.1988",
            address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            lng:21.020799,
            lat:105.809476
        }
    ]

    const [selectedLocation,setSelectedLocation] = useState();

    return <div className={'h-[500px] flex justify-center mt-[20px]'}>
        <div className={'h-full w-[1170px] flex '}>
            <div className={'h-full overflow-y-auto text-[#777]'}>
                <p className={'px-[10px] py-[6px]'}>Tìm thấy <span className={'font-[700]'}>{items?.length}</span> cửa hàng</p>
                <div>
                    {items?.map((item, i) => (<div key={i} className={`px-[10px] [pt-[10px] pb-[14px] ${classes.location}`}>
                        <p className={'font-[700]'}>{item?.name}</p>
                        <p className={'mb-[6px]'}>{item?.address}</p>
                        <a href={`https://www.google.com/maps?saddr=Current+Location&daddr=${item?.lng},${item?.lat}`}
                           target={'_blank'} className={`mt-[10px] text-[#334862] ${classes.point}`}>Chỉ đường</a>
                    </div>))}
                </div>
            </div>
            <div className={'h-[400px] w-[500px]'}>
                <MFMap
                    options={{
                        center: {lat: 16.072163491469226, lng: 108.22690536081757},
                        zoom: 15,
                        controls: true,
                    }}
                    accessKey={"dbbb0ee791ef2da576dd547936e57cb4"}
                    version={"2.4"}
                />
            </div>
        </div>
    </div>
}

export default Maps;