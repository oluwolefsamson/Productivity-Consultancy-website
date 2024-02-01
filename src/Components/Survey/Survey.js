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
            guide the various force in a society towards harmony.(Amoako K. Y. 1997). Besides, good 
            governance implies ruling on the bases of equity and social justice and an end to corruption, 
            nepotism and political manipulation of public institutions. It is only when citizens have the 
            believe that government operates on their behalf, in open and accountable manners will 
            government be able to obtain their willing cooperation in mobilizing resources for 
            development. In the creating and sustaining an environment which fosters strong and 
            equitable development and an essential complement to sound economic policies.

            </span>
            <div className='survey-button'>
                <span>Read More</span>
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