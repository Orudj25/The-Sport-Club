import React from 'react';
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../media-files/rightArrow.png'

const Programs = () => {
    return (
        <div className="Programs" id='programs'>
            {/* header */}
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <div className="programCategories">
                {programsData.map((program)=>(
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="JoinNow">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="right-arrow"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs;