import React, {Suspense} from "react";
import { motion, useAnimation } from "framer-motion"
import Image from "next/image";
import avatar from "../images/avatar.svg"
import snap from "../images/snap.svg"
import insta from "../images/insta.svg"
import whats from "../images/whats.svg"
import twit from "../images/twit.svg"
export const Model_3d = ()=> {
    return (
        
        <>
        <motion.div  initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:0.2}}  className="col-12">
            <p className="fs-3 fw-bold main-color text-center mt-3 p-0">
                Profileo
            </p>
        </motion.div>
        <div className="container ps-4 pe-4">
            <div className="row">
                <div className="col-12 d-flex justify-content-center p-0 my-2">
                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:0.4}}  className="rounded-circle">
                        <Image className="img-fluid" src={avatar} height={90}></Image>
                    </motion.div>
                </div>
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:0.6}}  className="col-12 d-flex justify-content-center p-0 my-2">
                    <p className="fs-3 fw-bold p-0 m-0">
                        Aljouhara Alsaeed
                    </p>
                </motion.div>
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:0.8}}  className="col-12 d-flex justify-content-center">
                    <p className="fs-6 fw-semibold text-center p-0 m-0">
                        Product Manger | @Hungerstation
                    </p>
                </motion.div>
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:1}}  className="col-12 d-flex justify-content-center p-0 mb-3 mt-2">
                    <p className="fs-6 text-center p-0 m-0">
                        here some decription or summary about yourself.
                    </p>
                </motion.div>
                {/* <div className="col-12 p-0 mb-4 mt-1">
                    <div className="row d-flex justify-content-between text-center">
                        
                        <div className="col-4 p-0 m-0">
                            <div className="col-12">
                                <p className="fs-3 fw-bold text-center p-0 m-0">
                                    6+
                                </p>
                            </div>
                            <div className="col-12">
                                <p className="fs-6 text-center p-0 m-0">
                                Experience
                                </p>
                            </div>
                        </div>
                        <div className="col-4 p-0 m-0">
                            <div className="col-12">
                                <p className="fs-3 fw-bold text-center p-0 m-0">
                                    6+
                                </p>
                            </div>
                            <div className="col-12">
                                <p className="fs-6 text-center p-0 m-0">
                                Experience
                                </p>
                            </div>
                        </div>
                        <div className="col-4 p-0 m-0">
                            <div className="col-12">
                                <p className="fs-3 fw-bold text-center p-0 m-0">
                                    6+
                                </p>
                            </div>
                            <div className="col-12">
                                <p className="fs-6 text-center p-0 m-0">
                                Experience
                                </p>
                            </div>
                        </div>

                    </div>
                </div> */}
            </div>
            
        </div>
        <div className="container p-2">
            {/* tabs start */}
            <ul className="nav nav-pills d-flex justify-content-evenly p-0 mb-3 mt-2" id="pills-tab" role="tablist">
                <motion.li initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:1.2}}  className="nav-item" role="presentation">
                    <button className="nav-link px-5 main-color active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">SMedia</button>
                </motion.li>
                <motion.li initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:1.4}}  className="nav-item" role="presentation">
                    <button className="nav-link px-5 main-color" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">QContact</button>
                </motion.li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show p-3 text-center active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <div className="row d-flex justify-content-center">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:1.8}}  className="col-5 p-0 m-0">
                            <Image className="img-fluid my-2" src={twit} height={150}></Image>
                        </motion.div>
                        <motion.div  initial={{scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:2}} className="col-5 p-0 m-0">
                            <Image className="img-fluid my-2" src={snap} height={150}></Image>
                        </motion.div>
                        <div className="row"></div>
                        <motion.div  initial={{  scale: 0 }} animate={{scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:2.2}} className="col-5 p-0 m-0">
                            <Image className="img-fluid my-2" src={insta} height={150}></Image>
                        </motion.div>
                        <motion.div  initial={{ scale: 0 }} animate={{scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:2.4}} className="col-5 p-0 m-0">
                            <Image className="img-fluid my-2" src={whats} height={150}></Image>
                        </motion.div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                    <div className="row">
                        <div className="col-9 ps-4 mt-3">
                            <p className="fs-4 fw-bold p-0 m-0">
                            Love to hear from you,
                            Get in touch 👋🏼
                            </p>
                        </div>
                        <div className="row d-flex justify-content-between text-center ps-4 mt-5">
                        
                        <div className="col-4 px-3 m-0">
                            <div className="col-12">
                                <p className="fs-6 fw-bold d-flex justify-content-start p-0 m-0">
                                    Phone call
                                </p>
                            </div>
                        </div>
                        <div className="col-4 p-0 m-0">
                            <div className="col-12">
                                <p className="fs-6 fw-bold text-center p-0 m-0">
                                    +96656789107
                                </p>
                            </div>
                        </div>
                        <div className="col-4 p-0 m-0">
                            <div className="col-12">
                                <p className="fs-6 text-center p-0 m-0">
                                    copy
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="row"></div>
                    <div className="row d-flex justify-content-between text-center ps-4 mt-5">
                        
                        <div className="col-4 px-3 m-0">
                            <div className="col-12">
                                <p className="fs-6 fw-bold d-flex justify-content-start p-0 m-0">
                                    Email
                                </p>
                            </div>
                        </div>
                        <div className="col-4 p-0 m-0">
                            <div className="col-12">
                                <p className="fs-6 fw-bold text-center p-0 m-0">
                                    test@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="col-4 p-0 m-0">
                            <div className="col-12">
                                <p className="fs-6 text-center p-0 m-0">
                                    copy
                                </p>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            {/* tabs end */}
        </div>
        </>
 
    )
  }

  export default Model_3d;