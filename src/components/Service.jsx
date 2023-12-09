import React from "react";
import relation from "../assets/relation.png";
import marketing from "../assets/marketing.png";
import media from "../assets/media.png";
import digital from "../assets/digital.png";
import advertising from "../assets/advertising.png";
import Container from "./Container";

const Service = () => {
    return (
        <div className="bg-secondary" id="service">
        <Container>
        <div className="w-full h-full">
            <div className="pt:0 lg:pt-24">
                <div className="grid grid-cols-12">
                    <div className="flex justify-center col-span-12 lg:col-span-4 sm:px-36 lg:p-0 mb-14 lg:mb-10">
                    <div className="mb-10 lg:w-64 lg:h-64 ">
                        <div className="flex flex-col h-full mt-20">
                            <h1 className="md:text-3xl text-2xl  leading-10 tracking-wider text-text-color mb-4 font-semibold">Our Services</h1>
                            <p className="lg:text-xl tracking-wider servicePColor lg:w-60 text-xl font-semibold">We Provide these service to your business</p>
                        </div>
                    </div>
                    </div>
                    <div className="flex justify-center col-span-12 lg:col-span-4 mb-14 lg:mb-10">
                    <div className="border rounded-xl shadow-xl w-64 h-64 bg-card1 relative">
                        <div className="flex flex-col justify-center items-center w-60 h-full m-auto">
                            <img className="object-contain mb-4" src={relation} alt="" />
                            <p className="text-xl font-medium text-center serviceText tracking-wider">Public Relation</p>
                        </div>
                        <div className="h-full hover:animate-spin w-full absolute top-0 left-0 rotate-[172deg] rounded-xl border-card1 border-dashed border-[3px]"></div>
                    </div>
                    </div>
                    <div className="flex justify-center col-span-12 lg:col-span-4 mb-14 lg:mb-10">
                    <div className="border rounded-xl shadow-xl w-64 h-64 bg-card2 relative">
                        <div className="flex flex-col justify-center items-center w-60 h-full m-auto">
                            <img className="object-contain mb-4" src={marketing} alt="" />
                            <p className="text-xl font-medium text-center serviceText tracking-wider w-48">Integrated Marketing Integration </p>
                        </div>
                        <div className="h-full hover:animate-spin w-full absolute top-0 left-0 rotate-[172deg] rounded-xl border-card2 border-dashed border-[3px]"></div>
                    </div>
                    </div>
                    <div className="flex justify-center col-span-12 lg:col-span-4 mb-14 lg:mb-10">
                    <div className="border rounded-xl shadow-xl w-64 h-64 bg-card3 relative">
                        <div className="flex flex-col justify-center items-center w-60 h-full m-auto">
                            <img className="object-contain mb-4" src={digital} alt="" />
                            <p className="text-xl font-medium text-center serviceText tracking-wider w-48">Digital Marketing</p>
                        </div>
                        <div className="h-full hover:animate-spin w-full absolute top-0 left-0 rotate-[172deg] rounded-xl border-card3 border-dashed border-[3px]"></div>
                    </div>
                    </div>
                    <div className="flex justify-center col-span-12 lg:col-span-4 mb-14 lg:mb-10">
                    <div className="border rounded-xl shadow-xl w-64 h-64 bg-card4 relative">
                        <div className="flex flex-col justify-center items-center w-60 h-full m-auto">
                            <img className="object-contain mb-4" src={advertising} alt="" />
                            <p className="text-xl font-medium text-center serviceText tracking-wider w-36">360 Advertising</p>
                        </div>
                        <div className="h-full hover:animate-spin w-full absolute top-0 left-0 rotate-[172deg] rounded-xl border-card4 border-dashed border-[3px]"></div>
                    </div>
                    </div>
                    <div className="flex justify-center col-span-12 lg:col-span-4">
                    <div className="border rounded-xl shadow-xl w-64 h-64 bg-card5 relative">
                        <div className="flex flex-col justify-center items-center w-60 h-full m-auto">
                            <img className="object-contain mb-4" src={media} alt="" />
                            <p className="text-xl font-medium text-center serviceText tracking-wider">Media Planning & Buying</p>
                        </div>
                        <div className="h-full hover:animate-spin w-full absolute top-0 left-0 rotate-[172deg] rounded-xl border-card5 border-dashed border-[3px]"></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </Container>
        </div>
    )
};

export default Service;