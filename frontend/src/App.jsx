import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import EmployeeLayout from './layout/EmployeeLayout'
import MyLeaves from './pages/Employee/MyLeaves/MyLeaves'
import EmployeeDashboard from './pages/Employee/Dashboard'
import Tasks from './pages/Employee/ProjectManager/TeamDetail.jsx'
import AllProject from './pages/Employee/ProjectManager/Projects.jsx'
import MyTask from './pages/Employee/EmployeeTask.jsx'
import Settings from './pages/Settings.jsx'
import ClientPayments from "./pages/Employee/Accounts/Client/ClientPayment.jsx"
import Expense from "./pages/Employee/Accounts/OtherExpenses/Expense.jsx"
import Projects from './pages/Client/Projects.jsx'
import Supports from './pages/Client/Supports.jsx'
import Billing from './pages/Client/Billing.jsx'
import SignUp from './components/Auth/SignUp.jsx'
import SignIn from './components/Auth/SignIn.jsx'
import ClientLayout from './layout/ClientLayout.jsx'
import ClientDashboard from './pages/Client/Dashboard.jsx'
import TeamLeaderAddTask from './pages/Employee/TeamLeader/TeamLeaderTasks.jsx'
import AllTasks from './pages/Employee/TeamLeader/AllTasks.jsx'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/employee" element={<EmployeeLayout />}>
          <Route index element={<EmployeeDashboard />} />
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="myLeaves" element={<MyLeaves />} />
          <Route path="projectmanager/tasks" element={<Tasks />} />
          <Route path='projectmanager/allprojects' element={<AllProject />} />
          <Route path='teamleader/addtask' element={<TeamLeaderAddTask />} />
          <Route path='teamleader/alltasks' element={<AllTasks />} />
          <Route path="myTasks" element={<MyTask />} />
          <Route path="settings" element={<Settings />} />
          <Route path="accounts/client-payments" element={<ClientPayments />} />
          <Route path="accounts/other-payments" element={<Expense />} />
        </Route>
        <Route path="/client" element={<ClientLayout />}>
          <Route index element={<ClientDashboard />} />
          <Route path="dashboard" element={<ClientDashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="supports" element={<Supports />} />
          <Route path="billing" element={<Billing />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<div>404 page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
