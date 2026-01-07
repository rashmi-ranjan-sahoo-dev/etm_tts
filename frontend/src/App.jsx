import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import SignUp from './components/Auth/SignUp.jsx'
import SignIn from './components/Auth/SignIn.jsx'


import SuperAdminLayout from './layout/SuperAdmin.jsx'
import SuperAdminDashboard from './pages/SuperAdmin/Dashboard.jsx'
import SuperAdminAdminPage from './pages/SuperAdmin/Admin.jsx'
import SuperAdminClientPage from './pages/SuperAdmin/Client.jsx'
import SuperAdminAllProjects from './pages/SuperAdmin/Project/AllProjects.jsx'
import SuperAdminAddProjects from './pages/SuperAdmin/Project/AddProjects.jsx'


import AdminLayout from './layout/AdminLayout.jsx'
import AdminDashboard from './pages/Admin/Dashboard.jsx'
import AdminDepartment from './pages/Admin/Department.jsx'
import AdminEmployee from './pages/Admin/EmployeeDetail.jsx'
import AdminTodayAttendance from './pages/Admin/Attendance/TodayAttendance.jsx'
import AdminEmployeeAttendance from './pages/Admin/Attendance/EmployeeAttendance.jsx'
import AdminEmployeeAttendanceSheet from './pages/Admin/Attendance/AttendanceSheet.jsx'
import AdminLeaveBalances from './pages/Admin/Leaves/LeaveBalances.jsx'
import AdminLeaveRequests from './pages/Admin/Leaves/LeaveRequests.jsx'
import AdminLeaveTypes from './pages/Admin/Leaves/LeaveTypes.jsx'
import AdminLeaveSetting from './pages/Admin/Leaves/LeaveSetting.jsx'
import AdminLeader from './pages/Admin/Leader.jsx'
import AdminTrainingList from './pages/Admin/Training/TrainingList.jsx'
import AdminTrainers from './pages/Admin/Training/Trainers.jsx'
import AdminTrainingType from './pages/Admin/Training/TrainingType.jsx'
import AdminHoliday from './pages/Admin/Holiday.jsx'


import EmployeeLayout from './layout/EmployeeLayout'
import MyLeaves from './pages/Employee/MyLeaves/MyLeaves'
import EmployeeDashboard from './pages/Employee/Dashboard'
import Tasks from './pages/Employee/ProjectManager/AddProjects.jsx'
import AllProject from './pages/Employee/ProjectManager/Projects.jsx'
import MyTask from './pages/Employee/EmployeeTask.jsx'
import ClientPayments from "./pages/Employee/Accounts/Client/ClientPayment.jsx"
import Expense from "./pages/Employee/Accounts/OtherExpenses/Expense.jsx"
import Projects from './pages/Client/Projects.jsx'
import Supports from './pages/Client/Supports.jsx'
import Billing from './pages/Client/Billing.jsx'



import ClientLayout from './layout/ClientLayout.jsx'
import ClientDashboard from './pages/Client/Dashboard.jsx'
import TeamLeaderAddTask from './pages/Employee/TeamLeader/TeamLeaderTasks.jsx'
import AllTasks from './pages/Employee/TeamLeader/AllTasks.jsx'
import EmployeeIssueTracker from './pages/Employee/EmployeeIssueTracker.jsx'


import Settings from './pages/Settings.jsx'



const App = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> 

        <Route path='/super-admin' element ={<SuperAdminLayout />}>
          <Route index element={<SuperAdminDashboard />} />
          <Route path="dashboard" element={<SuperAdminDashboard />} />
          <Route path='allprojects' element={<SuperAdminAllProjects/>}/>
          <Route path='addprojects' element={<SuperAdminAddProjects/>}/>
          <Route path="client" element={<SuperAdminClientPage />} />
          <Route path="admin" element={<SuperAdminAdminPage />} />
          <Route path="setting" element={<Settings />} />
        </Route>

        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<AdminDashboard/>}/>
          <Route path='dashboard' element={<AdminDashboard />}/>
          <Route path='department' element={<AdminDepartment />}/>
          <Route path='employee' element={<AdminEmployee/>}/>
          <Route path='holiday' element={<AdminHoliday/>}/>
          <Route path='leavebalances' element={<AdminLeaveBalances/>} />
          <Route path='leaverequest' element={<AdminLeaveRequests/>} />
          <Route path='leave-types' element={<AdminLeaveTypes/>} />
          <Route path='leave-setting' element={<AdminLeaveSetting/>} />
          <Route path='leader' element={<AdminLeader/>}/>
          <Route path='today-attendance' element={<AdminTodayAttendance/>} />
          <Route path='attendance-sheet' element={<AdminEmployeeAttendanceSheet/>} />
          <Route path='employee-attendance' element={<AdminEmployeeAttendance/>} />
          <Route path='training-list' element={<AdminTrainingList/>} />
          <Route path='trainers' element={<AdminTrainers/>} />
          <Route path='training-type' element={<AdminTrainingType/>} />
        </Route>

        <Route path="/employee" element={<EmployeeLayout />}>
          <Route index element={<EmployeeDashboard />} />
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="myLeaves" element={<MyLeaves />} />
          <Route path="projectmanager/tasks" element={<Tasks />} />
          <Route path='projectmanager/allprojects' element={<AllProject />} />
          <Route path='teamleader/addtask' element={<TeamLeaderAddTask />} />
          <Route path='teamleader/alltasks' element={<AllTasks />} />
          <Route path="myTasks" element={<MyTask />} />
          <Route path="IssueTracker" element={<EmployeeIssueTracker/>}/>
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
      {/* <Dashboard/> */}
       {/* <EmployeeDetail/>  */}
     {/* <LeaveRequests/> */}
      {/* <LeaveBalances/> */}
      {/* <LeaveTypes/> */}
      {/* <Holiday/> */}
      {/* <DepartmentPage/> */}
    </BrowserRouter>
  )
}

export default App
