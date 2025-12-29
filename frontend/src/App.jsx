import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import EmployeeLayout from './layout/EmployeeLayout'
import MyLeaves from './pages/Employee/MyLeaves/MyLeaves'
import Dashboard from './pages/Employee/Dashboard'
import Tasks from './pages/Employee/ProjectManagerTasks/Tasks'
import MyTask from './pages/Employee/EmployeeTask.jsx'
import Settings from './pages/Employee/Settings.jsx'
import ClientPayments from "./pages/Employee/Accounts/Client/ClientPayment.jsx"
import Expense from "./pages/Employee/Accounts/OtherExpenses/Expense.jsx"

const App = () => {
  return (
 <BrowserRouter>
      <Routes>

        {/* 🔹 Redirect root */}
        <Route path="/" element={<Navigate to="/employee" replace />} />

        <Route path="/employee" element={<EmployeeLayout />}>
          {/* Default page */}
          <Route index element={<Dashboard />} />

          {/* Child routes */}
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
    </BrowserRouter>
  )
}

export default App
