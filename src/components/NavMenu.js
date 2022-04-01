import React from 'react';
import {NavLink} from "react-router-dom";

const NavMenu = ({data}) => {
    return (
        <div className={"services_menu"}>
            <div className={"menu__choose"}>
                {data.map((value, key) =>
                    <NavLink to={value.link} className={({isActive}) => (isActive ? 'active_menu_choose' : '')}>
                        <div key={key} className={"choosing_element"}> {value.title}  </div>
                    </NavLink>)}
            </div>
        </div>
    );
};

export default NavMenu;