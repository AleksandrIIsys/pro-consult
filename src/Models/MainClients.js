import React, {useContext, useEffect, useState} from 'react';
import Slider from "react-slick";
import ClientsElement from "./ClientsElement";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";
import {fetchClients} from "../http/Api";
const MainClients = observer(() => {
    const {clients} = useContext(Context);
    useEffect(()=>{
        let isMounted = true;
        return () => { isMounted = false };
    },[])
    return (
        <div className={"clients"}>
            <div>
            <div className="clients__title">
                <FormattedMessage id={"our_clients"}/>
            </div>
            <Slider className={"container"}  dots={true} infinite={true} speed={1000} slidesToScroll={1} arrows={true} slidesToShow={6}>
                {clients.getClients().map(clElem =>
                <ClientsElement clElem={clElem}/>)}
            </Slider>
            </div>
        </div>
    );
});

export default MainClients;