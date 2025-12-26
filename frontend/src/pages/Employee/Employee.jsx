import React from 'react'
import EmployeeLayout from '../../layout/EmployeeLayout'
import Dashboard from './Dashboard'
import MyLeaves from './MyLeaves/MyLeaves.jsx'

const Employee = () => {
  return (
    <div>
      <EmployeeLayout>
        <Dashboard/>
        {/* <MyLeaves/> */}
      </EmployeeLayout>
    </div>
  )
}

export default Employee
