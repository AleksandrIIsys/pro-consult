import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Navigation, Pagination} from "swiper";
import {useMediaQuery} from "react-responsive";

const MainNews = observer(() => {
    const {news,locale} = useContext(Context)
    const isMobile = useMediaQuery({ query: "(max-width:480px)" });
    const isTablet = useMediaQuery({ query: "(max-width:1080px)" });

    return (
        <div className="news">
            {
                news.getNews().length > 3 ?
            <div className="container">

                {isMobile ? <div className="news__title">
                        <FormattedMessage id={"news_title"}/>
                        <a href={"/news"}><FormattedMessage id={"all_news"}/></a>
                    </div>
                    :
                    <div className="news__title">
                    <FormattedMessage id={"news_title"}/>
                </div>}

                <Swiper
                    modules={[Navigation, Pagination, Mousewheel]}
                    pagination={{clickable:true}}
                    slidesPerView={isMobile ? 1 : isTablet ? 2 : 4}>

                    {
                    news.getNews().map((news_element,key)=>
                        <SwiperSlide  key={key}>
                            <div className="news__item">
                                <img src= {news_element.image}  alt=""/>
                                <div className="news__item__title">
                                    {news_element.title[locale.getLocale()]}
                                </div>
                                <div className="news__item__text">
                                    {
                                        <div  dangerouslySetInnerHTML={{__html:news_element.text[locale.getLocale()]}}/>
                                    }
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
                {isMobile ? <></> :
                    <div className=" news__item__btn"><a href={"/news"}><FormattedMessage id={"all_news"}/></a>
                    </div>
                }
            </div>
                    : <></>
            }
        </div>
    );
});

export default MainNews;