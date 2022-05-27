import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import { values } from "mobx";
import { useOutletContext } from "react-router";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const About = observer(() => {
    const [value,locale] = useOutletContext()
    if(value === null)
        return <></>
    return (
        <div className={"container"}>
            <div className={"educationcard__about"}>
                <div className={"educationcard__text__about"}>
                    <div  dangerouslySetInnerHTML={{
                        __html: value.text[locale.getLocale()]
                    }}/>
                </div>
                <div className={"educationcard__sidebar"}>
                    <div>
                        <h5><FormattedMessage id={'date'}/>:</h5>
                        <p>{new Date(value.dateStart).toLocaleDateString(locale.getLocale(),{day:"numeric",month:"short"})} - {
                            new Date(value.dateEnd).toLocaleDateString(locale.getLocale(),{day:"numeric",month:"short"})
                        }</p>
                        <h5><FormattedMessage id={"place"}/>:</h5>
                        <p>{value.place[locale.getLocale()]}</p>
                    </div>
                    <div>
                        <div>
                            <h5><FormattedMessage id={"price"}/>:</h5>{value.price}
                        </div>
                        {/*<div*/}
                        {/*    className={"about__item__btn"}*/}
                        {/*    style={{*/}
                        {/*        alignSelf: "center",*/}
                        {/*        width: "auto",*/}
                        {/*        marginTop: "5px",*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    <a href={""} style={{ width: "auto" }}>*/}
                        {/*        enroll in courses*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                        <h5><FormattedMessage id={"pm"}/></h5>
                        <img src={value.managerImage} />
                        <div className={"name-meneger"}>{value.nameMN[locale.getLocale()]}</div>
                    </div>
                    <div
                        className={"about__item__btn"}
                        style={{
                            alignSelf: "center",
                            width: "auto",
                            margin: "5px",
                        }}
                    >
                        <Link to={"/contacts"} style={{ width: "auto" }}>
                            <FormattedMessage id={"contact_us"}/>
                        </Link>
                    </div>
                    <div>
                        <h5><FormattedMessage id={"rd"}/></h5>
                        <div  dangerouslySetInnerHTML={{
                            __html: value.document[locale.getLocale()]
                        }}/>
                    </div>
                    <div className={"licence_block"}>
                        <h5><FormattedMessage id={"license"}/></h5>
                        <img src={value.licenseImage} />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default About;
