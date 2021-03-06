import React, { useContext } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/style.css";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import Breadcrumbs from "../components/Breadcrumbs";
import NewsTable from "../components/NewsTable";
import MainSlider from "../Models/MainSlider";
import { messageNews } from "../i18n/MessageNews";

const News = observer((props) => {
    const { locale } = useContext(Context);
    return (
        <div>
            <div className={"center_container"}>
                <div className={"container"}>
                    <Breadcrumbs />
                    <div className={"about__title"}>
                        {messageNews[locale.getLocale()].company_news}
                    </div>
                    <NewsTable row={5} />
                </div>
            </div>
        </div>
    );
});

export default News;
