import Logo from "@/assets/images/logo.png"
import Image from "next/image"
import classes from "@/components/layout/header/style/header.module.css"
import HeaderNav from "@/components/layout/header/components/HeaderNav";
import Booking from "@/components/layout/header/components/Booking";

const Header =()=>{
    return <header className={classes.header}>
        <div className={classes.container}>
            <div>
                <Image src={Logo.src} width={600} height={600} alt='logo'></Image>
                <div className='w-[40px] h-[40px]'></div>
            </div>

            <div className='flex items-center flex-wrap'>
                <HeaderNav></HeaderNav>
                <Booking></Booking>
            </div>
        </div>
    </header>
}

export default Header;