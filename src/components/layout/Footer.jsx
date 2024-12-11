import {headers} from "next/headers";
import CmsRouteList from "@/utils/cmsRouteList";

const Footer =async ()=>{
    const headerList = await headers();
    const pathname = headerList.get("x-current-path");
    return <footer style={CmsRouteList.some(x=>pathname?.startsWith(x))?{display:'none'}:{}}></footer>
}

export default Footer;