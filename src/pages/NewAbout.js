import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import "swiper/css/grid";
import "swiper/css/pagination";
import Breadcrumbs from "../components/Breadcrumbs";
import EducationTable from "../components/EducationTable";
import { useMediaQuery } from "react-responsive";
import { LOCALES } from "../i18n/Locale";
import { FormattedMessage, IntlProvider } from "react-intl";
import { Context } from "../index";
import { messageAbout } from "../i18n/MessageAbout";
import { observer } from "mobx-react-lite";
import SlideAbout from "../components/About/SlideAbout";
import { NavLink } from "react-router-dom";
import PartnersSlider from "../components/About/PartnersSlider";
import ClientsSlider from "../components/About/ClientsSlider";
import ProjectSlider from "../components/About/ProjectSlider";

const NewAbout = () => {
  const AboutData = [
    {
      title: <FormattedMessage id={"foundation_title"} />,
      link: "foundation",
    },
    { title: <FormattedMessage id={"partners_title"} />, link: "partners" },
    {
      title: <FormattedMessage id={"members_title"} />,
      link: "membership",
    },
    {
      title: <FormattedMessage id={"polices_strategies_title"} />,
      link: "polices",
    },
    { title: <FormattedMessage id={"projects_title"} />, link: "projects" },
  ];
  const image = [
    {
      text: <FormattedMessage id={"initiation_conception_title"} />,
      image: "/image/services/in.jpg",
      link: "/services/initiation-and-conception",
    },
    {
      text: <FormattedMessage id={"plan_title"} />,
      image: "/image/services/Plan.jpg",
      link: "/services/plan",
    },
    {
      text: <FormattedMessage id={"design_title"} />,
      image: "/image/services/design.png",
      link: "/services/design",
    },
    {
      text: <FormattedMessage id={"procurement_title"} />,
      image: "/image/services/procurement.png",
      link: "/services/procurement",
    },
    {
      text: <FormattedMessage id={"deliver_title"} />,
      image: "/image/services/deliver.png",
      link: "/services/deliver",
    },
    {
      text: <FormattedMessage id={"decommission_title"} />,
      image: "/image/services/decommission.png",
      link: "/services/decommission",
    },
  ];
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const { locale } = useContext(Context);
  return (
      <div>
          <IntlProvider
              messages={messageAbout[locale.getLocale()]}
              locale={locale.getLocale()}
              defaultLocale={LOCALES.ENGLISH}
          >
              <div className={"center_container"}>
                  <div className={"container"}>
                      <Breadcrumbs />
                      <div className={"services_menu"}>
                          <div className={"menu__choose"}>
                              {AboutData.map((value, key) => (
                                  <HashLink to={"#" + value.link}>
                                      <div
                                          key={key}
                                          className={"choosing_element"}
                                      >
                                          {value.title}
                                      </div>
                                  </HashLink>
                              ))}
                          </div>
                      </div>
                  </div>
                  <div className={"services_main"}>
                      <div className={"container"}>
                          <div className="block__text">
                              <div className="about__main__title">
                                  <FormattedMessage id={"about_us_title"} />
                              </div>
                              <p>
                                  <FormattedMessage id={"about_us"} />
                              </p>
                          </div>
                      </div>
                      <div id={"foundation"} className={"container"}>
                          <div className="block__text">
                              <div className="about__main__title">
                                  <FormattedMessage id={"foundation_title"} />
                              </div>
                              <p>
                                  <FormattedMessage id={"foundation"} />
                              </p>
                          </div>
                      </div>
                      <div id={"partners"} className={"container"}>
                         <PartnersSlider/>
                      </div>
                      <div id={"membership"} className={"container"}>
                         <ClientsSlider/>
                      </div>
                      <div id={"projects"} className={"container"}>
                         <ProjectSlider/>
                      </div>
                      <div id={"polices"} className={"container"}>
                          <div className="block__text">
                              <div className="about__main__title">
                                  <FormattedMessage
                                      id={"polices_strategies_title"}
                                  />
                              </div>
                              <p>
                                  <FormattedMessage id={"polices_strategies"} />
                              </p>
                              <div>
                                  <p className={"download_about"}>
                                      <FormattedMessage id={"download_title"} />
                                  </p>
                                  <div>
                                      <p>
                                          <FormattedMessage
                                              id={"download_url_1"}
                                          />
                                      </p>
                                      <p>
                                          <FormattedMessage
                                              id={"download_url_2"}
                                          />
                                      </p>
                                      <p>
                                          <FormattedMessage
                                              id={"download_url_3"}
                                          />
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {isMobile ? (
                      <div className={"container"}>
                          <div className="about__main__title">
                              <FormattedMessage id={"see_also"} />
                          </div>
                          <div className={"mobile__button"}>
                              <NavLink to={"/services"}>
                                  <FormattedMessage id={"all_services"} />
                              </NavLink>
                          </div>
                          <div className={"mobile__button"}>
                              <NavLink to={"/education"}>
                                  <FormattedMessage
                                      id={"upcoming_related_courses"}
                                  />
                              </NavLink>
                          </div>
                      </div>
                  ) : (
                      <div>
                          <div className={"by_sectors_menu"}>
                              <div className={"container"}>
                                  <div className={"title_sectors_container"}>
                                      <FormattedMessage id={"services_title"} />
                                  </div>
                                  <div className={"image_sectors_container"}>
                                      {image.map((value, key) => (
                                          <div>
                                              <NavLink to={value.link}>
                                                  <div
                                                      className={"inner_image"}
                                                  >
                                                      <img src={value.image} />
                                                  </div>
                                                  <div className={"inner_text"}>
                                                      <span>{value.text}</span>
                                                  </div>
                                              </NavLink>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          </div>
                          <div style={{ marginTop: "20px" }}>
                              <div className={"title_sectors_container"}>
                                  <FormattedMessage
                                      id={"upcoming_related_courses"}
                                  />
                              </div>
                              <div className={"course__table"}>
                                  <EducationTable row={3} />
                                  <div className="courses__item__btn">
                                      <NavLink to="/education">
                                          <FormattedMessage id={"all_course"} />
                                      </NavLink>
                                  </div>
                              </div>
                          </div>
                      </div>
                  )}
              </div>
          </IntlProvider>
      </div>
  );
};

export default NewAbout;
