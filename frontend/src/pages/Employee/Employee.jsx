import React from 'react'
import EmployeeLayout from '../../layout/EmployeeLayout'
import Dashboard from './Dashboard'

const Employee = () => {
  return (
    <div>
      <EmployeeLayout>
        <Dashboard/>
      </EmployeeLayout>
    </div>
  )
}

export default Employee
