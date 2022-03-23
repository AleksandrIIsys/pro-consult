import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";
import {fetchPartners} from "../http/Api";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Navigation, Pagination} from "swiper";

const MainPartners = observer(() => {
    const {partners} = useContext(Context);
    useEffect(()=>{
        let isMounted = true;
        fetchPartners().then((data)=>partners.setPartners(data))
        return () => { isMounted = false };
    },[])
    return (
        <div className={"partners"}>{
            partners.getPartners().length !==0 ?
            <div>
                <div className="partners__title">
                    <FormattedMessage id={"our_partners"}/>
                </div>
                <Swiper
                    navigation={true}
                    pagination={true}
                    mousewheel={false}
                    cssMode={true}
                    slidesPerView={6}
                    modules={[Navigation, Pagination, Mousewheel]}
                    className={"container"}>{
                    partners.getPartners().map((prElem,key) =>
                        <SwiperSlide key={key} className="clients__item">
                            <img src={prElem.image} alt=""/>
                        </SwiperSlide>)
                }
                </Swiper>
            </div>
        :<></>}
        </div>
    );
});

export default MainPartners;