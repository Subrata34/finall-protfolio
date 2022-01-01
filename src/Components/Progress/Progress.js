import React from 'react';
import { ProgressBar } from 'react-bootstrap';
const Progress = ({ skillName, proficiency }) => {
    return (
        <div data-aos="fade-left" className="my-4">
            <h4>{skillName}</h4>
            {
                <ProgressBar animated   variant="success" now={proficiency} label={`${proficiency}%`} />
            }
        </div>
    );
};

export default Progress;