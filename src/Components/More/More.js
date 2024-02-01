import React from 'react'
import './More.css'

const More = () => {
  return (
    <section className='m-container'>
        <div className='content'>
            <span className='primaryText'>PRODUCTIVITY & PROFICIENCY PROJECTS HIGHLIGHTS</span>
        </div>

        <div className='text'>
        <span className='greenText'>MDA’S BUDGETARY ALLOCATION</span>
        <span className='secondaryText'>
           1. MDA’s Budgetary-Monitoring AND Follow-up for transparent 
           implementation is of optimal concern and interest as against opacity 
           in governance.
            <br/>2. Publication of First Quarter, Second Quarter, Third Quarter 
            and Forth Quarterly Reports on Productivity and Proficiency in the 
            Public Sector Management and Administration.
        </span>
        </div>

        <div className='text'>
        <span className='greenText'>SYNERGY AND NEXUS:</span>
        <span className='secondaryText'>
        Facilitation of synergy and nexus between Public Corporations and 
        Training Institutions globally to enhance Optimal Productivity, 
        Best global practices and Proficiency in the Public Space and Sectors 
        of the National Economy geared towards service delivery and national 
        development across board.
        </span>
        </div>

        <div className='text'>
        <span className='greenText'>SYNERGY AND NEXUS:</span>
        <span className='secondaryText'>
        Exemplary public servants and state actors that have excelled 
        in terms of global indexes in the measurement of: productivity, 
        proficiency, service delivery and good governance shall be duly 
        recommended, commended and recognised.
        </span>
        </div>

        
            
        <div className='award'>
            <div className='left'>
                <span className='primaryText'>AWARD</span>
                <span className='greenText'>AWARD OF PSCOM: PUBLIC SERVICE CERTIFICATE OF MERIT
                    PPOM: PRODUCTIVITY AND PROFICIENCY ORDER OF MERIT
                </span>
            </div>

            <div className='right'>
               <img src='./award-img.jpg'></img>
            </div>
        </div>
       
       

    </section>
  )
}

export default More