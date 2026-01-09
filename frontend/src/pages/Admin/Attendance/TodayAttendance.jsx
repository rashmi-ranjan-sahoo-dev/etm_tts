import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Home,
    Search,
    Filter,
    PlusCircle,
    RotateCw,
    Download,
    Pencil,
    Trash2,
    ChevronRight
} from 'lucide-react';
import AttendanceModals from './AttendanceModals';

const TodayAttendance = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");

    useEffect(() => {
        if (location.state?.status) {
            setFilterStatus(location.state.status);
        }
        if (location.state?.openAddModal) {
            setIsAddModalOpen(true);
        }
    }, [location.state]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [employeeToDelete, setEmployeeToDelete] = useState(null);

    const [employeesList, setEmployeesList] = useState([
        { id: 1, name: 'John Deo', avatar: 'https://i.pravatar.cc/150?u=1', firstIn: '10:30', break: '01:15', lastOut: '19:37', totalHours: '08:02', status: 'present', shift: 'Night Shift', reason: '' },
        { id: 2, name: 'Sarah Smith', avatar: 'https://i.pravatar.cc/150?u=2', firstIn: '--:--', break: '--:--', lastOut: '--:--', totalHours: '00:00', status: 'absent', shift: 'Day Shift', reason: 'Sick Leave' },
        { id: 3, name: 'Edna Gilbert', avatar: 'https://i.pravatar.cc/150?u=3', firstIn: '--:--', break: '--:--', lastOut: '--:--', totalHours: '00:00', status: 'absent', shift: 'Day Shift', reason: 'Personal Emergency' },
        { id: 4, name: 'Shelia Oster...', avatar: 'https://i.pravatar.cc/150?u=4', firstIn: '10:38', break: '01:07', lastOut: '19:40', totalHours: '08:00', status: 'present', shift: 'Night Shift', reason: '' },
        { id: 5, name: 'Barbara Gar...', avatar: 'https://i.pravatar.cc/150?u=5', firstIn: '10:33', break: '01:15', lastOut: '19:30', totalHours: '08:01', status: 'present', shift: 'Night Shift', reason: '' },
        { id: 6, name: 'Sarah Smith', avatar: 'https://i.pravatar.cc/150?u=6', firstIn: '--:--', break: '--:--', lastOut: '--:--', totalHours: '00:00', status: 'absent', shift: 'Day Shift', reason: 'Casual Leave' },
        { id: 7, name: 'Marie Brods...', avatar: 'https://i.pravatar.cc/150?u=7', firstIn: '--:--', break: '--:--', lastOut: '--:--', totalHours: '00:00', status: 'absent', shift: 'Day Shift', reason: 'Medical Appointment' },
        { id: 8, name: 'Kara Thomp...', avatar: 'https://i.pravatar.cc/150?u=8', firstIn: '10:40', break: '01:07', lastOut: '19:30', totalHours: '08:12', status: 'present', shift: 'Day Shift', reason: '' },
        { id: 9, name: 'Joseph Nye', avatar: 'https://i.pravatar.cc/150?u=9', firstIn: '10:28', break: '01:00', lastOut: '19:32', totalHours: '08:02', status: 'present', shift: 'Night Shift', reason: '' },
    ]);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setIsEditModalOpen(true);
    };

    const handleDeleteClick = (employee) => {
        setEmployeeToDelete(employee);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = (id) => {
        setEmployeesList(employeesList.filter(emp => emp.id !== id));
        setIsDeleteModalOpen(false);
    };

    const handleAddAttendance = (newEmployee) => {
        setEmployeesList([newEmployee, ...employeesList]);
    };

    const handleSaveEdit = (updatedEmployee) => {
        setEmployeesList(employeesList.map(emp =>
            emp.id === updatedEmployee.id ? updatedEmployee : emp
        ));
        setIsEditModalOpen(false);
    };

    const filteredEmployees = employeesList.filter(emp => {
        const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === "All" || emp.status.toLowerCase() === filterStatus.toLowerCase();
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="flex-1 bg-gray-50 min-h-screen font-sans min-w-0">
            <div className="p-6">
                {/* Header Breadcrumbs */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-700">Today Attendance</h1>
                </div>

                {/* Toolbar */}
                <div className="bg-blue-50/50 p-4 rounded-t-xl flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-100">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-md text-sm">
                            Attendance
                        </button>
                        <div className="relative flex-1 md:w-64">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-white border-none rounded-md text-sm focus:ring-1 focus:ring-blue-500 shadow-sm"
                            />
                            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className={`p-2 rounded-full transition-colors ${filterStatus !== 'All' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-200'}`}
                            >
                                <Filter className="w-5 h-5" />
                            </button>
                            {isFilterOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 z-50 py-1">
                                    {['All', 'Present', 'Absent'].map((status) => (
                                        <button
                                            key={status}
                                            onClick={() => {
                                                setFilterStatus(status);
                                                setIsFilterOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${filterStatus === status ? 'text-blue-600 font-medium' : 'text-gray-700'
                                                }`}
                                        >
                                            {status}
                                            {filterStatus === status && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => setIsAddModalOpen(true)}
                            className="p-2 text-green-600 hover:bg-green-100 rounded-full transition-colors"
                        >
                            <PlusCircle className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => window.location.reload()}
                            className="p-2 text-gray-600 hover:bg-gray-200 rounded-full transition-colors"
                        >
                            <RotateCw className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors">
                            <Download className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-b-xl shadow-sm border border-gray-100 overflow-x-auto">
                    <table className="w-full text-base text-left">
                        <thead className="bg-white text-gray-700 font-medium border-b border-gray-100">
                            <tr>
                                <th className="p-4 w-10">
                                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                </th>
                                <th className="p-4">Employee Name</th>
                                {filterStatus === 'Absent' ? (
                                    <th className="p-4">Reason for leave</th>
                                ) : (
                                    <>
                                        <th className="p-4">First In</th>
                                        <th className="p-4">Break</th>
                                        <th className="p-4">Last Out</th>
                                        <th className="p-4">Total Hours</th>
                                    </>
                                )}
                                <th className="p-4">Status</th>
                                <th className="p-4">Shift</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredEmployees.map((emp) => (
                                <tr key={emp.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4">
                                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    </td>
                                    <td className="p-4">
                                        <div
                                            className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors"
                                            onClick={() => navigate('/employee-attendance', { state: { employee: emp } })}
                                        >
                                            <img src={emp.avatar} alt={emp.name} className="w-8 h-8 rounded-full bg-gray-200 object-cover" />
                                            <span className="font-medium text-blue-600 hover:underline">{emp.name}</span>
                                        </div>
                                    </td>
                                    {filterStatus === 'Absent' ? (
                                        <td className="p-4 text-gray-600">{emp.reason || 'N/A'}</td>
                                    ) : (
                                        <>
                                            <td className="p-4 text-gray-600">{emp.firstIn}</td>
                                            <td className="p-4 text-gray-600">{emp.break}</td>
                                            <td className="p-4 text-gray-600">{emp.lastOut}</td>
                                            <td className="p-4 text-gray-600">{emp.totalHours}</td>
                                        </>
                                    )}
                                    <td className="p-4">
                                        <span
                                            className={`px-3 py-1 rounded-md text-sm font-semibold ${emp.status === 'present'
                                                ? 'bg-green-100 text-green-600'
                                                : 'bg-orange-100 text-orange-400'
                                                }`}
                                        >
                                            {emp.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-600">{emp.shift}</td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                onClick={() => handleEdit(emp)}
                                                className="p-1.5 text-blue-500 hover:bg-blue-50 rounded border border-blue-200"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteClick(emp)}
                                                className="p-1.5 text-orange-500 hover:bg-orange-50 rounded border border-orange-200"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredEmployees.length === 0 && (
                                <tr>
                                    <td colSpan={filterStatus === 'Absent' ? "6" : "9"} className="p-8 text-center text-gray-500">
                                        No employees found matching "{searchTerm}"
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <AttendanceModals
                    isAddOpen={isAddModalOpen}
                    closeAdd={() => setIsAddModalOpen(false)}
                    onAdd={handleAddAttendance}
                    isEditOpen={isEditModalOpen}
                    closeEdit={() => setIsEditModalOpen(false)}
                    selectedEmployee={selectedEmployee}
                    onSaveEdit={handleSaveEdit}
                    isDeleteOpen={isDeleteModalOpen}
                    closeDelete={() => setIsDeleteModalOpen(false)}
                    confirmDelete={confirmDelete}
                    employeeToDelete={employeeToDelete}
                />
            </div>
        </div>
    );
};

export default TodayAttendance;