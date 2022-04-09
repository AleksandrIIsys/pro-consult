import React, {useContext} from "react";
import { useParams } from "react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import MainSlider from "../Models/MainSlider";
import NewsTable from "../components/NewsTable";
import { FormattedMessage, IntlProvider } from "react-intl";
import { LOCALES } from "../i18n/Locale";
import { messageTable } from "../i18n/MessageTable";
import {Context} from "../index";

const NewsCard = () => {
    const { id } = useParams();
    const  {locale} = useContext(Context);
    console.log(id);
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
                        <div className={"newscard_title"}>
                            <div>
                                <FormattedMessage id={"company_news"} />
                            </div>
                            <div>
                                Pro Consult company announces a set of events
                                dedicated to the opening of the site
                            </div>
                        </div>
                        <div className={"newscard_text"}>
                            <p>
                                <img src={"/image/clients/clients-1.jpg"} />
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classical Latin literature from 45
                                    BC, making it over 2000 years old. Richard
                                    McClintock, a Latin professor at
                                    Hampden-Sydney College in Virginia, looked
                                    up one of the more obscure Latin words,
                                    consectetur, from a Lorem Ipsum passage, and
                                    going through the cites of the word in
                                    classical literature, discovered the
                                    undoubtable source. Lorem Ipsum comes from
                                    sections 1.10.32 and 1.10.33 of "de Finibus
                                    Bonorum et Malorum" (The Extremes of Good
                                    and Evil) by Cicero, written in 45 BC. This
                                    book is a treatise on the theory of ethics,
                                    very popular during the Renaissance. The
                                    first line of Lorem Ipsum, "Lorem ipsum
                                    dolor sit amet..", comes from a line in
                                    section
                                    1.10.32asdasdasdasdadsdasdasdadasdasasasasdasdasa.
                                </p>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classical Latin literature from 45
                                    BC, making it over 2000 years old. Richard
                                    McClintock, a Latin professor at
                                    Hampden-Sydney College in Virginia, looked
                                    up one of the more obscure Latin words,
                                    consectetur, from a Lorem Ipsum passage, and
                                    going through the cites of the word in
                                    classical literature, discovered the
                                    undoubtable source. Lorem Ipsum comes from
                                    sections 1.10.32 and 1.10.33 of "de Finibus
                                    Bonorum et Malorum" (The Extremes of Good
                                    and Evil) by Cicero, written in 45 BC. This
                                    book is a treatise on the theory of ethics,
                                    very popular during the Renaissance. The
                                    first line of Lorem Ipsum, "Lorem ipsum
                                    dolor sit amet..", comes from a line in
                                    section 1.10.32
                                </p>
                                <p>
                                    {" "}
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classical Latin literature from 45
                                    BC, making it over 2000 years old. Richard
                                    McClintock, a Latin professor at
                                    Hampden-Sydney College in Virginia, looked
                                    up one of the more obscure Latin words,
                                    consectetur, from a Lorem Ipsum passage, and
                                    going through the cites of the word in
                                    classical literature, discovered the
                                    undoubtable source. Lorem Ipsum comes from
                                    sections 1.10.32 and 1.10.33 of "de Finibus
                                    Bonorum et Malorum" (The Extremes of Good
                                    and Evil) by Cicero, written in 45 BC. This
                                    book is a treatise on the theory of ethics,
                                    very popular during the Renaissance. The
                                    first line of Lorem Ipsum, "Lorem ipsum
                                    dolor sit amet..", comes from a line in
                                    section 1.10.32.
                                </p>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classical Latin literature from 45
                                    BC, making it over 2000 years old. Richard
                                    McClintock, a Latin professor at
                                    Hampden-Sydney College in Virginia, looked
                                    up one of the more obscure Latin words,
                                    consectetur, from a Lorem Ipsum passage, and
                                    going through the cites of the word in
                                    classical literature, discovered the
                                    undoubtable source. Lorem Ipsum comes from
                                    sections 1.10.32 and 1.10.33 of "de Finibus
                                    Bonorum et Malorum" (The Extremes of Good
                                    and Evil) by Cicero, written in 45 BC. This
                                    book is a treatise on the theory of ethics,
                                    very popular during the Renaissance. The
                                    first line of Lorem Ipsum, "Lorem ipsum
                                    dolor sit amet..", comes from a line in
                                    section 1.10.32.
                                </p>
                            </p>
                        </div>
                        <div
                            style={{
                                paddingTop: "40px",
                                borderTop: "2px solid black",
                            }}
                        >
                            <div className={"about__main__title"}>
                                <FormattedMessage id={"other_news"} />
                            </div>
                            <NewsTable row={5}></NewsTable>
                        </div>
                    </div>
                </div>
            </IntlProvider>
        </div>
    );
};

export default NewsCard;