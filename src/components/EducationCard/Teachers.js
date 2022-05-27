import React from 'react';
import { useOutletContext } from "react-router";
import { FormattedMessage } from "react-intl";

const Teachers = () => {
    const [value,locale] = useOutletContext()
    if(value === null)
        return <></>
    return (
        <div className={"container"}>
            <h5 className={"educationcard__teacher__title"}><FormattedMessage id={"teachers_title"}/></h5>
            <div className={"educationcard__teacher"}>

                {['teacherFirst', 'teacherSecond', 'teacherThird'].map(((teacher, index) =>
                    <div className={"educationcard__teacher__slide"} id={index}>
                    <img src={value[teacher].image}/>
                    <div >
                        <h5 >{value[teacher].name[locale.getLocale()]}</h5>
                        <p >{value[teacher].description[locale.getLocale()]}
                        </p>
                    </div>
                </div>))}
            </div>
        </div>
    );
};

export default Teachers;