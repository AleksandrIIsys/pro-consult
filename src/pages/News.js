import React, {useContext, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Grid, Mousewheel, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../css/style.css"
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import FooterTest from "../Models/FooterTest";
import {Link, NavLink} from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumbs from "../components/Breadcrumbs";
import NewsTable from "../components/NewsTable";
import MainSlider from "../Models/MainSlider";


const News = observer((props) => {
    const {news, locale} = useContext(Context)
    const breadcrumbs = useBreadcrumbs()
    return (
        <div>
            <MainSlider/>
            <div className={"center_container"}>
                <div className={"container"}>
                    <Breadcrumbs/>
                    <div className={"about__title"}>COMPANY NEWS</div>
                    <NewsTable row={5}/>
                </div>
            </div>

        </div>
    );
});

export default News;