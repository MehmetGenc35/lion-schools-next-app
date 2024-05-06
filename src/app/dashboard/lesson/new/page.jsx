import LessonCreateForm from '@/components/dashboard/lesson/term-create-form'
import React from 'react'

const NewLessonPage = () => {
 
  
    return (
    <>
      <PageHeader>New Lesson</PageHeader>
      <Spacer height={70} />
      <LessonCreateForm />
      <Spacer />
    </>
  );
}

export default NewLessonPage