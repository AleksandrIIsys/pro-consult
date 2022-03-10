import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FormattedMessage} from "react-intl";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Navigation, Pagination} from "swiper";

const MainNews = observer(() => {
    const {news,locale} = useContext(Context)
    return (
        <div className="news">
            {
                news.getNews().length > 3 ?
            <div className="container">


                <div className="news__title">
                    <FormattedMessage id={"news_title"}/>
                </div>
                <Swiper
                    slidesPerView={6}
                    modules={[Navigation, Pagination, Mousewheel]}
                    pagination={true}
                    mousewheel={false}
                    cssMode={true}
                    slidesPerView={4}>
                    {
                    news.getNews().map((news_element,key)=>
                        <SwiperSlide  key={key}>
                            <div className="news__item">
                                <img src= {news_element.image}  alt=""/>
                                <div className="news__item__title">
                                    {news_element.title[locale.getLocale()]}
                                </div>
                                <div className="news__item__text">
                                    {news_element.text[locale.getLocale()]}
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
                {/*<Slider dots={true} infinite={true} speed={1000} slidesToScroll={1} arrows={false} slidesToShow={4}>*/}
                {/*    {*/}
                {/*        news.getNews().map((news_element,key)=>*/}
                {/*        <NewsElement currentLocale={locale.getLocale()} key={key} news={news_element}/>*/}
                {/*    )}*/}
                {/*</Slider>*/}
                <div className=" news__item__btn"><a href={"/news"}><FormattedMessage id={"all_news"}/></a>
                </div>
            </div>
                    : <></>
            }
        </div>
    );
});

export default MainNews;