import Link from "next/link";
import classes from "@/components/layout/header/style/header.module.css"
import { headers } from "next/headers";
import {MdKeyboardArrowDown} from "react-icons/md";
const NavLink = async ({href,title,dropdown})=>{
    const headerList = await headers();
    const pathname = headerList.get("x-current-path");

    const isActive = pathname === href || pathname.startsWith(href) && href !== "/";

    return (
        <Link
            href={href}
            className={`${isActive ? classes.activeNavLink : ''} ${classes.navLink} flex items-center`}
        >
            {title} {dropdown&& <MdKeyboardArrowDown />}
        </Link>
    );
}

export default NavLink;