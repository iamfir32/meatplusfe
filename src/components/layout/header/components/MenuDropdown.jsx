import Dropdown from "@/components/layout/header/components/Dropdown";
import menuApi from "@/app/api/fe/menuApi";
import Link from "next/link";
import {createUrlFriendly} from "@/utils/common";
import classes from "../style/Dropdown.module.css"
async function fetchMenu() {
    try {
        return await menuApi.getAll();
    } catch (error) {
        console.error("Failed to fetch promotion menu:", error);
        return [];
    }
}
const MenuDropdown = async ()=>{
    const data=await fetchMenu();
    const listMenu=[]
    const listCombo=[]
    data?.forEach(x=>{
        if(x.type==="COMBO"){
            listCombo.push(x)
        }else{
            listMenu.push(x);
        }
    })
    return <Dropdown>
        <div className='flex'>
            <div className={"border-r-[1px] border-r-[#f1f1f1] w-[240px]"}>
                <p className={classes.title}>MENU THỊT</p>
                {listMenu?.map((mn, i) => <Link className={classes.item} href={"/category/menu/" + createUrlFriendly(mn?.name + "-" + mn?.id)}
                                                key={i}>{mn?.name}</Link>)}
            </div>
            <div className={" w-[240px]"}>
                <p className={classes.title}>COMBO</p>
                {listCombo?.map((mn, i) => <Link className={classes.item} href={"/category/menu/" + createUrlFriendly(mn?.name + "-" + mn?.id)}
                                                 key={i}>{mn?.name}</Link>)}
            </div>
        </div>
    </Dropdown>
}

export default MenuDropdown