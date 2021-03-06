import React from 'react';
import {AdminSideBarData} from "./AdminSideBarData";
import {NavLink} from "react-router-dom";

const SideBar = () => {
    return (
        <div className={"Sidebar"}>
            <ul className={"SidebarList"}>
            {
                AdminSideBarData.map((val,key)=>
                    <NavLink key={key} to={val.link} className={({isActive})=>(isActive ? 'active_sidebar' : '')}>
                    <li className={'row'}> {" "}
                        <div>{val.title}</div>
                    </li>
                    </NavLink>
                )
            }
            </ul>
        </div>
    );
};

export default SideBar;