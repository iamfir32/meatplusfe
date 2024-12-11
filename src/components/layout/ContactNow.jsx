import {headers} from "next/headers";
import CmsRouteList from "@/utils/cmsRouteList";

const ContactNow = async ()=>{
    const headerList = await headers();
    const pathname = headerList.get("x-current-path");
    return <div style={CmsRouteList.some(x=>pathname?.startsWith(x))?{display:'none'}:{}}>
    </div>
}
export default ContactNow;