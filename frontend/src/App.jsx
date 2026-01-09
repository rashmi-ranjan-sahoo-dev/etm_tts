import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import SignUp from './components/Auth/SignUp.jsx'
import SignIn from './components/Auth/SignIn.jsx'


import SuperAdminLayout from './layout/SuperAdmin.jsx'
import SuperAdminDashboard from './pages/SuperAdmin/Dashboard.jsx'
import SuperAdminAdminPage from './pages/SuperAdmin/Admin.jsx'
import SuperAdminClientPage from './pages/SuperAdmin/Client.jsx'
import SuperAdminProjects from './pages/SuperAdmin/Project/AllProjects.jsx'
import SuperAdminProjectDetails from './pages/SuperAdmin/Project/ProjectDetails.jsx'
import SuperAdminNewCustomersDetail from './pages/SuperAdmin/NewCustomersDetail.jsx'
import SuperAdminInquiriesDetail from './pages/SuperAdmin/InquiriesDetail.jsx'
import SuperAdminEarningsDetail from './pages/SuperAdmin/EarningsDetail.jsx'
import AdminDetail from './pages/SuperAdmin/AdminDetail.jsx'
import ClientDetail from './pages/SuperAdmin/ClientDetail.jsx'


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
import ProjectManagerAllProjects from './pages/Employee/ProjectManager/ProjectManagerAllProjects.jsx'
import ProjectDetailsPage from './pages/Employee/ProjectManager/ProjectDetailsPage.jsx'
import MyTask from './pages/Employee/EmployeeTask.jsx'
import ClientPayments from "./pages/Employee/Accounts/Client/ClientPayment.jsx"
import Expense from "./pages/Employee/Accounts/OtherExpenses/Expense.jsx"
import Projects from './pages/Client/Projects.jsx'
import ClientProjectDetailsPage from './pages/Client/ClientProjectDetailsPage.jsx'
import Supports from './pages/Client/Supports.jsx'
import TicketDetailsPage from './pages/Client/TicketDetailsPage.jsx'
import Billing from './pages/Client/Billing.jsx'
import BillingDetailsPage from './pages/Client/BillingDetailsPage.jsx'
import AssignedEmployees from './pages/Client/AssignedEmployees.jsx'
import PojectManagerTickets from './pages/Employee/ProjectManagerIssueTracker.jsx'
import LeadTickets from './pages/Employee/EmployeeIssueTracker.jsx'



import ClientLayout from './layout/ClientLayout.jsx'
import ClientDashboard from './pages/Client/Dashboard.jsx'
import TeamLeaderAddTask from './pages/Employee/TeamLeader/TeamLeaderTasks.jsx'
import AllTasks from './pages/Employee/TeamLeader/AllTasks.jsx'



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
          <Route path='projects' element={<SuperAdminProjects/>}/>
          <Route path='projects/:id' element={<SuperAdminProjectDetails/>}/>
          <Route path='new-customers' element={<SuperAdminNewCustomersDetail/>}/>
          <Route path='inquiries' element={<SuperAdminInquiriesDetail/>}/>
          <Route path='earnings' element={<SuperAdminEarningsDetail/>}/>
          {/* <Route path='addprojects' element={<SuperAdminAddProjects/>}/> */}
          <Route path="client" element={<SuperAdminClientPage />} />
          <Route path="client/:id" element={<ClientDetail />} />
          <Route path="admin" element={<SuperAdminAdminPage />} />
          <Route path="admin/:id" element={<AdminDetail />} />
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
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/employee" element={<EmployeeLayout />}>
          <Route index element={<EmployeeDashboard />} />
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="myLeaves" element={<MyLeaves />} />
          <Route path="projectmanager/tasks" element={<Tasks />} />
          <Route path='projectmanager/projects' element={<ProjectManagerAllProjects />} />
          <Route path='projectmanager/project/:id' element={<ProjectDetailsPage />} />
          <Route path='teamleader/addtask' element={<TeamLeaderAddTask />} />
          <Route path='teamleader/alltasks' element={<AllTasks />} />
          <Route path="myTasks" element={<MyTask />} />
           <Route path="lead-issue-tracker" element={<LeadTickets/>}/>
          <Route path="issue-tracker" element={<PojectManagerTickets/>}/>
          <Route path="settings" element={<Settings />} />
          <Route path="accounts/client-payments" element={<ClientPayments />} />
          <Route path="accounts/other-payments" element={<Expense />} />
        </Route>


        <Route path="/client" element={<ClientLayout />}>
          <Route index element={<ClientDashboard />} />
          <Route path="dashboard" element={<ClientDashboard />} />
          <Route path="employees" element={<AssignedEmployees />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ClientProjectDetailsPage />} />
          <Route path="supports" element={<Supports />} />
          <Route path="supports/:id" element={<TicketDetailsPage />} />
          <Route path="billing" element={<Billing />} />
          <Route path="billing/:id" element={<BillingDetailsPage />} />
          <Route path="settings" element={<Settings />} />
        </Route>


        <Route path="*" element={<div>404 page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
