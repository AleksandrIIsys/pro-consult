import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const ProjectSlider = observer(() => {
    const isMobile = useMediaQuery({ query: "(max-width:768px)" });
    const isTablet = useMediaQuery({ query: "(max-width:1080px)" });

    const { project, locale } = useContext(Context);
    return (
        <div className="block__text">
            <div className="about__main__title">
                <FormattedMessage id={"projects_title"} />
            </div>
            {isMobile ? (
                <Swiper
                    style={{ height: "250px" }}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    spaceBetween={20}
                >
                    {project.getProject().map((value, key) => (
                        <SwiperSlide key={key} className={"project_slide"}>
                            <img src={value.image} />
                            <span>{value.title[locale.getLocale()]}</span>
                            <div className="projects__item__btn">
                                <NavLink to={`/project/${key}`}>
                                    <FormattedMessage id={"more_info"} />
                                </NavLink>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <Swiper
                    slidesPerView={isTablet ? 2 : 4}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Grid, Pagination]}
                >
                    {project.getProject().map((value, key) => (
                        <SwiperSlide key={key} className={"project_slide"}>
                            <img src={value.image} />
                            <span>{value.title[locale.getLocale()]}</span>
                            <div className="projects__item__btn">
                                <NavLink to={`/project/${key}`}>
                                    <FormattedMessage id={"more_info"} />
                                </NavLink>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
});

export default ProjectSlider;