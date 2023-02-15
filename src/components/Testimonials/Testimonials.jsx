import React, {useState} from 'react';
import {motion} from 'framer-motion'
import './Testimonials.css'
import leftArrow from '../../media-files/leftArrow.png'
import rightArrow from '../../media-files/rightArrow.png'
import {testimonialsData} from "../../data/testimonialsData";

const Testimonials = () => {
    const [selected,setSelected] = useState(0)
    const tLength = testimonialsData.length

    const transition = {type:'spring', duration: 3}

    return (
        <div className="Testimonials" id='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <motion.span
                    key={selected}
                    initial={{opacity:0,x:100}}
                    animate={{opacity:1,x:0}}
                    exit={{opacity:0, x: -100}}
                    transition={transition}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={{color:'var(--orange)'}}>
                        {testimonialsData[selected].name}
                    </span>{' '}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{opacity:0, x: -100}}
                    whileInView={{opacity:1, x: 0}}
                    transition={{...transition, duration: 2}}
                    src={testimonialsData[selected].image}
                >
                </motion.div>
                <motion.div
                    initial={{opacity:0, x: 100}}
                    whileInView={{opacity:1, x: 0}}
                    transition={{...transition, duration: 2}}
                    src={testimonialsData[selected].image}
                >
                </motion.div>
                <motion.img
                    key={selected}
                    initial={{opacity:0,x:100}}
                    animate={{opacity:1,x:0}}
                    exit={{opacity:0, x: -100}}
                    transition={transition}
                    src={testimonialsData[selected].image}
                    alt=""/>
                <div className="arrows">
                    <img
                        onClick={()=>{
                            selected === 0
                                ? setSelected(tLength-1)
                                :setSelected((prev) => prev - 1)
                        }}
                        src={leftArrow} alt=""
                    />
                    <img
                        onClick={()=>{
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1)
                        }}
                        src={rightArrow} alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;