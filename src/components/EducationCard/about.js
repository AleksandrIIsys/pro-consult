import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper";

const About = () => {
    return (
        <div className={"container"} style={{marginTop: "20px"}}>
            <div style={{display: "flex", flexDirection: "row",}}>
                <div style={{textAlign: "justify", marginRight: '5px', fontFamily: "Verdana"}}>
                    <p>Training program is designed for managers and specialists in the field of investment
                        project management, performing work on the coordination and management of work related
                        to design and construction.</p>
                    <p>Category and composition of listeners: Heads of legal entities, heads of relevant
                        departments of legal entities, as well as specialists performing the functions of
                        project managers with higher, professional or special education.
                    </p>
                    <p>The scope of the program is designed in accordance with the requirements for specialists
                        in project management.
                    </p>
                    <h3 style={{fontWeight: "900"}}>Course Program</h3>
                    <p><h6 style={{color: "#15337e", fontWeight: "900"}}>Day #1 Introductory part</h6>
                        <ul>
                            <li>structure and relationships in construction</li>
                            <li>basics of project management</li>
                            <li>stages of the project life cycle in Uzbekistan</li>
                            <li>investment activity in construction and its participants</li>
                            <li>forming an addressable program</li>
                            <li>procedure for financing capital investments</li>
                        </ul>
                    </p>
                    <p><h6 style={{color: "#15337e", fontWeight: "900"}}>
                        Day # 2 -3 Pre-project cycle of project implementation</h6>
                        <ul>
                            <li>The role and place of the customer in the implementation of the project</li>
                            <li>The procedure for calculating the cost of developing the feasibility study</li>
                            <li>The order of preparation of tasks for the feasibility study and the contract
                                with the developers of the project
                            </li>
                            <li>Development and review of the pre-project documentation</li>
                        </ul>
                    </p>
                    <p><h6 style={{color: "#15337e", fontWeight: "900"}}>Day # 4 -5 Procurement</h6>
                        <ul>
                            <li>Government Procurement</li>
                            <li>Procurements under the IFI and IPFO procedure</li>
                        </ul>
                    </p>
                    <p><h6 style={{color: "#15337e", fontWeight: "900"}}>Day # 6 -7 The contract and the order
                        of its conclusion</h6>
                        <ul>
                            <li>The concept of the contract, its significance in the investment and construction
                                activities
                            </li>
                            <li>The structure of the contract under the Civil Code of the Republic of
                                Uzbekistan
                            </li>
                            <li>Contract structure under FIDIC</li>
                            <li>Judicial clause and applicable law</li>
                            <li>Methods of payment</li>
                        </ul>
                    </p>
                    <p><h6 style={{color: "#15337e", fontWeight: "900"}}>Day # 7-9 Условия поставки,
                        международные грузоперевозки, таможенное дело </h6>
                        <ul>
                            <li>Main</li>
                            <li>The structure of the contract under the Civil Code of the Republic of
                                Uzbekistan
                            </li>
                            <li>Structure of agreement under FIDIC</li>
                            <li>Judicial clause and applicable law</li>
                            <li>Methods of payment</li>
                            <li>Methods of performance of obligations</li>
                        </ul>
                    </p>
                    <p><h6 style={{color: "#15337e", fontWeight: "900"}}>Day # 10 Fundamentals of management in
                        design and construction. Completion and verification of assignments</h6>
                        <ul>
                            <li>The structure of the contract under the Civil Code of the Republic of
                                Uzbekistan
                            </li>
                            <li>Structure of agreement under FIDIC</li>
                            <li>Judicial clause and applicable law</li>
                            <li>Methods of payment</li>
                            <li>Methods of performance of obligations</li>
                        </ul>
                    </p>
                    <p></p>
                </div>
                <div style={{
                    float: "right",
                    width: "650px",
                    background: "rgba(21,51,126,0.1)",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <h5 style={{color: "#15337e", fontWeight: "600"}}>Date and place:</h5>
                    15 apr -25 apr 2022
                    <p>Mustakillik ave 155</p>
                    <h5 style={{color: "#15337e", fontWeight: "600"}}>Price:</h5>
                    3 250 000,00 UZs
                    <div className={"about__item__btn"}
                         style={{alignSelf: "center", width: "auto", marginTop: "5px"}}><a
                        style={{width: "auto"}}>enroll in courses</a></div>
                    <h5 style={{color: "#15337e", fontWeight: "600"}}>Program manager</h5>
                    <img src={"/image/ProgramMeneger.png"}
                         style={{width: "250px", alignSelf: "center"}}/>
                    <h5 style={{alignSelf: "center"}}>Shahnoza</h5>
                    <div className={"about__item__btn"}
                         style={{alignSelf: "center", width: "auto", margin: "5px"}}><a style={{width: "auto"}}>contact
                        us</a></div>
                    <h5 style={{color: "#15337e", fontWeight: "600"}}>Required documents</h5>
                    <ul>
                        <li>- passport</li>
                        <li>- подписанный договор</li>
                        <li>- оплата</li>
                    </ul>
                    <h5 style={{color: "#15337e", fontWeight: "600"}}>License</h5>
                    <img src={"/image/License.png"} style={{width: '250px', alignSelf: "center"}}/>

                </div>
            </div>
        </div>

    );
};

export default About;