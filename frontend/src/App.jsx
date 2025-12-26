import React from 'react'
import Navbar from './components/Employee/Navbar/Navbar'
import Sidebar from './components/Employee/Sidebar/Sidebar'
import Dashboard from './pages/Employee/Dashboard'
import MyLeaves from './pages/Employee/My Leaves/MyLeaves'
import MyTasks from './pages/Employee/My Tasks/MyTasks'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Sidebar/>
       <Dashboard/> 
      <MyLeaves/>  */}
      <MyTasks/>
    </div>
  )
}

export default App
