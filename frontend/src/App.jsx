import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import EmployeeLayout from './layout/EmployeeLayout'
import MyLeaves from './pages/Employee/MyLeaves/MyLeaves'
import Dashboard from './pages/Employee/Dashboard'
import Tasks from './pages/Employee/ProjectManagerTasks/Tasks'
import MyTask from './pages/Employee/EmployeeTask.jsx'
import Settings from './pages/Employee/Settings.jsx'
import ClientPayments from "./pages/Employee/Accounts/Client/ClientPayment.jsx"
import Expense from "./pages/Employee/Accounts/OtherExpenses/Expense.jsx"
import Projects from './pages/Client/Projects.jsx'
import Supports from './pages/Client/Supports.jsx'
import Billing from './pages/Client/Billing.jsx'

const App = () => {
  return (
 <BrowserRouter>
      <Routes>

        
        <Route path="/" element={<Navigate to="/employee" replace />} />

        <Route path="/employee" element={<EmployeeLayout />}>
          
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="myLeaves" element={<MyLeaves />} />
          <Route path="ProjectManagerTasks" element={<Tasks />} />
          <Route path="myTasks" element={<MyTask />} />
          <Route path="settings" element={<Settings />} />
          <Route path = "accounts/client-payments" element={<ClientPayments />} />
          <Route path="accounts/other-payments" element={<Expense />} />
          <Route path ="*" element= {<div>404 page not found</div>} />
        </Route>
      </Routes>
      
   
 {/* <Projects/> 
 <Supports/>
  */}
 {/* <Billing/>  */}
 </BrowserRouter> 
  )
}

export default App
