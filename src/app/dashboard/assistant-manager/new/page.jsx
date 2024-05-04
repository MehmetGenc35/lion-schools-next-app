import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import AssistantManagerCreateForm from '@/components/dashboard/assistant-manager/assistant-manager-create-form'
import React from 'react'

const AssistantManagerCreatePage = () => {
  return (
    <>
      <PageHeader>New Assistant Manager</PageHeader>
      <Spacer height={70} />
      <AssistantManagerCreateForm />
      <Spacer />
    </>
  );
};

export default AssistantManagerCreatePage;