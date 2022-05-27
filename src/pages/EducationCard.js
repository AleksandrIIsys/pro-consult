import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import NavMenu from "../components/NavMenu";
import EducationTable from "../components/EducationTable";
import { useParams } from "react-router";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { FormattedMessage } from "react-intl";

const EducationCard = observer(() => {
    const EducationPages = [
        { title: <FormattedMessage id={"about_the_event"}/>, link: "about" },
        { title: <FormattedMessage id={"teachers"}/>, link: "teachers" },
        { title: <FormattedMessage id={"feedbacks"}/>, link: "feedback" },
    ];
    const { courses, locale } = useContext(Context);
    const { id } = useParams();
    const value= courses.getCourse().filter((i) => {
            return i.id == id;
        })[0]
    return (
        <div>
            <div className={"center_container"}>
                {courses.getCourse().filter((i) => {
                    return i.id == id;
                }).length === 0 ? (
                    <></>
                ) : (
                    <>
                        <div className="container">
                            <Breadcrumbs />
                            <h4>
                                <FormattedMessage id={"title_ed"}/>
                                <b>
                                    {" "}
                                    Center for Education of Engineers
                                    Consultants
                                </b>
                            </h4>
                            <h4>
                                <FormattedMessage id={"course_name"}/>:{" "}
                                <b>
                                    "
                                    {value.title[locale.getLocale()]}
                                    "
                                </b>
                            </h4>
                            <NavMenu data={EducationPages} />
                        </div>
                        <Outlet context={[value, locale]}></Outlet>
                        <div className={"container"}>
                            <div style={{ paddingTop: "20px" }}>
                                <div className={"about__main__title"}>
                                    <FormattedMessage id={"other_courses"}/>
                                </div>
                                <EducationTable row={5} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
});

export default EducationCard;
