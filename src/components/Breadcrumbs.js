import React from 'react';
import {NavLink} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();
    return (
        <div className={"breadcrumb__react"}>
            {breadcrumbs.map(({match,breadcrumb,key},index)=>
                <span key={index}>
                            {key === '/' ?
                                <NavLink to={key}>{breadcrumb}</NavLink>
                                :
                                <NavLink to={key}>/{breadcrumb}</NavLink>}
                            </span>
            )}

        </div>
    );
};

export default Breadcrumbs;