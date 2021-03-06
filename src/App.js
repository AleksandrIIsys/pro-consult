import "./App.css";
import "./css/fonts.css";
import "./css/style.css";
import "./css/normalize.css";
import "./css/media.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { LOCALES } from "./i18n/Locale";
import { IntlProvider } from "react-intl";
import { messages } from "./i18n/Message";
import { Context } from "./index";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    const { locale } = useContext(Context);

    function getInitialLocale() {
        const savedLocale = localStorage.getItem("locale") || LOCALES.ENGLISH;
        locale.setLocale(savedLocale);
        return savedLocale;
    }

    const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
    const handleChange = ({ target: { value } }) => {
        setCurrentLocale(value);
        localStorage.setItem("locale", value);
        locale.setLocale(value);
    };
    return (
        <IntlProvider
            messages={messages[currentLocale]}
            locale={currentLocale}
            defaultLocale={LOCALES.ENGLISH}
        >
            <BrowserRouter>
                <ScrollToTop />
                <AppRouter
                    currentLocale={currentLocale}
                    handleChangeLocale={handleChange}
                />
            </BrowserRouter>
        </IntlProvider>
    );
}

export default App;
