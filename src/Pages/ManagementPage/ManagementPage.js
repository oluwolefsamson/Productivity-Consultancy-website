import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Company from '../../Components/Company/Company';
import ManagementTeam from '../../Components/ManagementTeam/ManagementTeam';
import Icons from '../../Components/Icons/Icons';
import GetStarted from '../../Components/GetStarted/GetStarted';
import Footer from '../../Components/Footer/Footer'

const ManagementPage = () => {
  return (
    <div>
      < Navbar />
      < Hero />
      < Company />
      < ManagementTeam />
      < Icons />
      < GetStarted />
      < Footer />
    </div>
  )
}

export default ManagementPage