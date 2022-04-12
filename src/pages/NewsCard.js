import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import MainSlider from "../Models/MainSlider";
import NewsTable from "../components/NewsTable";
import { FormattedMessage, IntlProvider } from "react-intl";
import { LOCALES } from "../i18n/Locale";
import { messageTable } from "../i18n/MessageTable";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const NewsCard = observer(() => {
    const { id } = useParams();
    const { locale, news } = useContext(Context);
    const [currentNews, setCurrentNews] = useState(news.getNews());
    return (
        <div>
            <IntlProvider
                messages={messageTable[locale.getLocale()]}
                locale={locale.getLocale()}
                defaultLocale={LOCALES.ENGLISH}
            >
                <MainSlider />
                <div className={"center_container"}>
                    <div className={"container"}>
                        <Breadcrumbs />
                        {news.getNews().length === 0 ? (
                            <></>
                        ) : (
                            <div id={"tut"}>
                                <div className={"newscard_title"}>
                                    <div>
                                        <FormattedMessage id={"company_news"} />
                                    </div>
                                    <div>
                                        {currentNews[id].title[locale.getLocale()]}
                                    </div>
                                </div>
                                <div className={"newscard_text"}>
                                    <img src={currentNews[id].image} />
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: currentNews[id].text[
                                                locale.getLocale()
                                            ],
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        <div
                            style={{
                                paddingTop: "40px",
                                borderTop: "2px solid black",
                            }}
                        >
                            <div className={"about__main__title"}>
                                <FormattedMessage id={"other_news"} />
                            </div>
                            <NewsTable row={5} />
                        </div>
                    </div>
                </div>
            </IntlProvider>
        </div>
    );
});

export default NewsCard;