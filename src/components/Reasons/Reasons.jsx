import React from 'react';
import './Reasons.css'
import image1 from '../../media-files/image1.png'
import image2 from '../../media-files/image2.png'
import image3 from '../../media-files/image3.png'
import image4 from '../../media-files/image4.png'
import nb from '../../media-files/nb.png'
import adidas from '../../media-files/adidas.png'
import nike from '../../media-files/nike.png'
import tick from '../../media-files/tick.png'

const Reasons = () => {
    return (
        <div className="Reasons" id='reasons'>
            <div className="left-r">
                <img src={image1} alt=""/>
                <img src={image2} alt=""/>
                <img src={image3} alt=""/>
                <img src={image4} alt=""/>
            </div>
            <div className="right-r">
               <span>Some reasons</span>
                <div>
                    <span className='stroke-text'>Why</span>
                    <span> Choose Us?</span>
                </div>
                <div className='details-r'>
                    <div>
                        <img src={tick} alt=""/>
                        <span>OVER 140+ EXPERT COACHES</span>
                    </div>
                    <div>
                        <img src={tick} alt=""/>
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt=""/>
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt=""/>
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span style={{
                    color:'var(--orange)',
                    fontWeight:'bold',
                    fontSize:'2rem'
                }}>OUR PARTNERS
                </span>
                <div className='partners'>
                    <img src={nb} alt=""/>
                    <img src={adidas} alt=""/>
                    <img src={nike} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Reasons;