import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";
import {fetchPartners} from "../http/Api";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Navigation, Pagination} from "swiper";
import {useMediaQuery} from "react-responsive";

const MainPartners = observer(() => {
    const {partners} = useContext(Context);
    const isMobile = useMediaQuery({ query: "(max-width:768px)" });
    const isTablet = useMediaQuery({ query: "(max-width:1080px)" });
    return (
        <div className={"partners"}>
            <div className={"container"}>
                {
            partners.getPartners().length !== 0 ?
            <div>
                <div className="partners__title">
                    <FormattedMessage id={"our_partners"}/>
                </div>
                <Swiper
                    pagination={true}
                    slidesPerView={isMobile ? 3 : isTablet ? 4 : 6}
                    modules={[Pagination]}>{
                    partners.getPartners().map((prElem,key) =>
                        <SwiperSlide key={key} className="clients__item">
                            <img src={prElem.image} alt=""/>
                        </SwiperSlide>)
                }
                </Swiper>
            </div>
        :<></>}
                </div>
        </div>
    );
});

export default MainPartners;