import Logo from "@/assets/images/logo.png"
import Image from "next/image"
import classes from "@/components/layout/header/style/header.module.css"
import HeaderNav from "@/components/layout/header/components/HeaderNav";
import Booking from "@/components/layout/header/components/Booking";
import {headers} from "next/headers";
import CmsRouteList from "@/utils/cmsRouteList";
const Header =async ()=>{
    const headerList = await headers();
    const pathname = headerList.get("x-current-path");

    return <header className={classes.header} style={CmsRouteList.some(x=>pathname?.startsWith(x))?{display:'none'}:{}}>
        <div className={classes.container}>
            <div>
                <Image src={Logo.src} width={600} height={600} alt='logo'></Image>
                <div className='w-[40px] h-[40px] hidden lg:inline-block'></div>
            </div>

            <div className='flex items-center flex-wrap justify-end '>
                <HeaderNav></HeaderNav>
                <Booking></Booking>
            </div>
        </div>
    </header>
}

export default Header;