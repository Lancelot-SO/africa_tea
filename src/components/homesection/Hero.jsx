/* eslint-disable no-unused-vars */
import React from 'react'
import tea from '../../assets/homesection/tea.mp4'
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import slider1 from "../../assets/homesection/slider1.png"


/* Animation variants */
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: "easeOut",
        },
    },
};

const Hero = () => {
    const MotionLink = motion(Link);

    return (
        <section className="relative z-0 h-[90vh] w-full pt-[43px]">
            <div className='absolute inset-0 bg-black/40'></div>

            <main className="flex flex-row w-full h-full">
                {/* Video section */}
                <div className="flex flex-1">
                    <video
                        className="w-full h-full object-cover"
                        src={tea}
                        autoPlay
                        loop
                        muted
                        controls={false}
                    />

                    {/* Animated content wrapper */}
                    <motion.div
                        className='absolute left-[150px] top-[40%] w-[600px] h-[381px] flex flex-col gap-2'
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div
                            className="w-full h-[213px]"
                            variants={item}
                        >
                            <h1 className='text-[61px] text-white font-bold leading-[71px] italic font-Merriweather-Regular-400-italic'>
                                Organic <span className='text-[#B18A45]'>Herbal Tea</span> Blend, Naturally Refreshing
                            </h1>
                        </motion.div>

                        <motion.span
                            className='w-full h-[72px] text-[16px] leading-[24px] text-[#ECEFED] font-normal font-Merriweather-Regular-400'
                            variants={item}
                        >
                            Our Organic Herbal Tea Blend is made from 100% natural herbs, offering a smooth, refreshing taste with no artificial additives. It’s perfect for relaxation and everyday wellness.
                        </motion.span>


                        <MotionLink
                            to="/shop"
                            variants={item}
                            className="group flex flex-row items-center justify-center gap-2 
    w-[176px] h-[48px] bg-[#C5CEC6] text-black 
    font-semibold text-[16px] leading-[24px] rounded-[6px]
    border border-transparent
    hover:bg-[#B18A45] hover:text-white hover:border-white
    transition-all duration-300"
                        >
                            Shop Now
                            <GoArrowUpRight
                                className="inline-block text-[#B18A45]
        transition-all duration-300
        group-hover:text-white
        group-hover:rotate-45"
                            />
                        </MotionLink>

                    </motion.div>
                </div>

                {/* Image slider section */}
                <div className="flex flex-1 bg-yellow-500">
                    <img src={slider1} alt='slider' className='w-full h-full object-cover' />
                </div>
            </main>
        </section>
    )
}

export default Hero
