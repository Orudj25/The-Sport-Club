import React from 'react';
import './Plans.css'
import whiteTick from '../../media-files/whiteTick.png'
import {plansData} from "../../data/plansData";

const Plans = () => {
    return (
        <div className="Plans-container" id='plans'>
            <div className="programs-header">
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>
            {/* plans card */}
            <div className="plans">
                {plansData.map((plan, index) =>
                    <div className='plan' key={index}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, index) => (
                                <div className='feature'>
                                    <img src={whiteTick} alt=""/>
                                    <span key={index}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits...</span>
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Plans;