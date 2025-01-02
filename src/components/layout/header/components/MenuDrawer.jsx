'use client';

import {LuMenu} from "react-icons/lu";
import {Drawer, Menu} from "antd";
import {useState} from "react";
import classes from "../style/menuDrawer.module.css"
const items = [
    {
        key: 'sub1',
        label: 'Trang chủ'
    },
    {
        key: 'sub2',
        label: 'Menu',
        children: [
            {
                key: '5',
                label: 'Option 5',
            },
            {
                key: '6',
                label: 'Option 6',
            },
            {
                key: 'sub3',
                label: 'Submenu',
                children: [
                    {
                        key: '7',
                        label: 'Option 7',
                    },
                    {
                        key: '8',
                        label: 'Option 8',
                    },
                ],
            },
        ],
    },
    {
        type: 'divider',
    },
    {
        key: 'sub4',
        label: 'Khuyến mãi',
        children: [
            {
                key: '9',
                label: 'Option 9',
            },
            {
                key: '10',
                label: 'Option 10',
            },
            {
                key: '11',
                label: 'Option 11',
            },
            {
                key: '12',
                label: 'Option 12',
            },
        ],
    },
    {
        key: 'sub5',
        label: 'Tin tức'
    },
    {
        key: 'sub6',
        label: 'Liên hệ'
    },
];
const MenuDrawer = ()=> {
    const [isOpentDrawer,setIsOpenDrawer] = useState(false);
    const showDrawer = () => {
        setIsOpenDrawer(true);
    };
    const onClose = () => {
        setIsOpenDrawer(false);
    };

    const onClick = (e) => {
        console.log('click ', e);
    };
    return <div className={classes.container}>
        <LuMenu color={'white'} size={25} onClick={showDrawer}/>
        <Drawer title="" onClose={onClose} open={isOpentDrawer} width={300}>
            <Menu
                onClick={onClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </Drawer>
    </div>
}

export default MenuDrawer;