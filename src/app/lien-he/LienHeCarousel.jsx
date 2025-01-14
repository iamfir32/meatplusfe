'use client';

import Slider from "react-slick";
import CarouselItem from "@/app/lien-he/CarouselItem";

const LienHeCarousel = ()=> {
    const locations = [
        [<CarouselItem key={Math.random()} item={{
            name: "Cơ sở 15: Times City",
            imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
            phoneNumber: "0243.203.1988 / 085.319.1988",
            address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
        }}></CarouselItem>,
            <CarouselItem key={Math.random()} item={{
                name: "Cơ sở 15: Times City",
                imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
                phoneNumber: "0243.203.1988 / 085.319.1988",
                address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            }}></CarouselItem>,
            <CarouselItem key={Math.random()} item={{
                name: "Cơ sở 15: Times City",
                imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
                phoneNumber: "0243.203.1988 / 085.319.1988",
                address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            }}></CarouselItem>,],
        [<CarouselItem key={Math.random()} item={{
            name: "Cơ sở 15: Times City",
            imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
            phoneNumber: "0243.203.1988 / 085.319.1988",
            address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
        }}></CarouselItem>,
            <CarouselItem key={Math.random()} item={{
                name: "Cơ sở 15: Times City",
                imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
                phoneNumber: "0243.203.1988 / 085.319.1988",
                address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            }}></CarouselItem>,
            <CarouselItem key={Math.random()} item={{
                name: "Cơ sở 15: Times City",
                imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
                phoneNumber: "0243.203.1988 / 085.319.1988",
                address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            }}></CarouselItem>,]
        , [<CarouselItem key={Math.random()} item={{
            name: "Cơ sở 15: Times City",
            imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
            phoneNumber: "0243.203.1988 / 085.319.1988",
            address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
        }}></CarouselItem>,
            <CarouselItem key={Math.random()} item={{
                name: "Cơ sở 15: Times City",
                imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
                phoneNumber: "0243.203.1988 / 085.319.1988",
                address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            }}></CarouselItem>,
            <CarouselItem key={Math.random()} item={{
                name: "Cơ sở 15: Times City",
                imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
                phoneNumber: "0243.203.1988 / 085.319.1988",
                address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            }}></CarouselItem>]
        ,
        [<CarouselItem key={Math.random()} item={{
            name: "Cơ sở 15: Times City",
            imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
            phoneNumber: "0243.203.1988 / 085.319.1988",
            address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
        }}></CarouselItem>,
            <CarouselItem key={Math.random()} item={{
                name: "Cơ sở 15: Times City",
                imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
                phoneNumber: "0243.203.1988 / 085.319.1988",
                address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            }}></CarouselItem>,
            <CarouselItem key={Math.random()} item={{
                name: "Cơ sở 15: Times City",
                imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
                phoneNumber: "0243.203.1988 / 085.319.1988",
                address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            }}></CarouselItem>,], [<CarouselItem key={Math.random()} item={{
            name: "Cơ sở 15: Times City",
            imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
            phoneNumber: "0243.203.1988 / 085.319.1988",
            address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
        }}></CarouselItem>,
            <CarouselItem key={Math.random()} item={{
                name: "Cơ sở 15: Times City",
                imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
                phoneNumber: "0243.203.1988 / 085.319.1988",
                address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            }}></CarouselItem>,
            <CarouselItem key={Math.random()} item={{
                name: "Cơ sở 15: Times City",
                imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
                phoneNumber: "0243.203.1988 / 085.319.1988",
                address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            }}></CarouselItem>,], [<CarouselItem key={Math.random()} item={{
            name: "Cơ sở 15: Times City",
            imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
            phoneNumber: "0243.203.1988 / 085.319.1988",
            address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
        }}></CarouselItem>,
            <CarouselItem key={Math.random()} item={{
                name: "Cơ sở 15: Times City",
                imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
                phoneNumber: "0243.203.1988 / 085.319.1988",
                address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            }}></CarouselItem>,
            <CarouselItem key={Math.random()} item={{
                name: "Cơ sở 15: Times City",
                imageUrl: "http://localhost:8080/resource/anhthit3.jpg",
                phoneNumber: "0243.203.1988 / 085.319.1988",
                address: "Số 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội",
            }}></CarouselItem>],
    ];
    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                },
            },
        ],
    };

    return <div>
        <div className={'hidden sm:block'}>
            <Slider {...settings} className={'location carousel-lien-he'}>
                {locations?.map((x, i) => <div className={"lienHeSlider"} key={i}>
                    {x?.map(y => y)}
                </div>)}
            </Slider>
        </div>
        <div className={'sm:hidden px-[10px] sm:px-0 flex flex-col gap-[4px]'}>
            {locations?.map((x, i) => {return x?.map(y => y)})}
        </div>
    </div>
}

export default LienHeCarousel;

