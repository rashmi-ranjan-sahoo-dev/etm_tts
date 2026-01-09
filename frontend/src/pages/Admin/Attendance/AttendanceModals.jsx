// /* eslint-disable react-hooks/set-state-in-effect */
// import React, { useState, useEffect } from 'react';
// import { X, User, Clock, ChevronDown } from 'lucide-react';

// const AddAttendanceModal = ({ isOpen, onClose, onAdd }) => {
//     // Form state
//     const [formData, setFormData] = useState({
//         name: '',
//         firstIn: '',
//         break: '',
//         lastOut: '',
//         totalHours: '',
//         status: 'present',
//         shift: 'Day Shift'
//     });

//     if (!isOpen) return null;

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = () => {
//         // Basic validation
//         if (!formData.name) return;

//         // Create new employee object
//         const newEmployee = {
//             id: Date.now(), // Simple ID generation
//             name: formData.name,
//             avatar: `https://i.pravatar.cc/150?u=${Date.now()}`, // Random avatar based on timestamp
//             firstIn: formData.firstIn || '--:--',
//             break: formData.break || '--:--',
//             lastOut: formData.lastOut || '--:--',
//             totalHours: formData.totalHours || '--:--',
//             status: formData.status,
//             shift: formData.shift
//         };

//         onAdd(newEmployee);
//         onClose();
//         // Reset form
//         setFormData({
//             name: '',
//             firstIn: '',
//             break: '',
//             lastOut: '',
//             totalHours: '',
//             status: 'present',
//             shift: 'Day Shift'
//         });
//     };

//     return (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
//             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden transform transition-all scale-100 opacity-100 flex flex-col max-h-[90vh]">

//                 {/* Header - Purple */}
//                 <div className="bg-[#9333ea] p-6 relative shrink-0 flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
//                         <User className="w-6 h-6" />
//                     </div>
//                     <div>
//                         <h2 className="text-xl font-bold text-white mb-0.5">Add New Attendance</h2>
//                         <p className="text-purple-100 text-sm">Add a new daily attendance record</p>
//                     </div>
//                     <button
//                         onClick={onClose}
//                         className="absolute right-6 top-6 text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
//                     >
//                         <X className="w-5 h-5" />
//                     </button>
//                 </div>

//                 {/* Body - Scrollable */}
//                 <div className="p-6 md:p-8 space-y-6 overflow-y-auto custom-scrollbar">

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         {/* Name */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700 block">Name</label>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
//                                     placeholder="Employee Name"
//                                 />
//                                 <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                             </div>
//                         </div>

//                         {/* First In */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700 block">First In</label>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     name="firstIn"
//                                     value={formData.firstIn}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
//                                     placeholder="00:00"
//                                 />
//                                 <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                             </div>
//                         </div>

//                         {/* Break */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700 block">Break</label>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     name="break"
//                                     value={formData.break}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
//                                     placeholder="00:00"
//                                 />
//                                 <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                             </div>
//                         </div>

//                         {/* Last Out */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700 block">Last Out</label>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     name="lastOut"
//                                     value={formData.lastOut}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
//                                     placeholder="00:00"
//                                 />
//                                 <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                             </div>
//                         </div>

//                         {/* Total */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700 block">Total</label>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     name="totalHours"
//                                     value={formData.totalHours}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
//                                     placeholder="00:00"
//                                 />
//                                 <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                             </div>
//                         </div>

//                         {/* Status */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700 block">Status</label>
//                             <div className="relative">
//                                 <select
//                                     name="status"
//                                     value={formData.status}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 appearance-none focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all cursor-pointer"
//                                 >
//                                     <option value="present">present</option>
//                                     <option value="absent">absent</option>
//                                 </select>
//                                 <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Shift - Full Width */}
//                     <div className="space-y-2">
//                         <label className="text-sm font-semibold text-gray-700 block">Shift</label>
//                         <div className="relative">
//                             <select
//                                 name="shift"
//                                 value={formData.shift}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 appearance-none focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all cursor-pointer"
//                             >
//                                 <option>Night Shift</option>
//                                 <option>Day Shift</option>
//                             </select>
//                             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//                         </div>
//                     </div>

//                 </div>

//                 {/* Footer */}
//                 <div className="p-6 border-t border-gray-100 flex items-center justify-end gap-3 shrink-0">
//                     <button
//                         onClick={handleSubmit}
//                         className="flex-1 md:flex-none px-8 py-3 bg-[#9333ea] text-white font-semibold rounded-lg hover:bg-[#7e22ce] transition-colors shadow-lg shadow-purple-200"
//                     >
//                         Add Record
//                     </button>
//                     <button
//                         onClick={onClose}
//                         className="flex-1 md:flex-none px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
//                     >
//                         Cancel
//                     </button>
//                 </div>

//             </div>
//         </div>
//     );
// };

// const EditAttendanceModal = ({ isOpen, onClose, employee, onSave }) => {
//     const [formData, setFormData] = useState(null);

//     useEffect(() => {
//         if (employee) {
//             setFormData({ ...employee });
//         }
//     }, [employee]);

//     if (!isOpen || !employee || !formData) return null;

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = () => {
//         onSave(formData);
//         onClose();
//     };

//     return (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
//             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden transform transition-all scale-100 opacity-100 flex flex-col max-h-[90vh]">

//                 {/* Header - Purple with Avatar */}
//                 <div className="bg-[#9333ea] p-6 relative shrink-0 flex items-center gap-4">
//                     <img
//                         src={employee.avatar}
//                         alt={employee.name}
//                         className="w-12 h-12 rounded-full object-cover border-2 border-white/50 shadow-sm"
//                     />
//                     <div>
//                         <h2 className="text-xl font-bold text-white mb-0.5">Edit Attendance</h2>
//                         <p className="text-purple-100 text-sm">Update details for {employee.name}</p>
//                     </div>
//                     <button
//                         onClick={onClose}
//                         className="absolute right-6 top-6 text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
//                     >
//                         <X className="w-5 h-5" />
//                     </button>
//                 </div>

//                 {/* Body - Scrollable */}
//                 <div className="p-6 md:p-8 space-y-6 overflow-y-auto custom-scrollbar">

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         {/* Name */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700 block">Name</label>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
//                                 />
//                                 <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                             </div>
//                         </div>

//                         {/* First In */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700 block">First In</label>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     name="firstIn"
//                                     value={formData.firstIn}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
//                                 />
//                                 <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                             </div>
//                         </div>

//                         {/* Break */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700 block">Break</label>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     name="break"
//                                     value={formData.break}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
//                                 />
//                                 <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                             </div>
//                         </div>

//                         {/* Last Out */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700 block">Last Out</label>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     name="lastOut"
//                                     value={formData.lastOut}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
//                                 />
//                                 <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                             </div>
//                         </div>

//                         {/* Total */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700 block">Total</label>
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     name="totalHours"
//                                     value={formData.totalHours}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
//                                 />
//                                 <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                             </div>
//                         </div>

//                         {/* Status */}
//                         <div className="space-y-2">
//                             <label className="text-sm font-semibold text-gray-700 block">Status</label>
//                             <div className="relative">
//                                 <select
//                                     name="status"
//                                     value={formData.status}
//                                     onChange={handleChange}
//                                     className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 appearance-none focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all cursor-pointer"
//                                 >
//                                     <option value="present">present</option>
//                                     <option value="absent">absent</option>
//                                 </select>
//                                 <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Shift - Full Width */}
//                     <div className="space-y-2">
//                         <label className="text-sm font-semibold text-gray-700 block">Shift</label>
//                         <div className="relative">
//                             <select
//                                 name="shift"
//                                 value={formData.shift}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 appearance-none focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all cursor-pointer"
//                             >
//                                 <option>Night Shift</option>
//                                 <option>Day Shift</option>
//                             </select>
//                             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//                         </div>
//                     </div>

//                 </div>

//                 {/* Footer */}
//                 <div className="p-6 border-t border-gray-100 flex items-center justify-end gap-3 shrink-0">
//                     <button
//                         onClick={handleSubmit}
//                         className="flex-1 md:flex-none px-8 py-3 bg-[#9333ea] text-white font-semibold rounded-lg hover:bg-[#7e22ce] transition-colors shadow-lg shadow-purple-200"
//                     >
//                         Save
//                     </button>
//                     <button
//                         onClick={onClose}
//                         className="flex-1 md:flex-none px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
//                     >
//                         Cancel
//                     </button>
//                 </div>

//             </div>
//         </div>
//     );
// };

// const DeleteConfirmationModal = ({ isOpen, onClose, onDelete, employee }) => {
//     if (!isOpen || !employee) return null;

//     return (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
//             <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm transform transition-all scale-100 opacity-100 p-6 text-center">

//                 <h2 className="text-2xl font-bold text-gray-800 mb-6 font-sans">Are you sure?</h2>

//                 <div className="space-y-3 mb-8 text-left px-2">
//                     <p className="text-gray-600 text-lg">
//                         <span className="font-medium text-gray-500">Employee Name:</span> <span className="text-gray-800">{employee.name}</span>
//                     </p>
//                     <p className="text-gray-600 text-lg">
//                         <span className="font-medium text-gray-500">First In:</span> <span className="text-gray-800">{employee.firstIn}</span>
//                     </p>
//                     <p className="text-gray-600 text-lg">
//                         <span className="font-medium text-gray-500">Last Out:</span> <span className="text-gray-800">{employee.lastOut}</span>
//                     </p>
//                 </div>

//                 <div className="flex items-center justify-center gap-4">
//                     <button
//                         onClick={() => {
//                             onDelete(employee.id);
//                             onClose();
//                         }}
//                         className="px-8 py-2.5 bg-[#c1272d] text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-sm text-base"
//                     >
//                         Delete
//                     </button>
//                     <button
//                         onClick={onClose}
//                         className="px-8 py-2.5 bg-[#0056b3] text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-sm text-base"
//                     >
//                         Cancel
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const AttendanceModals = ({
//     isAddOpen, closeAdd, onAdd,
//     isEditOpen, closeEdit, selectedEmployee, onSaveEdit,
//     isDeleteOpen, closeDelete, confirmDelete, employeeToDelete
// }) => {
//     return (
//         <>
//             <AddAttendanceModal
//                 isOpen={isAddOpen}
//                 onClose={closeAdd}
//                 onAdd={onAdd}
//             />
//             <EditAttendanceModal
//                 isOpen={isEditOpen}
//                 onClose={closeEdit}
//                 employee={selectedEmployee}
//                 onSave={onSaveEdit}
//             />
//             <DeleteConfirmationModal
//                 isOpen={isDeleteOpen}
//                 onClose={closeDelete}
//                 onDelete={confirmDelete}
//                 employee={employeeToDelete}
//             />
//         </>
//     );
// };

// export default AttendanceModals;
//--------------------------------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { X, User, Clock, ChevronDown } from 'lucide-react';

const AddAttendanceModal = ({ isOpen, onClose, onAdd }) => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        firstIn: '',
        break: '',
        lastOut: '',
        totalHours: '',
        status: 'present',
        shift: 'Day Shift'
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // Basic validation
        if (!formData.name) return;

        // Create new employee object
        const newEmployee = {
            id: Date.now(), // Simple ID generation
            name: formData.name,
            avatar: `https://i.pravatar.cc/150?u=${Date.now()}`, // Random avatar based on timestamp
            firstIn: formData.firstIn || '--:--',
            break: formData.break || '--:--',
            lastOut: formData.lastOut || '--:--',
            totalHours: formData.totalHours || '--:--',
            status: formData.status,
            shift: formData.shift
        };

        onAdd(newEmployee);
        onClose();
        // Reset form
        setFormData({
            name: '',
            firstIn: '',
            break: '',
            lastOut: '',
            totalHours: '',
            status: 'present',
            shift: 'Day Shift'
        });
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden transform transition-all scale-100 opacity-100 flex flex-col max-h-[90vh]">

                {/* Header - Purple */}
                <div className="bg-[#9333ea] p-6 relative shrink-0 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
                        <User className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white mb-0.5">Add New Attendance</h2>
                        <p className="text-purple-100 text-sm">Add a new daily attendance record</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute right-6 top-6 text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body - Scrollable */}
                <div className="p-6 md:p-8 space-y-6 overflow-y-auto custom-scrollbar">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
                                    placeholder="Employee Name"
                                />
                                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* First In */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">First In</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="firstIn"
                                    value={formData.firstIn}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
                                    placeholder="00:00"
                                />
                                <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Break */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">Break</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="break"
                                    value={formData.break}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
                                    placeholder="00:00"
                                />
                                <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Last Out */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">Last Out</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="lastOut"
                                    value={formData.lastOut}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
                                    placeholder="00:00"
                                />
                                <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Total */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">Total</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="totalHours"
                                    value={formData.totalHours}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
                                    placeholder="00:00"
                                />
                                <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Status */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">Status</label>
                            <div className="relative">
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 appearance-none focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all cursor-pointer"
                                >
                                    <option value="present">present</option>
                                    <option value="absent">absent</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Shift - Full Width */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 block">Shift</label>
                        <div className="relative">
                            <select
                                name="shift"
                                value={formData.shift}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 appearance-none focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all cursor-pointer"
                            >
                                <option>Night Shift</option>
                                <option>Day Shift</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 flex items-center justify-end gap-3 shrink-0">
                    <button
                        onClick={handleSubmit}
                        className="flex-1 md:flex-none px-8 py-3 bg-[#9333ea] text-white font-semibold rounded-lg hover:bg-[#7e22ce] transition-colors shadow-lg shadow-purple-200"
                    >
                        Add Record
                    </button>
                    <button
                        onClick={onClose}
                        className="flex-1 md:flex-none px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    );
};

const EditAttendanceModal = ({ isOpen, onClose, employee, onSave }) => {
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        if (employee) {
            setFormData({ ...employee });
        }
    }, [employee]);

    if (!isOpen || !employee || !formData) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden transform transition-all scale-100 opacity-100 flex flex-col max-h-[90vh]">

                {/* Header - Purple with Avatar */}
                <div className="bg-[#9333ea] p-6 relative shrink-0 flex items-center gap-4">
                    <img
                        src={employee.avatar}
                        alt={employee.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/50 shadow-sm"
                    />
                    <div>
                        <h2 className="text-xl font-bold text-white mb-0.5">Edit Attendance</h2>
                        <p className="text-purple-100 text-sm">Update details for {employee.name}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute right-6 top-6 text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body - Scrollable */}
                <div className="p-6 md:p-8 space-y-6 overflow-y-auto custom-scrollbar">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
                                />
                                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* First In */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">First In</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="firstIn"
                                    value={formData.firstIn}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
                                />
                                <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Break */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">Break</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="break"
                                    value={formData.break}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
                                />
                                <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Last Out */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">Last Out</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="lastOut"
                                    value={formData.lastOut}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
                                />
                                <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Total */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">Total</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="totalHours"
                                    value={formData.totalHours}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all"
                                />
                                <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Status */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">Status</label>
                            <div className="relative">
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 appearance-none focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all cursor-pointer"
                                >
                                    <option value="present">present</option>
                                    <option value="absent">absent</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Shift - Full Width */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 block">Shift</label>
                        <div className="relative">
                            <select
                                name="shift"
                                value={formData.shift}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 appearance-none focus:outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all cursor-pointer"
                            >
                                <option>Night Shift</option>
                                <option>Day Shift</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 flex items-center justify-end gap-3 shrink-0">
                    <button
                        onClick={handleSubmit}
                        className="flex-1 md:flex-none px-8 py-3 bg-[#9333ea] text-white font-semibold rounded-lg hover:bg-[#7e22ce] transition-colors shadow-lg shadow-purple-200"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="flex-1 md:flex-none px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    );
};

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete, employee }) => {
    if (!isOpen || !employee) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm transform transition-all scale-100 opacity-100 p-6 text-center">

                <h2 className="text-2xl font-bold text-gray-800 mb-6 font-sans">Are you sure?</h2>

                <div className="space-y-3 mb-8 text-left px-2">
                    <p className="text-gray-600 text-lg">
                        <span className="font-medium text-gray-500">Employee Name:</span> <span className="text-gray-800">{employee.name}</span>
                    </p>
                    <p className="text-gray-600 text-lg">
                        <span className="font-medium text-gray-500">First In:</span> <span className="text-gray-800">{employee.firstIn}</span>
                    </p>
                    <p className="text-gray-600 text-lg">
                        <span className="font-medium text-gray-500">Last Out:</span> <span className="text-gray-800">{employee.lastOut}</span>
                    </p>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={() => {
                            onDelete(employee.id);
                            onClose();
                        }}
                        className="px-8 py-2.5 bg-[#c1272d] text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-sm text-base"
                    >
                        Delete
                    </button>
                    <button
                        onClick={onClose}
                        className="px-8 py-2.5 bg-[#0056b3] text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-sm text-base"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

const AttendanceModals = ({
    isAddOpen, closeAdd, onAdd,
    isEditOpen, closeEdit, selectedEmployee, onSaveEdit,
    isDeleteOpen, closeDelete, confirmDelete, employeeToDelete
}) => {
    return (
        <>
            <AddAttendanceModal
                isOpen={isAddOpen}
                onClose={closeAdd}
                onAdd={onAdd}
            />
            <EditAttendanceModal
                isOpen={isEditOpen}
                onClose={closeEdit}
                employee={selectedEmployee}
                onSave={onSaveEdit}
            />
            <DeleteConfirmationModal
                isOpen={isDeleteOpen}
                onClose={closeDelete}
                onDelete={confirmDelete}
                employee={employeeToDelete}
            />
        </>
    );
};

export default AttendanceModals;