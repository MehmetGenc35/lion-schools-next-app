import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import AssistantManagerEditForm from '@/components/dashboard/assistant-manager/assistant-manager-edit-form'
import { getAssistantManagerById } from '@/services/assistant-manager-service'
import React from 'react'

const AssistantManagerEditPage = async({ params }) => {

  if(!params.id) throw new Error("Id is missing");

  const res= await getAssistantManagerById(params.id);
  const data = await res.json();

  if(!res.ok) throw new Error(data.message);


  return (
    <>
    <PageHeader>Edit Assistant Manager</PageHeader>
    <Spacer height={70} />
    <AssistantManagerEditForm user={data.object}/> 
    <Spacer/>
    </>
  )
}

export default AssistantManagerEditPage;