import Link from 'next/link'
import React from 'react'

const AdminList = () => {
  return (
    <Container>
        <Link href='/dashboard/admin/new' className='btn btn-primary mb-3'>
            New
        </Link>

        
    </Container>
  )
}

export default AdminList