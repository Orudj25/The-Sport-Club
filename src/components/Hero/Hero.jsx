import React from 'react';
import './Hero.css'
import Header from "../Header/Header";
import {motion} from 'framer-motion'
import hero_image from '../../media-files/hero_image.png'
import hero_image_back from '../../media-files/hero_image_back.png'
import heart from '../../media-files/heart.png'
import calories from '../../media-files/calories.png'

const Hero = () => {

    const transition = {type:'spring', duration: 3}
    const mobile = window.innerWidth <= 768 ? true : false

    return (
        <div className='hero' id='home'>
            <div className="left-h">
                <Header/>
                <div className="theBestAd">
                    <motion.div
                        initial={{left: mobile ? '154px' : '238px'}}
                        whileInView={{left:'8px'}}
                        transition={{...transition, type:'tween'}}
                    ></motion.div>
                    <span>
                        the best fitness club in the town
                    </span>
                </div>

                {/* Hero Heading */}
                <div className="heroText">
                    <div className="">
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body
                        </span>
                    </div>
                </div>

                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="heroButtons">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>

            {/* Right side*/}
            <div className="right-h">
                <button className='btn'>Join Now</button>
                <motion.div
                    initial={{right:'-7rem'}}
                    whileInView={{right:'4rem'}}
                    transition={transition}
                    className="heartRate">
                    <img src={heart} alt="heart-image"/>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero images */}
                <img className='heroImage' src={hero_image} alt="hero-image"/>
                <img className='heroImageBack' src={hero_image_back} alt="hero-image-back"/>

                {/* calories */}
                <motion.div
                    initial={{right:'-1rem'}}
                    whileInView={{right:'28rem'}}
                    transition={transition}
                    className="calories">
                    <img src={calories} alt="calories"/>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;