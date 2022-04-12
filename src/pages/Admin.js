import React, { useEffect, useState } from "react";
import { Dropzone } from "react-dropzone";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import LoginAdmin from "./LoginAdmin";
import { fetchCheckValidKey } from "../http/Api";

const Admin = () => {
    const [key, setKey] = useState(localStorage.getItem("auth-key") || "");
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    useEffect(async () => {
        const formdata = new FormData();
        formdata.set("checkedkey", key);
        const res = await fetchCheckValidKey(formdata);
        setIsAdmin(res);
        setIsLoad(true);
    }, [key]);
    return (
        <div>
            {isLoad ? (
                isAdmin ? (
                    <div className={"admin_panel"}>
                        <SideBar />
                        <Outlet></Outlet>
                    </div>
                ) : (
                    <LoginAdmin setKey={setKey} />
                )
            ) : (
                <></>
            )}
        </div>
    );
};

export default Admin;
