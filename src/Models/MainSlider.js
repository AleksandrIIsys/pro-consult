import React, { useContext, useState } from "react";
import SliderElement from "./SliderElement";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { LOCALES } from "../i18n/Locale";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { IntlProvider } from "react-intl";
import { Context } from "../index";
import {useMediaQuery} from "react-responsive";

const MainSlider = () => {
    const { locale } = useContext(Context);
    const isMobile = useMediaQuery({ query: "(max-width:480px)" });

    console.log(locale);
    const [slides, setSlides] = useState([
        {
            image: "/image/slider/slider_img-1.jpg",
            lang: {
                [LOCALES.ENGLISH]: {
                    title: "Experience Exceeding Expectations",
                    text: "Quality services are the result of the experience of our employees and partners",
                },
                [LOCALES.RUSSIAN]: {
                    title: "Опыт, Превосходящий Ожидания",
                    text: "Качественные услуги являются результатом опыта наших сотрудников и партнеров",
                },
                [LOCALES.UZBEK]: {
                    title: "Tajriba Cheksiz Taxminlar",
                    text: "Sifatli xizmatlar xodimlarimiz va hamkorlarimiz tajribasi natijasidir",
                },
            },
        },
        {
            image: "/image/slider/slider_img-2.jpg",
            lang: {
                [LOCALES.ENGLISH]: {
                    title: "Develop yourself with PCC",
                    text: "Training programs that will give you the opportunity to become a professional in engineering",
                },
                [LOCALES.RUSSIAN]: {
                    title: "Развивайте себя с помощью PCC",
                    text: "Учебные программы, которые дадут вам возможность стать профессионалом в области инженерии",
                },
                [LOCALES.UZBEK]: {
                    title: "PCC bilan o'zingizni rivojlantiring",
                    text: "Sizga muhandislik sohasida professional bo'lish imkoniyatini beradigan o'quv dasturlari",
                },
            },
        },
        {
            image: "/image/slider/slider_img-3.jpg",
            lang: {
                [LOCALES.ENGLISH]: {
                    title: "Design-Consulting-Supervision",
                    text: "The company provides consulting services in project management in Uzbekistan",
                },
                [LOCALES.RUSSIAN]: {
                    title: "Проектирование-Консультирование-Надзор",
                    text: "Компания предоставляет консультационные услуги по управлению проектами в Узбекистане",
                },
                [LOCALES.UZBEK]: {
                    title: "Dizayn-Konsalting-Nazorat",
                    text: "Kompaniya O'zbekistonda loyihalarni boshqarish bo'yicha konsalting xizmatlarini ko'rsatadi",
                },
            },
        },
    ]);
    return (
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            pagination={{
                clickable: true,
            }}
            autoplay={{ delay: 2000 }}
            modules={[EffectFade, Pagination, Autoplay]}
            className="mySwiper"
        >
            {slides.map((slide, key) => (
                <SwiperSlide key={key}>
                    <IntlProvider
                        messages={slide.lang[locale.getLocale()]}
                        locale={locale.getLocale()}
                        defaultLocale={LOCALES.ENGLISH}
                    >
                        <SliderElement slide={slide} />
                    </IntlProvider>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MainSlider;