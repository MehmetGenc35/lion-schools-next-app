"use client"
import DataTable, { Column } from '@/components/common/form-fields/data-table'
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'
import ManagerToolbar from "./manager-toolbar";

const ManagerList = ({data}) => {

  const {content,totalPages,number,size} = data;


  const handleToolbar = (row) => {
    return <ManagerToolbar row={row} /> 
  }


  return (
    <Container>
      <Link href="/dashboard/manager/new" className="btn btn-primary mb-3">
        New
      </Link>

      <DataTable
        name="managerList"
        title="Manager List"
        dataSource={content}
        dataKey="id"
        totalPages={totalPages}
        currentPage={number}
        pageSize={size}
      >
        <Column index={true}>#</Column>
        <Column dataField="name">First Name</Column>
        <Column dataField="surname">Last Name</Column>
        <Column dataField="username">Username</Column>
        <Column template={handleToolbar}>Username</Column>
      </DataTable>
    </Container>
  );
}

export default ManagerList