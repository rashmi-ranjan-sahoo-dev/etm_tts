// import React from 'react';
// import { Home, ChevronRight, Menu, PieChart, Pencil, Trash2 } from 'lucide-react';

// const EmployeeAttendance = () => {
//     const attendanceData = [
//         { date: '10-02-2018', checkIn: '10:28', checkOut: '19:32', hours: '08:04', shift: 'Shift 1', status: 'Present' },
//         { date: '11-02-2018', checkIn: '10:32', checkOut: '19:32', hours: '08:00', shift: 'Shift 1', status: 'Present' },
//         { date: '12-02-2018', checkIn: '-', checkOut: '-', hours: '-', shift: 'Shift 1', status: 'Leave' },
//         { date: '13-02-2018', checkIn: '10:35', checkOut: '19:31', hours: '07:56', shift: 'Shift 1', status: 'Present' },
//         { date: '14-02-2018', checkIn: '10:25', checkOut: '19:29', hours: '08:04', shift: 'Shift 1', status: 'Present' },
//         { date: '15-02-2018', checkIn: '-', checkOut: '-', hours: '-', shift: 'Shift 1', status: 'Weekend' },
//         { date: '16-02-2018', checkIn: '-', checkOut: '-', hours: '-', shift: 'Shift 1', status: 'Weekend' },
//         { date: '17-02-2018', checkIn: '10:28', checkOut: '19:35', hours: '08:07', shift: 'Shift 1', status: 'Present' },
//     ];

//     const getStatusColor = (status) => {
//         switch (status) {
//             case 'Present': return 'text-green-600 border-green-600';
//             case 'Leave': return 'text-red-500 border-red-500';
//             case 'Weekend': return 'text-sky-500 border-sky-500';
//             default: return 'text-gray-500 border-gray-500';
//         }
//     };

//     return (
//         <div className="flex-1 bg-gray-50 min-h-screen font-sans min-w-0">
//             <div className="p-6">
//                 {/* Page Header */}
//                 <div className="mb-6">
//                     <h1 className="text-2xl font-bold text-gray-700">Employee Attendance</h1>
//                 </div>

//                 <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

//                     {/* Tabs */}
//                     <div className="flex border-b border-gray-200">
//                         <button className="flex items-center gap-2 px-6 py-4 border-b-2 border-blue-600 text-blue-600 font-medium bg-blue-50/10">
//                             <Menu className="w-4 h-4" />
//                             <span>Details</span>
//                         </button>
//                         <button className="flex items-center gap-2 px-6 py-4 text-gray-500 hover:text-gray-700 font-medium">
//                             <PieChart className="w-4 h-4" />
//                             <span>Chart</span>
//                         </button>
//                     </div>

//                     {/* Profile Section */}
//                     <div className="p-8 border-b border-gray-100">
//                         <div className="flex flex-col md:flex-row gap-8 justify-between">
//                             <div className="flex items-center gap-4">
//                                 <img
//                                     src="https://i.pravatar.cc/150?u=2"
//                                     alt="Profile"
//                                     className="w-12 h-12 rounded-full object-cover"
//                                 />
//                                 <div>
//                                     <h3 className="font-bold text-gray-800">Maria Smith</h3>
//                                     <p className="text-sm text-gray-500">Software Developer</p>
//                                 </div>
//                             </div>

//                             <div className="space-y-1">
//                                 <p className="text-sm font-semibold text-gray-800">Employee ID</p>
//                                 <p className="text-sm text-gray-500">IM062587UT</p>
//                             </div>

//                             <div className="space-y-1">
//                                 <p className="text-sm font-semibold text-gray-800">Joining Date</p>
//                                 <p className="text-sm text-gray-500">12 January 2015</p>
//                             </div>

//                             <div className="space-y-1">
//                                 <p className="text-sm font-semibold text-gray-800">Department</p>
//                                 <p className="text-sm text-gray-500">Account</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Stats Section */}
//                     <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-100 bg-gray-50/30">
//                         <div className="text-center">
//                             <h4 className="text-2xl font-bold text-green-500">08:00</h4>
//                             <p className="text-xs text-gray-500 mt-1">Average Working Hours</p>
//                         </div>
//                         <div className="text-center">
//                             <h4 className="text-2xl font-bold text-green-500">10:30 AM</h4>
//                             <p className="text-xs text-gray-500 mt-1">Average In Time</p>
//                         </div>
//                         <div className="text-center">
//                             <h4 className="text-2xl font-bold text-green-500">07:30 PM</h4>
//                             <p className="text-xs text-gray-500 mt-1">Average Out Time</p>
//                         </div>
//                         <div className="text-center">
//                             <h4 className="text-2xl font-bold text-green-500">01:00</h4>
//                             <p className="text-xs text-gray-500 mt-1">Average Break Time</p>
//                         </div>
//                     </div>

//                     {/* Table */}
//                     <div className="overflow-x-auto">
//                         <table className="w-full text-sm text-left">
//                             <thead className="bg-white border-b border-gray-100">
//                                 <tr>
//                                     <th className="p-4 font-bold text-gray-700">Date</th>
//                                     <th className="p-4 font-bold text-gray-700">Check In</th>
//                                     <th className="p-4 font-bold text-gray-700">Check Out</th>
//                                     <th className="p-4 font-bold text-gray-700">Working Hours</th>
//                                     <th className="p-4 font-bold text-gray-700">Shift</th>
//                                     <th className="p-4 font-bold text-gray-700">Status</th>
//                                     <th className="p-4 font-bold text-gray-700">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-gray-50">
//                                 {attendanceData.map((row, index) => (
//                                     <tr key={index} className="hover:bg-gray-50 transition-colors">
//                                         <td className="p-4 text-gray-600 font-medium">{row.date}</td>
//                                         <td className={`p-4 ${row.checkIn === '-' ? 'text-gray-400' : 'text-green-500'}`}>{row.checkIn}</td>
//                                         <td className={`p-4 ${row.checkOut === '-' ? 'text-gray-400' : 'text-gray-600'}`}>{row.checkOut}</td>
//                                         <td className={`p-4 ${row.hours === '-' ? 'text-gray-400' : 'text-green-500'}`}>{row.hours}</td>
//                                         <td className="p-4 text-gray-600">{row.shift}</td>
//                                         <td className="p-4">
//                                             <span className={`px-3 py-1 text-xs border rounded ${getStatusColor(row.status)}`}>
//                                                 {row.status}
//                                             </span>
//                                         </td>
//                                         <td className="p-4">
//                                             <div className="flex items-center gap-3">
//                                                 <button className="text-blue-500 hover:text-blue-600 border border-blue-200 p-1.5 rounded hover:bg-blue-50">
//                                                     <Pencil className="w-4 h-4" />
//                                                 </button>
//                                                 <button className="text-orange-500 hover:text-orange-600 border border-orange-200 p-1.5 rounded hover:bg-orange-50">
//                                                     <Trash2 className="w-4 h-4" />
//                                                 </button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EmployeeAttendance;
//----------------------------------------------------------------------------------------------------------
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Home, ChevronRight, Menu, PieChart, Pencil, Trash2 } from 'lucide-react';

const EmployeeAttendance = () => {
    const location = useLocation();
    const employee = location.state?.employee;

    // Default data if no employee passed (fallback)
    const displayData = employee || {
        name: 'Maria Smith',
        avatar: 'https://i.pravatar.cc/150?u=2',
        role: 'Software Developer' // Mock role as it's not in the list object
    };

    const attendanceData = [
        { date: '10-02-2018', checkIn: '10:28', checkOut: '19:32', hours: '08:04', shift: 'Shift 1', status: 'Present' },
        { date: '11-02-2018', checkIn: '10:32', checkOut: '19:32', hours: '08:00', shift: 'Shift 1', status: 'Present' },
        { date: '12-02-2018', checkIn: '-', checkOut: '-', hours: '-', shift: 'Shift 1', status: 'Leave' },
        { date: '13-02-2018', checkIn: '10:35', checkOut: '19:31', hours: '07:56', shift: 'Shift 1', status: 'Present' },
        { date: '14-02-2018', checkIn: '10:25', checkOut: '19:29', hours: '08:04', shift: 'Shift 1', status: 'Present' },
        { date: '15-02-2018', checkIn: '-', checkOut: '-', hours: '-', shift: 'Shift 1', status: 'Weekend' },
        { date: '16-02-2018', checkIn: '-', checkOut: '-', hours: '-', shift: 'Shift 1', status: 'Weekend' },
        { date: '17-02-2018', checkIn: '10:28', checkOut: '19:35', hours: '08:07', shift: 'Shift 1', status: 'Present' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Present': return 'text-green-600 border-green-600';
            case 'Leave': return 'text-red-500 border-red-500';
            case 'Weekend': return 'text-sky-500 border-sky-500';
            default: return 'text-gray-500 border-gray-500';
        }
    };

    return (
        <div className="flex-1 bg-gray-50 min-h-screen font-sans min-w-0">
            <div className="p-6">
                {/* Page Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-700">Employee Attendance</h1>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                    {/* Tabs */}
                    <div className="flex border-b border-gray-200">
                        <button className="flex items-center gap-2 px-6 py-4 border-b-2 border-blue-600 text-blue-600 font-medium bg-blue-50/10">
                            <Menu className="w-4 h-4" />
                            <span>Details</span>
                        </button>
                    </div>

                    {/* Profile Section */}
                    <div className="p-8 border-b border-gray-100">
                        <div className="flex flex-col md:flex-row gap-8 justify-between">
                            <div className="flex items-center gap-4">
                                <img
                                    src={displayData.avatar}
                                    alt="Profile"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-800">{displayData.name}</h3>
                                    <p className="text-sm text-gray-500">{displayData.role || 'Employee'}</p>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm font-semibold text-gray-800">Employee ID</p>
                                <p className="text-sm text-gray-500">IM062587UT</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm font-semibold text-gray-800">Joining Date</p>
                                <p className="text-sm text-gray-500">12 January 2015</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm font-semibold text-gray-800">Department</p>
                                <p className="text-sm text-gray-500">Account</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-100 bg-gray-50/30">
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-green-500">08:00</h4>
                            <p className="text-xs text-gray-500 mt-1">Average Working Hours</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-green-500">10:30 AM</h4>
                            <p className="text-xs text-gray-500 mt-1">Average In Time</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-green-500">07:30 PM</h4>
                            <p className="text-xs text-gray-500 mt-1">Average Out Time</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-green-500">01:00</h4>
                            <p className="text-xs text-gray-500 mt-1">Average Break Time</p>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-white border-b border-gray-100">
                                <tr>
                                    <th className="p-4 font-bold text-gray-700">Date</th>
                                    <th className="p-4 font-bold text-gray-700">Check In</th>
                                    <th className="p-4 font-bold text-gray-700">Check Out</th>
                                    <th className="p-4 font-bold text-gray-700">Working Hours</th>
                                    <th className="p-4 font-bold text-gray-700">Shift</th>
                                    <th className="p-4 font-bold text-gray-700">Status</th>
                                    <th className="p-4 font-bold text-gray-700">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {attendanceData.map((row, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 text-gray-600 font-medium">{row.date}</td>
                                        <td className={`p-4 ${row.checkIn === '-' ? 'text-gray-400' : 'text-green-500'}`}>{row.checkIn}</td>
                                        <td className={`p-4 ${row.checkOut === '-' ? 'text-gray-400' : 'text-gray-600'}`}>{row.checkOut}</td>
                                        <td className={`p-4 ${row.hours === '-' ? 'text-gray-400' : 'text-green-500'}`}>{row.hours}</td>
                                        <td className="p-4 text-gray-600">{row.shift}</td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 text-xs border rounded ${getStatusColor(row.status)}`}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <button className="group relative text-blue-500 hover:text-blue-600 border border-blue-200 p-1.5 rounded hover:bg-blue-50">
                                                    <Pencil className="w-4 h-4" />
                                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10 transition-opacity">
                                                        Edit
                                                    </span>
                                                </button>
                                                <button className="group relative text-orange-500 hover:text-orange-600 border border-orange-200 p-1.5 rounded hover:bg-orange-50">
                                                    <Trash2 className="w-4 h-4" />
                                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10 transition-opacity">
                                                        Delete
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EmployeeAttendance;