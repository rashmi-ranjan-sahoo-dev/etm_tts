/*
import React from 'react';
import { Home } from 'lucide-react';

const LeaveSetting = () => {
    return (
        <div className="p-6 bg-[#f8f9fe] min-h-screen">
            
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-[#333]">Leave Settings</h1>
                <div className="flex items-center text-sm text-gray-500">
                    <Home size={16} className="mr-2" />
                    <span className="mx-2">{'>'}</span>
                    <span>Leaves</span>
                    <span className="mx-2">{'>'}</span>
                    <span className="text-blue-600">Leave Settings</span>
                </div>
            </div>

          
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-[#333] mb-6 border-b pb-4">Leave Settings</h2>

                <form className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <input
                                type="text"
                                id="policyName"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="policyName"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            >
                                Leave Policy Name*
                            </label>
                        </div>
                        <div className="relative">
                            <select
                                id="leaveType"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                defaultValue=""
                            >
                                <option value="" disabled hidden></option>
                                <option value="sick">Sick Leave</option>
                                <option value="casual">Casual Leave</option>
                                <option value="annual">Annual Leave</option>
                            </select>
                            <label
                                htmlFor="leaveType"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            >
                                Leave Type*
                            </label>
                        </div>
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <input
                                type="number"
                                id="duration"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="duration"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            >
                                Leave Duration (Days)*
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type="number"
                                id="carryForward"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                defaultValue="0"
                            />
                            <label
                                htmlFor="carryForward"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            >
                                Carry Forward Limit*
                            </label>
                        </div>
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <input
                                type="number"
                                id="quota"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                defaultValue="12"
                            />
                            <label
                                htmlFor="quota"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            >
                                Leave Quota (Days)*
                            </label>
                        </div>
                        <div className="relative">
                            <select
                                id="department"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                defaultValue=""
                            >
                                <option value="" disabled hidden></option>
                                <option value="hr">HR</option>
                                <option value="engineering">Engineering</option>
                                <option value="sales">Sales</option>
                            </select>
                            <label
                                htmlFor="department"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            >
                                Select Department*
                            </label>
                        </div>
                    </div>

                   
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <select
                                id="workflow"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                defaultValue="manager"
                            >
                                <option value="" disabled hidden></option>
                                <option value="manager">Manager</option>
                                <option value="admin">Admin</option>
                                <option value="hr">HR</option>
                            </select>
                            <label
                                htmlFor="workflow"
                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            >
                                Leave Approval Workflow
                            </label>
                        </div>
                   
                        <div></div>
                    </div>

                  
                    <div className="relative">
                        <div className="absolute top-3 left-3 text-gray-500 pointer-events-none">
                            Notes (Optional)
                        </div>
                        <textarea
                            className="block w-full h-32 px-3 py-3 mt-8 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer pt-8"
                            placeholder=" "
                        ></textarea>
                    </div>

                  
                    <div className="space-y-4 mt-4">
                        <div className="flex items-center">
                            <input
                                id="encashment"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <label htmlFor="encashment" className="ml-2 text-sm text-gray-600">
                                Enable Leave Encashment
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="halfday"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <label htmlFor="halfday" className="ml-2 text-sm text-gray-600">
                                Enable Half Day Leave
                            </label>
                        </div>
                    </div>

                   
                    <div className="mt-8">
                        <button
                            type="button"
                            onClick={() => alert("Settings saved successfully!")}
                            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2.5 text-center shadow-md transition-colors duration-200"
                        >
                            Save Settings
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LeaveSetting;
*/