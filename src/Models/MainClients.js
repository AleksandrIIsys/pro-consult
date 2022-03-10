import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper";



const MainClients = observer(() => {
    const {clients} = useContext(Context);
    console.log(clients.getClients())
    return (
        <div className={"clients"}>
            {
                clients.getClients().length > 3 ?
            <div>
            <div className="clients__title">
                <FormattedMessage id={"our_clients"}/>
            </div>
                <Swiper
                    navigation={true}
                    pagination={true}
                    mousewheel={false}
                    cssMode={true}
                    slidesPerView={6}
                    modules={[Navigation, Pagination, Mousewheel]}
                    className={"container"}>{
                    clients.getClients().map((clElem,key) =>
                        <SwiperSlide key={key} className="clients__item">
                                <img src={clElem.image} alt=""/>
                        </SwiperSlide>)
                }
                </Swiper>
            </div>
            : <></>
            }
        </div>
    );
});

export default MainClients;