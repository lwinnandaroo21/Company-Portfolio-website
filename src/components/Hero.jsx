import React, { useEffect, useState } from "react";
import duno from "../assets/finalDuno.gif";
import Container from "./Container";
import { Link } from "react-scroll";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";


const Hero = () => {

    const words = ['React', 'Animation', 'Awesome', 'GPT-3.5'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <section className="bg-secondary" id="home">
            <Container>
                <div className="w-full h-full">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="flex col-span-12 lg:mt-0 mt-48 lg:col-span-6 justify-center items-center md:pt-0 md:px-0 text-text-color text-2xl">
                            {/* <div className="grid grid-col-12"> */}
                            <>
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    direction="vertical"
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                    className=" h-32 "
                                >
                                    <SwiperSlide>“Your success is our priority. We take the time to understand your goals, challenges, and vision.”</SwiperSlide>
                                    <SwiperSlide>"Elevate your brand with our expert marketing agency.Let's get started. Contact us now!"</SwiperSlide>
                                    <SwiperSlide>“Ready to discuss your marketing goals in detail? Schedule a consultation with our experts.”</SwiperSlide>
                                </Swiper>
                            </>
                            <div className="col-span-12 hidden lg:block">
                                <div className="flex justify-end items-end pt-[500px]">
                                    <Link
                                        activeClass="active"
                                        to="service"
                                        spy={true}
                                        smooth={true}
                                        offset={-60} // Adjust this offset based on your layout (e.g., to account for fixed header)
                                        duration={500}
                                    >
                                        <button className="h-24 w-14 rounded-full border-2 border-text-color">
                                            <div className="flex justify-center items-center mb-8">
                                            <div className="h-2 w-2 rounded-full bg-text-color"></div>
                                            </div>
                                            <div className="flex justify-center items-center">
                                            <ChevronDoubleDownIcon className="h-6 w-6  text-text-color"/>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            {/* </div> */}

                        </div>

                        <div className="flex col-span-12 lg:col-span-6">
                            <div className="lg:w-3/4 m-auto lg:ml-10">
                                <img className=" h-auto lg:h-screen w-full object-cover" src={duno} alt="/" />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:hidden p-[50px]">
                                <div className="flex justify-center items-center">
                                    <Link
                                        activeClass="active"
                                        to="service"
                                        spy={true}
                                        smooth={true}
                                        offset={-60} // Adjust this offset based on your layout (e.g., to account for fixed header)
                                        duration={500}
                                    >
                                        <button className=" h-16 w-10 rounded-full border-2 border-text-color">
                                            <div className="flex justify-center items-center mb-3">
                                            <div className="h-1 w-1 rounded-full bg-text-color"></div>
                                            </div>
                                            <div className="flex justify-center items-center">
                                            <ChevronDoubleDownIcon className="h-4 w-4  text-text-color"/>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>

                </div>
            </Container>
        </section>
    );

};

export default Hero;