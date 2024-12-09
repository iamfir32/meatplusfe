import Logo from "@/assets/images/logo.png"
import Image from "next/image"
import classes from "./style/header.module.css"

const Header =()=>{
    return <header className={classes.header}>
        <Image src={Logo.src} width={600} height={600} alt='logo'></Image>
    </header>
}

export default Header;