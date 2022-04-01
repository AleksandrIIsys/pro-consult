import React from 'react';
import {LOCALES} from "../i18n/Locale";

const LangSelector = ({handleChangeLocale,currentLocale}) => {
    const languages = [
        { name: "English", code: LOCALES.ENGLISH },
        { name: "Русский", code: LOCALES.RUSSIAN },
        { name: "Узбек", code: LOCALES.UZBEK },
    ];
    return (
        <div>
            <div className="lang-menu">
                <select
                    className={"selected-lang"}
                    onChange={handleChangeLocale}
                    defaultValue={currentLocale}
                    defaultChecked={currentLocale}
                >
                    {languages.map(({ name, code }) => (
                        <option key={code} value={code}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default LangSelector;