import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

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