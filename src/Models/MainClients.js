import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper";
import {useMediaQuery} from "react-responsive";



const MainClients = observer(() => {
    const {clients} = useContext(Context);
    const isMobile = useMediaQuery({ query: "(max-width:768px)" });
    const isTablet = useMediaQuery({ query: "(max-width:1080px)" });
    return (
        <div className={"clients"}>
            <div className={"container"}>
            {
                clients.getClients().length !== 0 ?
            <div>
            <div className="clients__title">
                <FormattedMessage id={"our_clients"}/>
            </div>
                <Swiper
                    pagination={true}
                    slidesPerView={isMobile? 3: isTablet ? 4 : 6}
                    modules={[Pagination]}>{
                    clients.getClients().map((clElem,key) =>
                        <SwiperSlide key={key} className="clients__item">
                            <img src={clElem.image} alt=""/>

                            {/*<img src={"/image/parners/partners-1.jpg"} alt=""/>*/}
                        </SwiperSlide>)
                }
                </Swiper>
            </div>
            : <></>
            }
            </div>
        </div>
    );
});

export default MainClients;