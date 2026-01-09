// // import React, { useState } from 'react';
// // import {
// //     Home,
// //     ChevronRight,
// //     Search,
// //     CheckCircle,
// //     XCircle,
// //     MinusCircle,
// //     Star,
// //     Settings
// // } from 'lucide-react';

// // const AttendanceSheet = () => {
// //     // Generate days 1-31
// //     const days = Array.from({ length: 31 }, (_, i) => i + 1);

// //     const employees = [
// //         { id: 1, name: 'Jacob Ryan', avatar: 'https://i.pravatar.cc/150?u=12' },
// //         { id: 2, name: 'Angelica Ramos', avatar: 'https://i.pravatar.cc/150?u=13' },
// //         { id: 3, name: 'Jens Brincker', avatar: 'https://i.pravatar.cc/150?u=14' },
// //         { id: 4, name: 'Mark Hay', avatar: 'https://i.pravatar.cc/150?u=15' },
// //         { id: 5, name: 'Cara Stevens', avatar: 'https://i.pravatar.cc/150?u=16' },
// //         { id: 6, name: 'John Doe', avatar: 'https://i.pravatar.cc/150?u=1' },
// //         { id: 7, name: 'Ashton Cox', avatar: 'https://i.pravatar.cc/150?u=17' },
// //         { id: 8, name: 'Sarah Parker', avatar: 'https://i.pravatar.cc/150?u=18' },
// //         { id: 9, name: 'Airi Satou', avatar: 'https://i.pravatar.cc/150?u=19' },
// //     ];

// //     // Helper to generate consistent mock status for cells
// //     // 0: Weekend (gray), 1: Present (green), 2: Leave (red), 3: Holiday (yellow)
// //     const getStatus = (empId, day) => {
// //         const hash = (empId * 31 + day) % 100;
// //         if (day % 7 === 0 || day % 7 === 6) return 'Weekend';
// //         if (hash < 5) return 'Holiday';
// //         if (hash < 15) return 'Leave';
// //         return 'Present';
// //     };

// //     const StatusIcon = ({ status }) => {
// //         switch (status) {
// //             case 'Present': return <CheckCircle className="w-5 h-5 text-green-500" />;
// //             case 'Leave': return <XCircle className="w-5 h-5 text-orange-500" />; // User image uses orange/red X
// //             case 'Holiday': return <Star className="w-5 h-5 text-yellow-400 fill-current" />;
// //             case 'Weekend': return <MinusCircle className="w-5 h-5 text-gray-500" />;
// //             default: return null;
// //         }
// //     };

// //     return (
// //         <div className="flex-1 bg-gray-50 min-h-screen font-sans min-w-0">
// //             <div className="p-6">
// //                 {/* Header Breadcrumbs */}
// //                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
// //                     <h1 className="text-2xl font-bold text-gray-700">Attendance Sheet</h1>
// //                     <div className="flex items-center text-sm text-gray-500 mt-2 md:mt-0">
// //                         <Home className="w-4 h-4 mr-1" />
// //                         <ChevronRight className="w-4 h-4 mx-1" />
// //                         <span>Attendance</span>
// //                         <ChevronRight className="w-4 h-4 mx-1" />
// //                         <span className="text-blue-600">Sheet</span>
// //                     </div>
// //                 </div>

// //                 <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
// //                     <h2 className="text-lg font-semibold text-gray-700 mb-6">Attendance Sheet</h2>

// //                     {/* Filters */}
// //                     <div className="flex flex-col md:flex-row items-end gap-4 mb-8">
// //                         <div className="w-full md:w-64">
// //                             <label className="block text-sm text-gray-500 mb-1">Select Year*</label>
// //                             <select className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500">
// //                                 <option>2026</option>
// //                                 <option>2025</option>
// //                                 <option>2024</option>
// //                                 <option>2023</option>
// //                             </select>
// //                         </div>
// //                         <div className="w-full md:w-64">
// //                             <label className="block text-sm text-gray-500 mb-1">Select Month*</label>
// //                             <select className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500">
// //                                 <option>June</option>
// //                                 <option>July</option>
// //                                 <option>August</option>
// //                                 <option>September</option>
// //                                 <option>October</option>
// //                                 <option>November</option>
// //                                 <option>December</option>
// //                             </select>
// //                         </div>
// //                         <button className="w-full md:w-auto px-8 py-2 bg-gray-50 border border-gray-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-full font-medium transition-all shadow-sm hover:shadow-md active:scale-95">
// //                             Search
// //                         </button>
// //                     </div>

// //                     {/* Legend & Meta */}
// //                     {/* Legend & Meta */}
// //                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 text-sm gap-3 md:gap-0">
// //                         <span className="text-gray-500">Filtered by: Year: 2024 | Month: November</span>
// //                         <div className="flex items-center gap-3 flex-wrap">
// //                             <div className="flex items-center gap-1"><MinusCircle className="w-4 h-4 text-gray-500" /> <span className="text-gray-600">Weekend</span></div>
// //                             <div className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> <span className="text-gray-600">Present</span></div>
// //                             <div className="flex items-center gap-1"><XCircle className="w-4 h-4 text-orange-500" /> <span className="text-gray-600">Leave</span></div>
// //                             <div className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-current" /> <span className="text-gray-600">Holiday</span></div>
// //                         </div>
// //                     </div>

// //                     {/* Matrix Table */}
// //                     <div className="overflow-auto border border-gray-200 rounded-lg max-h-[calc(100vh-300px)] min-h-[400px] shadow-sm relative">
// //                         <table className="w-full text-center border-collapse">
// //                             <thead>
// //                                 <tr className="bg-gray-50 border-b border-gray-200">
// //                                     <th className="p-2 md:p-3 text-left w-[100px] min-w-[100px] md:w-auto md:min-w-[200px] border-r border-gray-200 sticky top-0 bg-gray-50 z-10 font-bold text-gray-700 text-sm whitespace-normal leading-tight">Employee Name</th>
// //                                     {days.map(d => (
// //                                         <th key={d} className="p-2 min-w-[40px] font-bold text-gray-700 text-sm sticky top-0 bg-gray-50 z-10">{d}</th>
// //                                     ))}
// //                                 </tr>
// //                             </thead>
// //                             <tbody className="divide-y divide-gray-100">
// //                                 {employees.map((emp) => (
// //                                     <tr key={emp.id} className="hover:bg-gray-50/50">
// //                                         <td className="p-2 md:p-3 text-left border-r border-gray-200 bg-white">
// //                                             <div className="flex items-center gap-2 md:gap-3">
// //                                                 <img src={emp.avatar} alt={emp.name} className="w-8 h-8 rounded-full bg-gray-200 object-cover shrink-0" />
// //                                                 <span className="font-semibold text-gray-700 text-xs md:text-sm whitespace-normal leading-tight">{emp.name}</span>
// //                                             </div>
// //                                         </td>
// //                                         {days.map(d => (
// //                                             <td key={d} className="p-2 border-r border-gray-50 last:border-r-0">
// //                                                 <div className="flex justify-center">
// //                                                     <StatusIcon status={getStatus(emp.id, d)} />
// //                                                 </div>
// //                                             </td>
// //                                         ))}
// //                                     </tr>
// //                                 ))}
// //                             </tbody>
// //                         </table>
// //                     </div>
// //                 </div>
// //             </div>
// //             {/* Floating Settings Button from image */}
// //             <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-l-md shadow-lg hover:bg-blue-600 transition-colors z-50">
// //                 <Settings className="w-5 h-5" />
// //             </button>
// //         </div>
// //     );
// // };

// // export default AttendanceSheet;
// //----------------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//     Home,
//     ChevronRight,
//     Search,
//     CheckCircle,
//     XCircle,
//     MinusCircle,
//     Star,
//     Settings
// } from 'lucide-react';

// const AttendanceSheet = () => {
//     const navigate = useNavigate();

//     // State for dropdowns
//     const [selectedYear, setSelectedYear] = useState(2024);
//     const [selectedMonth, setSelectedMonth] = useState(10); // 0-indexed (10 = November)

//     // State for displayed table (updated on Search click)
//     const [displayYear, setDisplayYear] = useState(2024);
//     const [displayMonth, setDisplayMonth] = useState(10);

//     const months = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];

//     const years = [2026, 2025, 2024, 2023];

//     // Calculate days in the displayed month
//     const getDaysInMonth = (year, month) => {
//         return new Date(year, month + 1, 0).getDate();
//     };

//     const daysInMonth = getDaysInMonth(displayYear, displayMonth);
//     const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

//     const handleSearch = () => {
//         setDisplayYear(parseInt(selectedYear));
//         setDisplayMonth(parseInt(selectedMonth));
//     };

//     const employees = [
//         { id: 1, name: 'Jacob Ryan', avatar: 'https://i.pravatar.cc/150?u=12' },
//         { id: 2, name: 'Angelica Ramos', avatar: 'https://i.pravatar.cc/150?u=13' },
//         { id: 3, name: 'Jens Brincker', avatar: 'https://i.pravatar.cc/150?u=14' },
//         { id: 4, name: 'Mark Hay', avatar: 'https://i.pravatar.cc/150?u=15' },
//         { id: 5, name: 'Cara Stevens', avatar: 'https://i.pravatar.cc/150?u=16' },
//         { id: 6, name: 'John Doe', avatar: 'https://i.pravatar.cc/150?u=1' },
//         { id: 7, name: 'Ashton Cox', avatar: 'https://i.pravatar.cc/150?u=17' },
//         { id: 8, name: 'Sarah Parker', avatar: 'https://i.pravatar.cc/150?u=18' },
//         { id: 9, name: 'Airi Satou', avatar: 'https://i.pravatar.cc/150?u=19' },
//     ];

//     // Helper to generate consistent mock status for cells
//     // 0: Weekend (gray), 1: Present (green), 2: Leave (red), 3: Holiday (yellow)
//     const getStatus = (empId, day) => {
//         // Create date object for the specific day to check if it's weekend
//         const date = new Date(displayYear, displayMonth, day);
//         const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday

//         if (dayOfWeek === 0 || dayOfWeek === 6) return 'Weekend';

//         // Mock data logic based on hash
//         const hash = (empId * 31 + day) % 100;
//         if (hash < 5) return 'Holiday';
//         if (hash < 15) return 'Leave';
//         return 'Present';
//     };

//     const StatusIcon = ({ status }) => {
//         switch (status) {
//             case 'Present': return <CheckCircle className="w-5 h-5 text-green-500" />;
//             case 'Leave': return <XCircle className="w-5 h-5 text-orange-500" />; // User image uses orange/red X
//             case 'Holiday': return <Star className="w-5 h-5 text-yellow-400 fill-current" />;
//             case 'Weekend': return <MinusCircle className="w-5 h-5 text-gray-500" />;
//             default: return null;
//         }
//     };

//     return (
//         <div className="flex-1 bg-gray-50 min-h-screen font-sans min-w-0">
//             <div className="p-6">
//                 {/* Header Breadcrumbs */}
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//                     <h1 className="text-2xl font-bold text-gray-700">Attendance Sheet</h1>
//                 </div>

//                 <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
//                     <h2 className="text-lg font-semibold text-gray-700 mb-6">Attendance Sheet</h2>

//                     {/* Filters */}
//                     <div className="flex flex-col md:flex-row items-end gap-4 mb-8">
//                         <div className="w-full md:w-64">
//                             <label className="block text-sm text-gray-500 mb-1">Select Year*</label>
//                             <select
//                                 value={selectedYear}
//                                 onChange={(e) => setSelectedYear(e.target.value)}
//                                 className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
//                             >
//                                 {years.map(y => (
//                                     <option key={y} value={y}>{y}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="w-full md:w-64">
//                             <label className="block text-sm text-gray-500 mb-1">Select Month*</label>
//                             <select
//                                 value={selectedMonth}
//                                 onChange={(e) => setSelectedMonth(e.target.value)}
//                                 className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
//                             >
//                                 {months.map((m, index) => (
//                                     <option key={index} value={index}>{m}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <button
//                             onClick={handleSearch}
//                             className="w-full md:w-auto px-8 py-2 bg-gray-50 border border-gray-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-full font-medium transition-all shadow-sm hover:shadow-md active:scale-95"
//                         >
//                             Search
//                         </button>
//                     </div>

//                     {/* Legend & Meta */}
//                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 text-sm gap-3 md:gap-0">
//                         <span className="text-gray-500">Filtered by: Year: {displayYear} | Month: {months[displayMonth]}</span>
//                         <div className="flex items-center gap-3 flex-wrap">

//                             <div className="flex items-center gap-1"><MinusCircle className="w-4 h-4 text-gray-500" /> <span className="text-gray-600">Weekend</span></div>
//                             <div className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> <span className="text-gray-600">Present</span></div>
//                             <div className="flex items-center gap-1"><XCircle className="w-4 h-4 text-orange-500" /> <span className="text-gray-600">Leave</span></div>
//                             <div className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-current" /> <span className="text-gray-600">Holiday</span></div>
//                         </div>
//                     </div>

//                     {/* Matrix Table */}
//                     <div className="overflow-auto border border-gray-200 rounded-lg max-h-[calc(100vh-300px)] min-h-[400px] shadow-sm relative">
//                         <table className="w-full text-center border-collapse">
//                             <thead>
//                                 <tr className="bg-gray-50 border-b border-gray-200">
//                                     <th className="p-2 md:p-3 text-left w-[100px] min-w-[100px] md:w-auto md:min-w-[200px] border-r border-gray-200 sticky top-0 bg-gray-50 z-10 font-bold text-gray-700 text-sm whitespace-normal leading-tight">Employee Name</th>
//                                     {days.map(d => (
//                                         <th key={d} className="p-2 min-w-[40px] font-bold text-gray-700 text-sm sticky top-0 bg-gray-50 z-10">{d}</th>
//                                     ))}
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-gray-100">
//                                 {employees.map((emp) => (
//                                     <tr key={emp.id} className="hover:bg-gray-50/50 group">
//                                         <td className="p-2 md:p-3 text-left border-r border-gray-200 bg-white">
//                                             <div
//                                                 onClick={() => navigate('/admin/employee-attendance', { state: { employee: emp } })}
//                                                 className="flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors"
//                                             >
//                                                 <img src={emp.avatar} alt={emp.name} className="w-8 h-8 rounded-full bg-gray-200 object-cover shrink-0" />
//                                                 <span className="font-semibold text-gray-700 text-xs md:text-sm whitespace-normal leading-tight group-hover:text-blue-600 transition-colors">{emp.name}</span>
//                                             </div>
//                                         </td>
//                                         {days.map(d => (
//                                             <td key={d} className="p-2 border-r border-gray-50 last:border-r-0">
//                                                 <div className="flex justify-center">
//                                                     <StatusIcon status={getStatus(emp.id, d)} />
//                                                 </div>
//                                             </td>
//                                         ))}
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

// export default AttendanceSheet;
//---------------------------------------------------------------------------------------------------------

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Home,
    ChevronRight,
    Search,
    CheckCircle,
    XCircle,
    MinusCircle,
    Star,
    Settings
} from 'lucide-react';

const AttendanceSheet = () => {
    const navigate = useNavigate();

    // State for dropdowns
    const [selectedYear, setSelectedYear] = useState(2024);
    const [selectedMonth, setSelectedMonth] = useState(10); // 0-indexed (10 = November)

    // State for displayed table (updated on Search click)
    const [displayYear, setDisplayYear] = useState(2024);
    const [displayMonth, setDisplayMonth] = useState(10);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const years = [2026, 2025, 2024, 2023];

    // Calculate days in the displayed month
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const daysInMonth = getDaysInMonth(displayYear, displayMonth);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const handleSearch = () => {
        setDisplayYear(parseInt(selectedYear));
        setDisplayMonth(parseInt(selectedMonth));
    };

    const employees = [
        { id: 1, name: 'Jacob Ryan', avatar: 'https://i.pravatar.cc/150?u=12' },
        { id: 2, name: 'Angelica Ramos', avatar: 'https://i.pravatar.cc/150?u=13' },
        { id: 3, name: 'Jens Brincker', avatar: 'https://i.pravatar.cc/150?u=14' },
        { id: 4, name: 'Mark Hay', avatar: 'https://i.pravatar.cc/150?u=15' },
        { id: 5, name: 'Cara Stevens', avatar: 'https://i.pravatar.cc/150?u=16' },
        { id: 6, name: 'John Doe', avatar: 'https://i.pravatar.cc/150?u=1' },
        { id: 7, name: 'Ashton Cox', avatar: 'https://i.pravatar.cc/150?u=17' },
        { id: 8, name: 'Sarah Parker', avatar: 'https://i.pravatar.cc/150?u=18' },
        { id: 9, name: 'Airi Satou', avatar: 'https://i.pravatar.cc/150?u=19' },
    ];

    // Helper to generate consistent mock status for cells
    // 0: Weekend (gray), 1: Present (green), 2: Leave (red), 3: Holiday (yellow)
    const getStatus = (empId, day) => {
        // Create date object for the specific day to check if it's weekend
        const date = new Date(displayYear, displayMonth, day);
        const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday

        if (dayOfWeek === 0 || dayOfWeek === 6) return 'Weekend';

        // Mock data logic based on hash
        const hash = (empId * 31 + day) % 100;
        if (hash < 5) return 'Holiday';
        if (hash < 15) return 'Leave';
        return 'Present';
    };

    const StatusIcon = ({ status }) => {
        switch (status) {
            case 'Present': return <CheckCircle className="w-5 h-5 text-green-500" />;
            case 'Leave': return <XCircle className="w-5 h-5 text-orange-500" />; // User image uses orange/red X
            case 'Holiday': return <Star className="w-5 h-5 text-yellow-400 fill-current" />;
            case 'Weekend': return <MinusCircle className="w-5 h-5 text-gray-500" />;
            default: return null;
        }
    };

    return (
        <div className="flex-1 bg-gray-50 min-h-screen font-sans min-w-0">
            <div className="p-6">
                {/* Header Breadcrumbs */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-700">Attendance Sheet</h1>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-6">Attendance Sheet</h2>

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row items-end gap-4 mb-8">
                        <div className="w-full md:w-64">
                            <label className="block text-sm text-gray-500 mb-1">Select Year*</label>
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                            >
                                {years.map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full md:w-64">
                            <label className="block text-sm text-gray-500 mb-1">Select Month*</label>
                            <select
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                            >
                                {months.map((m, index) => (
                                    <option key={index} value={index}>{m}</option>
                                ))}
                            </select>
                        </div>
                        <button
                            onClick={handleSearch}
                            className="w-full md:w-auto px-8 py-2 bg-gray-50 border border-gray-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-full font-medium transition-all shadow-sm hover:shadow-md active:scale-95"
                        >
                            Search
                        </button>
                    </div>

                    {/* Legend & Meta */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 text-sm gap-3 md:gap-0">
                        <span className="text-gray-500">Filtered by: Year: {displayYear} | Month: {months[displayMonth]}</span>
                        <div className="flex items-center gap-3 flex-wrap">

                            <div className="flex items-center gap-1"><MinusCircle className="w-4 h-4 text-gray-500" /> <span className="text-gray-600">Weekend</span></div>
                            <div className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> <span className="text-gray-600">Present</span></div>
                            <div className="flex items-center gap-1"><XCircle className="w-4 h-4 text-orange-500" /> <span className="text-gray-600">Leave</span></div>
                            <div className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-current" /> <span className="text-gray-600">Holiday</span></div>
                        </div>
                    </div>

                    {/* Matrix Table */}
                    <div className="overflow-auto border border-gray-200 rounded-lg max-h-[calc(100vh-300px)] min-h-[400px] shadow-sm relative">
                        <table className="w-full text-center border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="p-2 md:p-3 text-left w-[100px] min-w-[100px] md:w-auto md:min-w-[200px] border-r border-gray-200 sticky top-0 bg-gray-50 z-10 font-bold text-gray-700 text-sm whitespace-normal leading-tight">Employee Name</th>
                                    {days.map(d => (
                                        <th key={d} className="p-2 min-w-[40px] font-bold text-gray-700 text-sm sticky top-0 bg-gray-50 z-10">{d}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {employees.map((emp) => (
                                    <tr key={emp.id} className="hover:bg-gray-50/50 group">
                                        <td className="p-2 md:p-3 text-left border-r border-gray-200 bg-white">
                                            <div
                                                onClick={() => navigate('/admin/employee-attendance', { state: { employee: emp } })}
                                                className="flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors"
                                            >
                                                <img src={emp.avatar} alt={emp.name} className="w-8 h-8 rounded-full bg-gray-200 object-cover shrink-0" />
                                                <span className="font-semibold text-gray-700 text-xs md:text-sm whitespace-normal leading-tight group-hover:text-blue-600 transition-colors">{emp.name}</span>
                                            </div>
                                        </td>
                                        {days.map(d => (
                                            <td key={d} className="p-2 border-r border-gray-50 last:border-r-0">
                                                <div className="flex justify-center">
                                                    <StatusIcon status={getStatus(emp.id, d)} />
                                                </div>
                                            </td>
                                        ))}
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

export default AttendanceSheet;