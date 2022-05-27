import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Navigation, Pagination} from "swiper";
import {useMediaQuery} from "react-responsive";
import { NavLink } from "react-router-dom";

const MainNews = observer(() => {
    const {news,locale} = useContext(Context)
    const isMobile = useMediaQuery({ query: "(max-width:480px)" });
    const isTablet = useMediaQuery({query:"(max-width:720px)"})
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' bullet_style">'+"</span>";
        },
    };
    return (
        <div className="news">
            {
                news.getNews().length > 1 ?
            <div className="container">

                {isMobile ? <div className="news__title">
                        <FormattedMessage id={"news_title"}/>
                        <NavLink to={"/news"}><FormattedMessage id={"all_news"}/></NavLink>
                    </div>
                    :
                    <div className="news__title">
                    <FormattedMessage id={"news_title"}/>
                </div>}

                <Swiper
                    modules={[Navigation, Pagination, Mousewheel]}
                    pagination={pagination}
                    slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
                    style={isMobile ? {height:"200px"} : {height:"700px"}}
                >
                    {
                    news.getNews().map((news_element,key)=>
                        <SwiperSlide  key={key} className="news__item">
                                <img src= {news_element.image}  alt=""/>
                                <div className="news__item__title">
                                    {news_element.title[locale.getLocale()]}
                                </div>
                                <div className="news__item__text">
                                    {
                                        <div  dangerouslySetInnerHTML={{__html:news_element.text[locale.getLocale()]}}/>
                                    }
                                </div>
                        </SwiperSlide>
                    )}
                </Swiper>
                {isMobile ? <></> :
                    <div className=" news__item__btn"><NavLink to={"/news"}><FormattedMessage id={"all_news"}/></NavLink>
                    </div>
                }
            </div>
                    : <></>
            }
        </div>
    );
});

export default MainNews;