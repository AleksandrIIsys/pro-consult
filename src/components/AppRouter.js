import React, {useContext, useEffect} from 'react';
import Home from "../pages/Home";
import {ABOUTUS, ADMIN_ROUTER, HOME_ROUTER, MAIN_ROUTER, NEWS_ROUTER, WHEREWEWORK_ROUTER} from "../utils/consts";
import News from "../pages/News";
import Admin from "../pages/Admin";
import AdminNews from "./AdminNews/AdminNews";
import {Context} from "../index";
import {Route, Routes} from "react-router-dom";
import WhereWeWork from "../pages/WhereWeWork";
import MainPage from "../pages/MainPage";
import {fetchClients, fetchNews, fetchPartners, fetchTestimonials} from "../http/Api";
import AdminTestimonials from "./AdminTestimonials/AdminTestimonials";
import AdminClients from "./AdminClients/AdminClients";
import AdminPartners from "./AdminPartenrs/AdminPartners";
import AboutUs from "../pages/AboutUs";
import Careers from "../pages/Careers";
import Education from "../pages/Education";
import Services from "../pages/Services";
import Sectors from "../pages/Sectors";

const AppRouter = ({currentLocale,handleChangeLocale}) => {
    const {news,testimonials,partners,clients} = useContext(Context)
    useEffect(() => {
        let isMounted = true;
        fetchNews().then((data)=>{
            data.forEach((elem, index) => {
                elem.id = index + 1
            });
            news.setNews(data)
        })
        fetchTestimonials().then((data)=>{
            data.forEach((elem, index) => {
                elem.id = index + 1
            });
            testimonials.setTestimonials(data)
        })
        fetchClients().then((data)=>{
            data.forEach((elem, index) => {
                elem.id = index + 1
            });
            clients.setClients(data)
        })
        fetchPartners().then((data)=>{

            data.forEach((elem, index) => {
                elem.id = index + 1
            });
            partners.setPartners(data)
        })


        return () => { isMounted = false };
    }, []);

    return (
        <Routes>
            <Route exact path={HOME_ROUTER} element={<Home currentLocale={currentLocale} handleChangeLocale={handleChangeLocale}/>}>
                <Route path={MAIN_ROUTER} element={<MainPage/>}/>
                <Route  path={NEWS_ROUTER} element={<News/>}/>
                <Route  path={WHEREWEWORK_ROUTER} element={<WhereWeWork/>}/>
                <Route path={ABOUTUS} element={<AboutUs/>}/>
                <Route path={"careers"} element={<Careers/>}/>
                <Route path={"what-we-do"}>
                    <Route path={"education"} element={<Education/>}/>
                    <Route path={"services"} element={<Services/>}/>
                    <Route path={"sectors"} element={<Sectors/>}/>
                </Route>
            </Route>

            <Route  path={ADMIN_ROUTER} element={<Admin/>}>
                <Route exact path={'news'} element={<AdminNews/>}></Route>
                <Route path={"clients"} element={<AdminClients/>}></Route>
                <Route path={"partners"} element={<AdminPartners/>}></Route>
                <Route path={"testimonials"} element={<AdminTestimonials/>}></Route>
            </Route>
            <Route  path={HOME_ROUTER} element={<Home/>}></Route>
        </Routes>
    );

};
export default AppRouter;