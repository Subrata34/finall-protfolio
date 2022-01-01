import React from 'react';
import Progress from '../Progress/Progress';
import './Skill.css';
const Data=[
    {
        skillName:"HTML",
        proficiency:90
    },
    {
        skillName:"CSS",
        proficiency:80
    },
    {
        skillName:"Javascript",
        proficiency:80
    },
    {
        skillName:"Bootstrap",
        proficiency:85
    },
    {
      skillName:"Meterial Ui",
      proficiency:70
    },
    
    {
        skillName:"React JS",
        proficiency:80
    },
    {
        skillName:"Express JS",
        proficiency:60
    },
    {
        skillName:"Mongo DB",
        proficiency:70
    }
]

const Skill = () => {
    
    return (
        <section id="skills" className="container skill-area back">
            <h3 style={{ textAlign: 'center' }}>Skill <hr style={{backgroundColor:'white',width:'100%'}} /></h3>
            {
                Data.map(sd=><Progress skillName={sd.skillName} proficiency={sd.proficiency}></Progress>)
            }
        </section>
    );
};

export default Skill;