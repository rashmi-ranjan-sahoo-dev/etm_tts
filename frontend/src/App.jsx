import { BrowserRouter,Routes, Route } from 'react-router-dom'
import EmployeeLayout from './layout/EmployeeLayout'
import MyLeaves from './pages/Employee/MyLeaves/MyLeaves'
import Dashboard from './pages/Employee/Dashboard'
import Tasks from './pages/Employee/ProjectManagerTasks/Tasks'

const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/employee" element={<EmployeeLayout />}>
          <Route path="/employee/dashboard" index element={<Dashboard />} />
          <Route path="/employee/myLeaves" element={<MyLeaves />} />
          <Route path="/employee/ProjectManagerTasks" element={<Tasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
