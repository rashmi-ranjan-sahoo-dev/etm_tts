import React from 'react'
import Navbar from './components/Employee/Navbar/Navbar'
import Sidebar from './components/Employee/Sidebar/Sidebar'
import Dashboard from './pages/Employee/Dashboard'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default App
