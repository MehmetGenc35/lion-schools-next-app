import DasboardNavigation from '@/components/dashboard/home/dasboard-navigation'
import PageHeader from '@/components/common/page-header'
import React from 'react'
import Spacer from '@/components/common/spacer'

const DashboardPage = () => {
  return (
    <>
    <PageHeader>Dashboard</PageHeader>
    <Spacer height={70}/>
    <DasboardNavigation/>
    <Spacer/>
    </>
  )
}

export default DashboardPage