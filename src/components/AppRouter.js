import React, {useContext, useEffect} from 'react';
import Home from "../pages/Home";
import {ABOUTUS, ADMIN_ROUTER, HOME_ROUTER, MAIN_ROUTER, NEWS_ROUTER, WHEREWEWORK_ROUTER} from "../utils/consts";
import News from "../pages/News";
import Admin from "../pages/Admin";
import AdminNews from "./AdminNews/AdminNews";
import {Context} from "../index";
import {Route, Routes,Navigate} from "react-router-dom";
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
import NewServices from "../pages/NewServices";
import NewSectors from "../pages/NewSectors";
import SectorsText from "./Sectors/SectorsText";
import WaterText from "./Sectors/WaterText";
import TransportText from "./Sectors/TransportText";
import ServicesText from "./Services/ServicesText";
import InitiationText from "./Services/InitiationText";
import PlanText from "./Services/PlanText";
import DesignText from "./Services/DesignText";
import ProcurementText from "./Services/ProcurementText";
import DeliverText from "./Services/DeliverText";
import DecommissionText from "./Services/DecommissionText";
import EnergyText from "./Sectors/EnergyText";
import TelecommunicationText from "./Sectors/TelecommunicationText";
import Contacts from "../pages/Contacts";
import NewAbout from "../pages/NewAbout";
import NewsCard from "../pages/NewsCard";
import EducationCard from "../pages/EducationCard";
import About from "./EducationCard/about";
import Teachers from "./EducationCard/Teachers";
import Feedback from "./EducationCard/Feedback";

const AppRouter = ({currentLocale,handleChangeLocale}) => {
    const {news,testimonials,partners,clients,courses} = useContext(Context)
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
                <Route path={NEWS_ROUTER} element={<News/>}/>
                <Route path={NEWS_ROUTER+"/:id"} element={<NewsCard/>}/>
                <Route  path={WHEREWEWORK_ROUTER} element={<WhereWeWork/>}/>
                <Route path={ABOUTUS} element={<NewAbout/>}/>
                <Route path={"careers"} element={<Careers/>}/>
                <Route path={"*"} element={<Navigate to={"/"}/>}/>
                    <Route path={"education"} element={<Education/>}/>
                    <Route path={"education/:id"} element={<EducationCard/>}>
                        <Route path={"about"} element={<About/>}/>
                        <Route path={"teachers"} element={<Teachers/>}/>
                        <Route path={"feedback"} element={<Feedback/>}/>
                        <Route path={""} element={<Navigate to={"about"}/>}/>
                    </Route>
                    <Route path={"services"} element={<NewServices/>}>
                        <Route index element={<ServicesText/>}/>
                        <Route path={"initiation-and-conception"} element={<InitiationText/>}/>
                        <Route path={"plan"} element={<PlanText/>}/>
                        <Route path={"design"} element={<DesignText/>}/>
                        <Route path={"procurement"} element={<ProcurementText/>}/>
                        <Route path={"deliver"} element={<DeliverText/>}/>
                        <Route path={"decommission"} element={<DecommissionText/>}/>
                    </Route>
                    <Route path={"sectors"} element={<NewSectors/>}>
                        <Route index element={<SectorsText/>} />
                        <Route path={"waterandenvironment"} element={<WaterText/>} />
                        <Route path={"energyandresouces"} element={<EnergyText/>} />
                        <Route path={"transport"} element={<TransportText/>} />
                        <Route path={"telecommunication"} element={<TelecommunicationText/>} />
                    </Route>
                <Route path={"contacts"} element={<Contacts/>}/>
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