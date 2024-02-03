import React from 'react'
import './Survey.css'

const Survey = () => {
  return (
    <div className='s-container'>
        {/* left side */}
        <div className='left-side '>
            <span className='primaryText'>STIMULATION AND MOTIVATION OF PRODUCTIVITY & PROFICIENCY </span>
            <span className='secondaryText'>STIMULATION AND MOTIVATION of PRODUCTIVITY and PROFICIENCY 
            especially in the Public Sector Administration and Management, through Intellectual 
            and Material Support. Productivity is a measure of the efficiency of a worker, 
            establishment, institution, establishment and system, etc., in converting inputs 
            into useful outputs. It's also a hot topic these days. Proficiency refers to the 
            level of advancement in a particular profession, skillset, or knowledge. Productivity 
            and Proficiency is the bedrock and concomitant for good governance. Consequently, good 
            governance implies efficient and effective public administration. National Policies and 
            Sound Management of all resources. It calls for the well-being, provide core services to 
            its people and then augument these resources and services, act as catalyst of change and 
            guide the various force in a society towards harmony.(Amoako K. Y. 1997). 

            </span>
            <div className='survey-button'>
                <span><a href='./values'>Read More</a></span>
            </div>
        </div>

        {/* right side */}

        <div className='right-side'>
            <img src='./survey1.jpg' alt='' />
        </div>
    </div>
  )
}

export default Survey