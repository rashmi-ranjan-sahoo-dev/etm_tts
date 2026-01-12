import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Home, MoreVertical, Clock, RefreshCw, GraduationCap, Users, UserCheck, UserPlus, Settings, Calendar, MessageSquare, CheckCircle, FileText, Umbrella, HeartPulse, UserMinus, UserX, PlusCircle, History, CheckCheck, Banknote, AlertCircle, Edit, Trash2, ArrowUp, ArrowDown, ChevronsUpDown, HardHat, BarChart2, User, Download, Printer, Filter, IdCard, Briefcase, Mail, Phone, MapPin, Search } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';


const employeesLeaveData = [
    {
        id: 1,
        name: 'John Doe',
        role: 'Software Engineer',
        department: 'Engineering',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        leaves: {
            annual: { remaining: 12, used: 10, total: 22 },
            sick: { remaining: 5, used: 5, total: 10 },
            personal: { remaining: 1, used: 4, total: 5 }
        }
    },
    {
        id: 2,
        name: 'Jane Smith',
        role: 'UX Designer',
        department: 'Design',
        image: 'https://randomuser.me/api/portraits/men/85.jpg',
        leaves: {
            annual: { remaining: 18, used: 4, total: 22 },
            sick: { remaining: 8, used: 2, total: 10 },
            personal: { remaining: 4, used: 1, total: 5 }
        }
    },
    {
        id: 3,
        name: 'Mike Johnson',
        role: 'Product Manager',
        department: 'Product',
        image: 'https://randomuser.me/api/portraits/men/65.jpg',
        leaves: {
            annual: { remaining: 7, used: 15, total: 22 },
            sick: { remaining: 2, used: 8, total: 10 },
            personal: { remaining: 3, used: 2, total: 5 }
        }
    }
];

const projectsData = [
    {
        id: 1,
        name: 'Project A',
        team: [
            { name: 'John Doe', role: 'Team Lead', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
            { name: 'Alice Smith', role: 'Developer', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
            { name: 'Bob Johnson', role: 'Designer', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
            { name: 'Charlie Brown', role: 'Tester', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
            { name: 'David Wilson', role: 'Frontend Dev', image: 'https://randomuser.me/api/portraits/men/24.jpg' },
            { name: 'Eva Green', role: 'Backend Dev', image: 'https://randomuser.me/api/portraits/women/25.jpg' },
            { name: 'Frank White', role: 'QA Engineer', image: 'https://randomuser.me/api/portraits/men/26.jpg' }
        ],
        leader: 'John Doe',
        priority: 'Medium',
        priorityIcon: ChevronsUpDown,
        priorityColor: 'text-[#9c27b0]',
        openTask: 19,
        completedTask: 10,
        status: 'Pending',
        statusClass: 'bg-[#e3f2fd] text-[#2196f3]'
    },
    {
        id: 2,
        name: 'Project B',
        team: [
            { name: 'Sarah Smith', role: 'Team Lead', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
            { name: 'David Lee', role: 'Developer', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
            { name: 'Emma Wilson', role: 'Designer', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
            { name: 'George Miller', role: 'Full Stack', image: 'https://randomuser.me/api/portraits/men/27.jpg' },
            { name: 'Hannah Davis', role: 'Designer', image: 'https://randomuser.me/api/portraits/women/28.jpg' }
        ],
        leader: 'Sarah Smith',
        priority: 'Low',
        priorityIcon: ArrowDown,
        priorityColor: 'text-[#4caf50]',
        openTask: 25,
        completedTask: 18,
        status: 'In Progress',
        statusClass: 'bg-[#f3e5f5] text-[#9c27b0]'
    },
    {
        id: 3,
        name: 'Project C',
        team: [
            { name: 'Olivia Brown', role: 'Team Lead', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
            { name: 'James Davis', role: 'Developer', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
            { name: 'Sophia Miller', role: 'Designer', image: 'https://randomuser.me/api/portraits/women/9.jpg' }
        ],
        leader: 'Olivia Brown',
        priority: 'High',
        priorityIcon: ArrowUp,
        priorityColor: 'text-[#f44336]',
        openTask: 30,
        completedTask: 25,
        status: 'Completed',
        statusClass: 'bg-[#e8f5e9] text-[#4caf50]'
    },
    {
        id: 4,
        name: 'Project D',
        team: [
            { name: 'David Martinez', role: 'Team Lead', image: 'https://randomuser.me/api/portraits/men/10.jpg' },
            { name: 'Isabella Garcia', role: 'Developer', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
            { name: 'William Rodriguez', role: 'Designer', image: 'https://randomuser.me/api/portraits/men/12.jpg' }
        ],
        leader: 'David Martinez',
        priority: 'Low',
        priorityIcon: ArrowDown,
        priorityColor: 'text-[#4caf50]',
        openTask: 15,
        completedTask: 10,
        status: 'Pending',
        statusClass: 'bg-[#e3f2fd] text-[#2196f3]'
    },
    {
        id: 5,
        name: 'Project E',
        team: [
            { name: 'Ethan Green', role: 'Team Lead', image: 'https://randomuser.me/api/portraits/women/13.jpg' },
            { name: 'Michael White', role: 'Developer', image: 'https://randomuser.me/api/portraits/men/14.jpg' },
            { name: 'Mia Thompson', role: 'Designer', image: 'https://randomuser.me/api/portraits/women/15.jpg' },
            { name: 'Alexander Hall', role: 'Tester', image: 'https://randomuser.me/api/portraits/men/22.jpg' }
        ],
        leader: 'Ethan Green',
        priority: 'Medium',
        priorityIcon: ChevronsUpDown,
        priorityColor: 'text-[#9c27b0]',
        openTask: 40,
        completedTask: 30,
        status: 'Completed',
        statusClass: 'bg-[#e8f5e9] text-[#4caf50]'
    },
    {
        id: 6,
        name: 'Project F',
        team: [
            { name: 'Jack Robinson', role: 'Team Lead', image: 'https://randomuser.me/api/portraits/men/16.jpg' },
            { name: 'Charlotte Clark', role: 'Developer', image: 'https://randomuser.me/api/portraits/women/17.jpg' },
            { name: 'Daniel Lewis', role: 'Designer', image: 'https://randomuser.me/api/portraits/men/18.jpg' }
        ],
        leader: 'Jack Robinson',
        priority: 'High',
        priorityIcon: ArrowUp,
        priorityColor: 'text-[#f44336]',
        openTask: 12,
        completedTask: 10,
        status: 'In Progress',
        statusClass: 'bg-[#f3e5f5] text-[#9c27b0]'
    },
    {
        id: 7,
        name: 'Project G',
        team: [
            { name: 'Ava Scott', role: 'Team Lead', image: 'https://randomuser.me/api/portraits/women/19.jpg' },
            { name: 'Matthew Young', role: 'Developer', image: 'https://randomuser.me/api/portraits/men/20.jpg' },
            { name: 'Amelia King', role: 'Designer', image: 'https://randomuser.me/api/portraits/women/21.jpg' },
            { name: 'Harper Wright', role: 'Tester', image: 'https://randomuser.me/api/portraits/women/23.jpg' }
        ],
        leader: 'Ava Scott',
        priority: 'Low',
        priorityIcon: ArrowDown,
        priorityColor: 'text-[#4caf50]',
        openTask: 22,
        completedTask: 14,
        status: 'Completed',
        statusClass: 'bg-[#e8f5e9] text-[#4caf50]'
    }
];

const Dashboard = () => {
    const navigate = useNavigate();
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [leaveSearch, setLeaveSearch] = useState('');
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(3);
    const [showSummaryMenu, setShowSummaryMenu] = useState(false);
    const [showAttendanceMenu, setShowAttendanceMenu] = useState(false);
    const [showHRMenu, setShowHRMenu] = useState(false);
    const [showRecentMenu, setShowRecentMenu] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);


    // Combine existing leave data with all project members
    const allEmployeesLeaveData = useMemo(() => {
        const allEmployees = [...employeesLeaveData];
        // Track names to prevent duplicates (start with initial list)
        const existingNames = new Set(allEmployees.map(e => e.name));

        projectsData.forEach(project => {
            project.team.forEach(member => {
                // Skip if already in list (either from initial or added from previous project loop)
                if (existingNames.has(member.name)) return;

                // Add to set to prevent future duplicates
                existingNames.add(member.name);

                // Generate mock leave data for project members not in the initial list
                const totalAnnual = 22;
                const usedAnnual = Math.floor(Math.random() * 10);
                const totalSick = 10;
                const usedSick = Math.floor(Math.random() * 5);
                const totalPersonal = 5;
                const usedPersonal = Math.floor(Math.random() * 3);

                const depts = ['Engineering', 'Design', 'Marketing', 'Product', 'Sales', 'HR', 'Finance', 'Operations', 'Others'];
                const randomDept = depts[Math.floor(Math.random() * depts.length)];

                // Override roles based on assigned department to ensure realism
                let role = member.role;
                if (randomDept === 'HR') {
                    // Force HR roles, ensuring no Developers end up in HR
                    role = ['HR Analyst', 'HR Executive', 'Recruiter', 'HR Manager', 'Talent Acquisition Specialist'][Math.floor(Math.random() * 5)];
                } else if (randomDept === 'Finance') {
                    role = ['Accountant', 'Financial Analyst', 'Auditor', 'Finance Manager', 'Payroll Specialist'][Math.floor(Math.random() * 5)];
                } else if (randomDept === 'Operations') {
                    role = ['Operations Manager', 'Coordinator', 'Logistics Specialist', 'Supply Chain Analyst', 'Project Coordinator'][Math.floor(Math.random() * 5)];
                } else if (randomDept === 'Sales') {
                    role = ['Sales Representative', 'Account Executive', 'Sales Manager', 'Business Development Rep'][Math.floor(Math.random() * 4)];
                } else if (randomDept === 'Marketing') {
                    role = ['Marketing Manager', 'SEO Specialist', 'Content Strategist', 'Brand Manager', 'Digital Marketer'][Math.floor(Math.random() * 5)];
                } else if (randomDept === 'Others') {
                    role = ['Office Manager', 'Legal Counsel', 'Receptionist', 'Facilities Manager', 'Admin Assistant'][Math.floor(Math.random() * 5)];
                } else if (randomDept === 'Engineering') {
                    role = ['Frontend Developer', 'Backend Developer', 'Full Stack Engineer', 'DevOps Engineer', 'QA Engineer', 'Technical Lead'][Math.floor(Math.random() * 6)];
                } else if (randomDept === 'Design') {
                    role = ['UI Designer', 'UX Researcher', 'Product Designer', 'Graphic Designer', 'Creative Director'][Math.floor(Math.random() * 5)];
                } else if (randomDept === 'Product') {
                    role = ['Product Manager', 'Product Owner', 'Business Analyst', 'Scrum Master'][Math.floor(Math.random() * 4)];
                }

                allEmployees.push({
                    id: Math.floor(Math.random() * 100000) + 100, // Random ID to avoid collision
                    name: member.name,
                    role: role,
                    department: randomDept,
                    image: member.image,
                    leaves: {
                        annual: { remaining: totalAnnual - usedAnnual, used: usedAnnual, total: totalAnnual },
                        sick: { remaining: totalSick - usedSick, used: usedSick, total: totalSick },
                        personal: { remaining: totalPersonal - usedPersonal, used: usedPersonal, total: totalPersonal }
                    }
                });
            });
        });

        return allEmployees;
    }, []);

    const handleNavigateToEmployee = (employeeName) => {
        const employee = allEmployeesLeaveData.find(e => e.name === employeeName);
        if (employee) {
            navigate('/admin/employee', { state: { leader: employee } });
        }
    };

    const selectedEmployee = allEmployeesLeaveData.find(emp => emp.id === selectedEmployeeId) || allEmployeesLeaveData[0];

    const pieData = [
        { name: 'Engineering', value: 78, color: '#2196f3' },
        { name: 'Operations', value: 65, color: '#ff9800' },
        { name: 'Marketing', value: 42, color: '#ffc107' },
        { name: 'Finance', value: 30, color: '#9c27b0' },
        { name: 'Others', value: 26, color: '#9e9e9e' },
        { name: 'HR', value: 15, color: '#4caf50' },
    ];

    // Mock data for sparklines
    const timeToHireData = [
        { value: 15 }, { value: 18 }, { value: 16 }, { value: 20 }, { value: 18 }, { value: 17 }
    ];
    const turnoverData = [
        { value: 3.5 }, { value: 3.8 }, { value: 4.0 }, { value: 3.7 }, { value: 4.1 }, { value: 4.2 }
    ];
    const trainingData = [
        { value: 82 }, { value: 85 }, { value: 84 }, { value: 86 }, { value: 85 }, { value: 87 }
    ];

    // Mock data for weekly attendance
    const attendanceData = [
        { name: 'Mon', Present: 220, Absent: 10, Late: 5 },
        { name: 'Tue', Present: 215, Absent: 12, Late: 8 },
        { name: 'Wed', Present: 225, Absent: 8, Late: 4 },
        { name: 'Thu', Present: 218, Absent: 11, Late: 6 },
        { name: 'Fri', Present: 210, Absent: 15, Late: 10 },
    ];

    return (
        <div className="p-[5px] m-0 relative w-full max-w-full overflow-x-hidden box-border max-[480px]:p-[10px]">
            {/* Header */}
            <div className="flex justify-between items-center mb-[25px] max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-[5px] max-[480px]:mb-[15px]">
                <h1 className="text-[20px] font-semibold text-[#333] max-[480px]:text-[18px]">HR Dashboard</h1>
            </div>

            {/* Top Metrics Cards */}
            <div className="grid grid-cols-3 gap-5 mb-[25px] max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
                <div className="bg-white rounded-[10px] p-5 shadow-[0_2px_5px_rgba(0,0,0,0.03)] relative overflow-hidden">
                    <div className="flex items-start relative">
                        <div className="w-[45px] h-[45px] rounded-[12px] flex items-center justify-center mr-[15px] bg-[#e8f5e9] flex-shrink-0">
                            <Clock size={20} className="text-[#4caf50]" />
                        </div>
                        <div className="flex-1">
                            <span className="text-[13px] font-medium text-[#555] block mb-[5px]">Average Time to Hire</span>
                            <div className="flex items-baseline gap-[5px]">
                                <span className="text-[24px] font-bold text-[#333]">18</span>
                                <span className="text-[14px] text-[#666] font-medium">days</span>
                            </div>
                            <span className="text-[11px] text-[#888] block mt-[2px]">vs last month</span>
                        </div>
                        <span className="text-[12px] font-semibold absolute right-0 top-[5px] text-[#f44336]">-2.5%</span>
                    </div>
                    <SparkLine data={timeToHireData} color="#4caf50" message="Average time from job posting to offer acceptance" />
                </div>

                <div className="bg-white rounded-[10px] p-5 shadow-[0_2px_5px_rgba(0,0,0,0.03)] relative overflow-hidden">
                    <div className="flex items-start relative">
                        <div className="w-[45px] h-[45px] rounded-[12px] flex items-center justify-center mr-[15px] bg-[#ffebee] flex-shrink-0">
                            <RefreshCw size={20} className="text-[#f44336]" />
                        </div>
                        <div className="flex-1">
                            <span className="text-[13px] font-medium text-[#555] block mb-[5px]">Employee Turnover Rate</span>
                            <div className="flex items-baseline gap-[5px]">
                                <span className="text-[24px] font-bold text-[#333]">4.2</span>
                                <span className="text-[14px] text-[#666] font-medium">%</span>
                            </div>
                            <span className="text-[11px] text-[#888] block mt-[2px]">vs last quarter</span>
                        </div>
                        <span className="text-[12px] font-semibold absolute right-0 top-[5px] text-[#4caf50]">+0.8%</span>
                    </div>
                    <SparkLine data={turnoverData} color="#f44336" message="Percentage of employees leaving within a given period" />
                </div>

                <div className="bg-white rounded-[10px] p-5 shadow-[0_2px_5px_rgba(0,0,0,0.03)] relative overflow-hidden">
                    <div className="flex items-start relative">
                        <div className="w-[45px] h-[45px] rounded-[12px] flex items-center justify-center mr-[15px] bg-[#e3f2fd] flex-shrink-0">
                            <GraduationCap size={20} className="text-[#2196f3]" />
                        </div>
                        <div className="flex-1">
                            <span className="text-[13px] font-medium text-[#555] block mb-[5px]">Training Completion Rate</span>
                            <div className="flex items-baseline gap-[5px]">
                                <span className="text-[24px] font-bold text-[#333]">87</span>
                                <span className="text-[14px] text-[#666] font-medium">%</span>
                            </div>
                            <span className="text-[11px] text-[#888] block mt-[2px]">vs last quarter</span>
                        </div>
                        <span className="text-[12px] font-semibold absolute right-0 top-[5px] text-[#4caf50]">+5.3%</span>
                    </div>
                    <SparkLine data={trainingData} color="#2196f3" message="Percentage of employees reducing training requirements" />
                </div>
            </div>



            {/* Content Grid: HR Summary + Recent Activity (Left) | Leave Balance (Right) */}
            <div className="grid grid-cols-[2fr_1fr] gap-[25px] mb-[25px] max-[768px]:grid-cols-1">
                {/* Left Column */}
                <div className="flex flex-col gap-[25px]">
                    {/* Employee Summary (Moved to Left Column) */}
                    <div className="bg-white rounded-[10px] p-[20px_40px] shadow-[0_2px_5px_rgba(0,0,0,0.03)] max-[480px]:p-[15px]">
                        <div className="flex justify-between items-center mb-[20px] max-[480px]:mb-[15px]">
                            <h3 className="text-[16px] font-semibold text-[#333] max-[480px]:text-[15px]">Employee Summary</h3>
                            <div className="relative">
                                <button
                                    className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 cursor-pointer text-[#888] hover:text-[#333]"
                                    onClick={() => setShowSummaryMenu(!showSummaryMenu)}
                                >
                                    <MoreVertical size={18} />
                                </button>
                                {showSummaryMenu && (
                                    <div className="absolute right-0 top-[30px] bg-white rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-[8px] w-[150px] z-50 animate-in fade-in zoom-in-95 duration-200">
                                        <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                                            <RefreshCw size={14} /> Refresh
                                        </button>
                                        <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                                            <Download size={14} /> Export
                                        </button>
                                        <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                                            <Printer size={14} /> Print
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
                            {/* Left Column: Stats Cards */}
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
                                {/* Total Employees */}
                                <div
                                    onClick={() => navigate('/admin/employee')}
                                    className="bg-[#fff] border border-[#f0f0f0] rounded-[10px] p-[15px] flex items-center gap-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.02)] cursor-pointer hover:shadow-md transition-all"
                                >
                                    <div className="w-[50px] h-[40px] rounded-full bg-[#2196f3] flex items-center justify-center text-white shadow-sm">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <span className="text-[28px] font-bold text-[#333] block leading-none mb-[5px]">256</span>
                                        <span className="text-[13px] text-[#666] font-medium">Total Employees</span>
                                    </div>
                                </div>
                                {/* Active Employees */}
                                <div
                                    onClick={() => navigate('/admin/employee', { state: { status: 'Active' } })}
                                    className="bg-[#fff] border border-[#f0f0f0] rounded-[10px] p-[15px] flex items-center gap-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.02)] cursor-pointer hover:shadow-md transition-all"
                                >
                                    <div className="w-[50px] h-[40px] rounded-full bg-[#4caf50] flex items-center justify-center text-white shadow-sm">
                                        <UserCheck size={24} />
                                    </div>
                                    <div>
                                        <span className="text-[28px] font-bold text-[#333] block leading-none mb-[5px]">235</span>
                                        <span className="text-[13px] text-[#666] font-medium">Active Employees</span>
                                    </div>
                                </div>
                                {/* Inactive Employee */}
                                <div
                                    onClick={() => navigate('/admin/employee', { state: { status: 'Inactive' } })}
                                    className="bg-[#fff] border border-[#f0f0f0] rounded-[10px] p-[15px] flex items-center gap-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.02)] cursor-pointer hover:shadow-md transition-all"
                                >
                                    <div className="w-[55px] h-[35px] rounded-full bg-[#f44336] flex items-center justify-center text-white shadow-sm">
                                        <UserX size={23} />
                                    </div>
                                    <div>
                                        <span className="text-[28px] font-bold text-[#333] block leading-none mb-[5px]">130</span>
                                        <span className="text-[13px] text-[#666] font-medium">Inactive Employees</span>
                                    </div>
                                </div>
                                {/* Contractors */}
                                <div
                                    onClick={() => navigate('/admin/employee', { state: { type: 'Contract' } })}
                                    className="bg-[#fff] border border-[#f0f0f0] rounded-[10px] p-[15px] flex items-center gap-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.02)] cursor-pointer hover:shadow-md transition-all"
                                >
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#ff9800] flex items-center justify-center text-white shadow-sm">
                                        <HardHat size={23} />
                                    </div>
                                    <div>
                                        <span className="text-[28px] font-bold text-[#333] block leading-none mb-[5px]">21</span>
                                        <span className="text-[13px] text-[#666] font-medium">Contractors</span>
                                    </div>
                                </div>
                                {/* All Employees Leaves */}
                                <div
                                    onClick={() => navigate('/admin/all-employees-leave')}
                                    className="bg-[#fff] border border-[#f0f0f0] rounded-[10px] p-[15px] flex items-center gap-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.02)] cursor-pointer hover:shadow-md transition-all"
                                >
                                    <div className="w-[45px] h-[35px] rounded-full bg-[#673ab7] flex items-center justify-center text-white shadow-sm">
                                        <Umbrella size={24} />
                                    </div>
                                    <div>
                                        <span className="text-[28px] font-bold text-[#333] block leading-none mb-[5px]">50</span>
                                        <span className="text-[13px] text-[#666] font-medium">All Employees Leaves</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Pie Chart */}
                            <div className="flex-1 min-h-[250px] relative">
                                <h4 className="text-[14px] font-medium text-[#555] text-center mb-[5px]">Department Distribution</h4>
                                <ResponsiveContainer width="100%" height={250}>
                                    <PieChart>
                                        <Pie
                                            data={pieData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={0}
                                            outerRadius={80}
                                            dataKey="value"
                                        >
                                            {pieData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" strokeWidth={2} />
                                            ))}
                                        </Pie>
                                        <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                        <Legend verticalAlign="bottom" height={36} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Department Details Breakdown (Added below the flex container to span full width if needed, or keep inside) */}
                        {/* Actually, user wanted 3 distinct areas. Let's put the grid below the flex split */}
                        <div className="mt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
                            {/* Present */}

                            {/* HR */}
                            <div
                                onClick={() => navigate('/admin/employee', { state: { dept: 'HR' } })}
                                className="bg-[#fafafa] rounded-[8px] p-[12px_15px] border-l-[4px] border-[#4caf50] flex justify-between items-center cursor-pointer hover:bg-[#f0f0f0] transition-colors group"
                            >
                                <span className="text-[13px] font-semibold text-[#333] group-hover:text-[#4caf50] transition-colors">HR</span>
                                <div className="flex gap-[20px]">
                                    <span className="text-[13px] font-bold text-[#333]">15</span>
                                    <span className="text-[12px] text-[#666] w-[40px] text-right">5.9%</span>
                                </div>
                            </div>
                            {/* Engineering */}
                            <div
                                onClick={() => navigate('/admin/employee', { state: { dept: 'Engineering' } })}
                                className="bg-[#fafafa] rounded-[8px] p-[12px_15px] border-l-[4px] border-[#2196f3] flex justify-between items-center cursor-pointer hover:bg-[#f0f0f0] transition-colors group"
                            >
                                <span className="text-[13px] font-semibold text-[#333] group-hover:text-[#2196f3] transition-colors">Engineering</span>
                                <div className="flex gap-[20px]">
                                    <span className="text-[13px] font-bold text-[#333]">78</span>
                                    <span className="text-[12px] text-[#666] w-[40px] text-right">30.5%</span>
                                </div>
                            </div>

                            {/* Marketing */}
                            <div
                                onClick={() => navigate('/admin/employee', { state: { dept: 'Marketing' } })}
                                className="bg-[#fafafa] rounded-[8px] p-[12px_15px] border-l-[4px] border-[#ffc107] flex justify-between items-center cursor-pointer hover:bg-[#f0f0f0] transition-colors group"
                            >
                                <span className="text-[13px] font-semibold text-[#333] group-hover:text-[#ffc107] transition-colors">Marketing</span>
                                <div className="flex gap-[20px]">
                                    <span className="text-[13px] font-bold text-[#333]">42</span>
                                    <span className="text-[12px] text-[#666] w-[40px] text-right">16.4%</span>
                                </div>
                            </div>
                            {/* Finance */}
                            <div
                                onClick={() => navigate('/admin/employee', { state: { dept: 'Finance' } })}
                                className="bg-[#fafafa] rounded-[8px] p-[12px_15px] border-l-[4px] border-[#9c27b0] flex justify-between items-center cursor-pointer hover:bg-[#f0f0f0] transition-colors group"
                            >
                                <span className="text-[13px] font-semibold text-[#333] group-hover:text-[#9c27b0] transition-colors">Finance</span>
                                <div className="flex gap-[20px]">
                                    <span className="text-[13px] font-bold text-[#333]">30</span>
                                    <span className="text-[12px] text-[#666] w-[40px] text-right">11.7%</span>
                                </div>
                            </div>
                            {/* Operations */}
                            <div
                                onClick={() => navigate('/admin/employee', { state: { dept: 'Operations' } })}
                                className="bg-[#fafafa] rounded-[8px] p-[12px_15px] border-l-[4px] border-[#ff9800] flex justify-between items-center cursor-pointer hover:bg-[#f0f0f0] transition-colors group"
                            >
                                <span className="text-[13px] font-semibold text-[#333] group-hover:text-[#ff9800] transition-colors">Operations</span>
                                <div className="flex gap-[20px]">
                                    <span className="text-[13px] font-bold text-[#333]">65</span>
                                    <span className="text-[12px] text-[#666] w-[40px] text-right">25.4%</span>
                                </div>
                            </div>
                            {/* Others */}
                            <div
                                onClick={() => navigate('/admin/employee', { state: { dept: 'Others' } })}
                                className="bg-[#fafafa] rounded-[8px] p-[12px_15px] border-l-[4px] border-[#9e9e9e] flex justify-between items-center cursor-pointer hover:bg-[#f0f0f0] transition-colors group"
                            >
                                <span className="text-[13px] font-semibold text-[#333] group-hover:text-[#9e9e9e] transition-colors">Others</span>
                                <div className="flex gap-[20px]">
                                    <span className="text-[13px] font-bold text-[#333]">26</span>
                                    <span className="text-[12px] text-[#666] w-[40px] text-right">10.2%</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* HR Dashboard Summary */}
                    <div className="bg-white rounded-[10px] p-[20px_40px] shadow-[0_2px_5px_rgba(0,0,0,0.03)] max-[480px]:p-[15px]">
                        <div className="flex justify-between items-center mb-[20px] max-[480px]:mb-[15px]">
                            <h3 className="text-[16px] font-semibold text-[#333] max-[480px]:text-[15px]">HR Dashboard Summary</h3>
                            <div className="relative">
                                <button
                                    className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 cursor-pointer text-[#888] hover:text-[#333] transition-colors"
                                    onClick={() => setShowHRMenu(!showHRMenu)}
                                >
                                    <MoreVertical size={18} />
                                </button>
                                {showHRMenu && (
                                    <div className="absolute right-0 top-[30px] bg-white rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-[8px] w-[150px] z-50 animate-in fade-in zoom-in-95 duration-200">
                                        <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                                            <PlusCircle size={14} /> Add
                                        </button>
                                        <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#aaa] cursor-not-allowed text-left transition-colors" disabled>
                                            <Trash2 size={14} /> Delete
                                        </button>
                                        <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                                            <RefreshCw size={14} /> Refresh
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
                            {/* Left Column: Key Stats */}
                            <div className="flex-1 flex flex-col justify-center gap-[30px]">
                                <div
                                    onClick={() => navigate('/admin/employee')}
                                    className="cursor-pointer hover:opacity-80 transition-opacity"
                                >
                                    <span className="text-[28px] font-bold text-[#333] block mb-[5px]">156</span>
                                    <span className="text-[16px] font-medium text-[#4caf50] block mb-[5px]">Total Employees</span>
                                    <p className="text-[13px] text-[#666] leading-[1.5]">Current active employees across all departments with complete profiles and documentation.</p>
                                </div>
                                <div>
                                    <span className="text-[28px] font-bold text-[#333] block mb-[5px]">92%</span>
                                    <span className="text-[16px] font-medium text-[#ff9800] block mb-[5px]">Employee Satisfaction</span>
                                    <p className="text-[13px] text-[#666] leading-[1.5]">Based on the latest quarterly employee satisfaction survey results.</p>
                                </div>
                            </div>

                            {/* Right Column: Department Distribution */}
                            <div className="flex-1">
                                <h4 className="text-[14px] font-medium text-[#333] mb-[20px]">Department Distribution</h4>
                                <div className="flex flex-col gap-[15px]">
                                    {/* Engineering */}
                                    <div className="flex items-center text-[13px]">
                                        <span className="w-[80px] text-[#999] font-medium">Engineering</span>
                                        <div className="flex-1 h-[4px] bg-[#f0f0f0] rounded-[2px] mx-[15px] relative">
                                            <div className="absolute left-0 top-0 h-full bg-[#2196f3] rounded-[2px]" style={{ width: '80%' }}></div>
                                        </div>
                                        <span className="w-[30px] text-right font-bold text-[#333]">42</span>
                                    </div>
                                    {/* Sales */}
                                    <div className="flex items-center text-[13px]">
                                        <span className="w-[80px] text-[#999] font-medium">Sales</span>
                                        <div className="flex-1 h-[4px] bg-[#f0f0f0] rounded-[2px] mx-[15px] relative">
                                            <div className="absolute left-0 top-0 h-full bg-[#00e676] rounded-[2px]" style={{ width: '70%' }}></div>
                                        </div>
                                        <span className="w-[30px] text-right font-bold text-[#333]">36</span>
                                    </div>
                                    {/* Marketing */}
                                    <div className="flex items-center text-[13px]">
                                        <span className="w-[80px] text-[#999] font-medium">Marketing</span>
                                        <div className="flex-1 h-[4px] bg-[#f0f0f0] rounded-[2px] mx-[15px] relative">
                                            <div className="absolute left-0 top-0 h-full bg-[#2196f3] rounded-[2px]" style={{ width: '50%' }}></div>
                                        </div>
                                        <span className="w-[30px] text-right font-bold text-[#333]">25</span>
                                    </div>
                                    {/* Finance */}
                                    <div className="flex items-center text-[13px]">
                                        <span className="w-[80px] text-[#999] font-medium">Finance</span>
                                        <div className="flex-1 h-[4px] bg-[#f0f0f0] rounded-[2px] mx-[15px] relative">
                                            <div className="absolute left-0 top-0 h-full bg-[#ffc107] rounded-[2px]" style={{ width: '40%' }}></div>
                                        </div>
                                        <span className="w-[30px] text-right font-bold text-[#333]">20</span>
                                    </div>
                                    {/* HR */}
                                    <div className="flex items-center text-[13px]">
                                        <span className="w-[80px] text-[#999] font-medium">HR</span>
                                        <div className="flex-1 h-[4px] bg-[#f0f0f0] rounded-[2px] mx-[15px] relative">
                                            <div className="absolute left-0 top-0 h-full bg-[#f44336] rounded-[2px]" style={{ width: '30%' }}></div>
                                        </div>
                                        <span className="w-[30px] text-right font-bold text-[#333]">14</span>
                                    </div>
                                    {/* Operations */}
                                    <div className="flex items-center text-[13px]">
                                        <span className="w-[80px] text-[#999] font-medium">Operations</span>
                                        <div className="flex-1 h-[4px] bg-[#f0f0f0] rounded-[2px] mx-[15px] relative">
                                            <div className="absolute left-0 top-0 h-full bg-[#1565c0] rounded-[2px]" style={{ width: '35%' }}></div>
                                        </div>
                                        <span className="w-[30px] text-right font-bold text-[#333]">19</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activities Section */}
                    <div className="bg-white rounded-[10px] p-[20px] shadow-[0_2px_5px_rgba(0,0,0,0.03)] h-[400px] flex flex-col">
                        <div className="flex justify-between items-start mb-[20px] shrink-0 max-[480px]:flex-col max-[480px]:gap-[10px]">
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#333] mb-[2px]">Recent Activities</h3>
                                <p className="text-[12px] text-[#888]">Latest HR activities and notifications</p>
                            </div>
                            <div className="flex gap-[10px] items-center max-[480px]:self-end">
                                <div className="relative group">
                                    <div className="w-[30px] h-[30px] rounded-full bg-[#f5f5f5] flex items-center justify-center cursor-pointer hover:bg-[#e0e0e0] transition-colors">
                                        <CheckCheck size={16} className="text-[#555]" />
                                    </div>
                                    <div className="absolute top-[35px] right-0 bg-[#333] text-white text-[10px] py-[4px] px-[8px] rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-sm font-medium">
                                        Mark all as read
                                    </div>
                                </div>
                                <div className="relative">
                                    <button
                                        className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 cursor-pointer text-[#888] hover:text-[#333]"
                                        onClick={() => setShowRecentMenu(!showRecentMenu)}
                                    >
                                        <MoreVertical size={18} />
                                    </button>
                                    {showRecentMenu && (
                                        <div className="absolute right-0 top-[30px] bg-white rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-[8px] w-[180px] z-50 animate-in fade-in zoom-in-95 duration-200">
                                            <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                                                <Filter size={14} /> Filter Activities
                                            </button>
                                            <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                                                <RefreshCw size={14} /> Refresh
                                            </button>
                                            <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                                                <Settings size={14} /> Notification Settings
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto custom-scrollbar pr-[5px]">
                            <div className="relative pl-[10px]">
                                {/* Vertical Line */}
                                <div className="absolute left-[24px] top-[10px] bottom-[10px] w-[2px] bg-[#f0f0f0]"></div>

                                <div className="flex flex-col gap-[25px]">
                                    {/* Activity 1 */}
                                    <div className="relative flex gap-[20px] items-start">
                                        <div className="relative z-10 w-[32px] h-[32px] rounded-full bg-[#ff9800] text-white flex items-center justify-center shrink-0 border-[2px] border-white shadow-sm">
                                            <Calendar size={16} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-[4px]">
                                                <h4 className="text-[14px] font-semibold text-[#333]">Leave Request Approved <span className="bg-[#e8f5e9] text-[#4caf50] text-[10px] px-[6px] py-[2px] rounded-[4px] ml-[5px] font-medium">approved</span></h4>
                                                <span className="text-[11px] text-[#999] whitespace-nowrap">1 day ago</span>
                                            </div>
                                            <p className="text-[13px] text-[#666] mb-[8px] leading-relaxed">Annual leave request has been approved by HR Manager</p>
                                            <div className="flex items-center gap-[8px]">
                                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-[20px] h-[20px] rounded-full" />
                                                <span className="text-[12px] font-medium text-[#555]">John Doe</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Activity 2 */}
                                    <div className="relative flex gap-[20px] items-start">
                                        <div className="relative z-10 w-[32px] h-[32px] rounded-full bg-[#4caf50] text-white flex items-center justify-center shrink-0 border-[2px] border-white shadow-sm">
                                            <UserPlus size={16} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-[4px]">
                                                <h4 className="text-[14px] font-semibold text-[#333]">New Employee Onboarded <span className="bg-[#e3f2fd] text-[#2196f3] text-[10px] px-[6px] py-[2px] rounded-[4px] ml-[5px] font-medium">completed</span></h4>
                                                <span className="text-[11px] text-[#999] whitespace-nowrap">1 day ago</span>
                                            </div>
                                            <p className="text-[13px] text-[#666] mb-[8px] leading-relaxed">New employee has completed onboarding process</p>
                                            <div className="flex items-center gap-[8px]">
                                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-[20px] h-[20px] rounded-full" />
                                                <span className="text-[12px] font-medium text-[#555]">Emily Davis</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Activity 3 */}
                                    <div className="relative flex gap-[20px] items-start">
                                        <div className="relative z-10 w-[32px] h-[32px] rounded-full bg-[#9c27b0] text-white flex items-center justify-center shrink-0 border-[2px] border-white shadow-sm">
                                            <MessageSquare size={16} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-[4px]">
                                                <h4 className="text-[14px] font-semibold text-[#333]">Performance Review Scheduled <span className="bg-[#fff3e0] text-[#ff9800] text-[10px] px-[6px] py-[2px] rounded-[4px] ml-[5px] font-medium">pending</span></h4>
                                                <span className="text-[11px] text-[#999] whitespace-nowrap">2 days ago</span>
                                            </div>
                                            <p className="text-[13px] text-[#666] mb-[8px] leading-relaxed">Quarterly performance review has been scheduled</p>
                                            <div className="flex items-center gap-[8px]">
                                                <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="User" className="w-[20px] h-[20px] rounded-full" />
                                                <span className="text-[12px] font-medium text-[#555]">Michael Wilson</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Activity 4 - Attendance Irregularity */}
                                    <div className="relative flex gap-[20px] items-start">
                                        <div className="relative z-10 w-[32px] h-[32px] rounded-full bg-[#f44336] text-white flex items-center justify-center shrink-0 border-[2px] border-white shadow-sm">
                                            <Clock size={16} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-[4px]">
                                                <h4 className="text-[14px] font-semibold text-[#333]">Attendance Irregularity <span className="bg-[#fff3e0] text-[#ff9800] text-[10px] px-[6px] py-[2px] rounded-[4px] ml-[5px] font-medium">pending</span></h4>
                                                <span className="text-[11px] text-[#999] whitespace-nowrap">3 days ago</span>
                                            </div>
                                            <p className="text-[13px] text-[#666] mb-[8px] leading-relaxed">Late arrival reported for the third time this month</p>
                                            <div className="flex items-center gap-[8px]">
                                                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-[20px] h-[20px] rounded-full" />
                                                <span className="text-[12px] font-medium text-[#555]">Sarah Williams</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Activity 5 - Payroll Processing Complete */}
                                    <div className="relative flex gap-[20px] items-start">
                                        <div className="relative z-10 w-[32px] h-[32px] rounded-full bg-[#2196f3] text-white flex items-center justify-center shrink-0 border-[2px] border-white shadow-sm">
                                            <Banknote size={16} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-[4px]">
                                                <h4 className="text-[14px] font-semibold text-[#333]">Payroll Processing Complete <span className="bg-[#e3f2fd] text-[#2196f3] text-[10px] px-[6px] py-[2px] rounded-[4px] ml-[5px] font-medium">completed</span></h4>
                                                <span className="text-[11px] text-[#999] whitespace-nowrap">5 days ago</span>
                                            </div>
                                            <p className="text-[13px] text-[#666] mb-[8px] leading-relaxed">Monthly payroll has been processed and approved</p>
                                            <div className="flex items-center gap-[8px]">
                                                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User" className="w-[20px] h-[20px] rounded-full" />
                                                <span className="text-[12px] font-medium text-[#555]">David Brown</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Activity 6 - Training Program Completed */}
                                    <div className="relative flex gap-[20px] items-start">
                                        <div className="relative z-10 w-[32px] h-[32px] rounded-full bg-[#009688] text-white flex items-center justify-center shrink-0 border-[2px] border-white shadow-sm">
                                            <GraduationCap size={16} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-[4px]">
                                                <h4 className="text-[14px] font-semibold text-[#333]">Training Program Completed <span className="bg-[#e3f2fd] text-[#2196f3] text-[10px] px-[6px] py-[2px] rounded-[4px] ml-[5px] font-medium">completed</span></h4>
                                                <span className="text-[11px] text-[#999] whitespace-nowrap">7 days ago</span>
                                            </div>
                                            <p className="text-[13px] text-[#666] mb-[8px] leading-relaxed">Successfully completed the leadership training program</p>
                                            <div className="flex items-center gap-[8px]">
                                                <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="User" className="w-[20px] h-[20px] rounded-full" />
                                                <span className="text-[12px] font-medium text-[#555]">Jane Smith</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-[#f0f0f0] mt-[auto] pt-[15px] text-center shrink-0">
                            <span className="text-[13px] font-semibold text-[#2196f3] cursor-pointer hover:underline">View All Activities</span>
                        </div>
                    </div>


                </div>

                {/* Right Column: Attendance Overview */}
                <div className="flex flex-col gap-[25px]">
                    <div className="bg-white rounded-[10px] p-[20px] shadow-[0_2px_5px_rgba(0,0,0,0.03)] flex flex-col">
                        <div className="flex justify-between items-center mb-[20px]">
                            <h3 className="text-[16px] font-semibold text-[#333]">Attendance Overview</h3>
                            <div className="relative">
                                <button
                                    className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 cursor-pointer text-[#888] hover:text-[#333] transition-colors"
                                    onClick={() => setShowAttendanceMenu(!showAttendanceMenu)}
                                >
                                    <MoreVertical size={18} />
                                </button>
                                {showAttendanceMenu && (
                                    <div className="absolute right-0 top-[30px] bg-white rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-[8px] w-[150px] z-50 animate-in fade-in zoom-in-95 duration-200">
                                        <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                                            <RefreshCw size={14} /> Refresh
                                        </button>
                                        <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                                            <Download size={14} /> Export
                                        </button>
                                        <button className="w-full flex items-center gap-[10px] px-[15px] py-[8px] text-[13px] text-[#555] hover:bg-[#f5f5f5] text-left transition-colors">
                                            <Printer size={14} /> Print
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Today's Attendance Stats */}
                        <div className="mb-[25px]">
                            <h4 className="text-[13px] font-medium text-[#555] mb-[15px]">Today's Attendance</h4>
                            <div className="grid grid-cols-2 gap-[10px]">
                                {/* Present */}
                                <div
                                    onClick={() => navigate('/admin/today-attendance', { state: { status: 'Present' } })}
                                    className="bg-[#4caf50] rounded-[8px] p-[15px] flex flex-col items-center justify-center text-white shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                                >
                                    <span className="text-[24px] font-bold mb-[2px]">215</span>
                                    <span className="text-[12px] font-medium opacity-90 mb-[2px]">Present</span>
                                    <span className="text-[10px] opacity-75">84.0%</span>
                                </div>
                                {/* Absent */}
                                <div
                                    onClick={() => navigate('/admin/today-attendance', { state: { status: 'Absent' } })}
                                    className="bg-[#f44336] rounded-[8px] p-[15px] flex flex-col items-center justify-center text-white shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
                                >
                                    <span className="text-[24px] font-bold mb-[2px]">12</span>
                                    <span className="text-[12px] font-medium opacity-90 mb-[2px]">Absent</span>
                                    <span className="text-[10px] opacity-75">4.7%</span>
                                </div>

                            </div>
                        </div>

                        {/* Weekly Attendance Chart */}
                        <div className="flex-1 mb-[20px] min-h-[80px]">
                            <div className="flex justify-between items-center mb-[15px]">
                                <h4 className="text-[13px] font-medium text-[#555]">Weekly Attendance</h4>
                                <div className="flex items-center gap-[10px] text-[10px] text-[#666]">
                                    <div className="flex items-center gap-[4px]"><span className="w-[8px] h-[8px] bg-[#4caf50] rounded-full"></span> Present</div>
                                    <div className="flex items-center gap-[4px]"><span className="w-[8px] h-[8px] bg-[#f44336] rounded-full"></span> Absent</div>
                                    <div className="flex items-center gap-[4px]"><span className="w-[8px] h-[8px] bg-[#ff9800] rounded-full"></span> Late</div>
                                </div>
                            </div>

                            <ResponsiveContainer width="100%" height={180}>
                                <BarChart data={attendanceData} barSize={28} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#888' }} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#888' }} />
                                    <Tooltip
                                        cursor={{ fill: 'transparent' }}
                                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                                        itemStyle={{ fontSize: '12px', padding: '2px 0' }}
                                    />
                                    <Bar dataKey="Present" stackId="a" fill="#4caf50" radius={[0, 0, 4, 4]} />
                                    <Bar dataKey="Absent" stackId="a" fill="#f44336" radius={[0, 0, 0, 0]} />
                                    <Bar dataKey="Late" stackId="a" fill="#ff9800" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-[10px] mt-auto">
                            <button
                                onClick={() => navigate('/admin/today-attendance')}
                                className="w-full p-[12px] border-none rounded-[30px] bg-[#e3f2fd] text-[#1976d2] font-semibold text-[13px] flex items-center justify-center gap-[10px] cursor-pointer transition-colors duration-200 hover:bg-[#bbdefb] shadow-sm"
                            >
                                <History size={18} /> View Full Attendance History
                            </button>
                            <button
                                onClick={() => navigate('/admin/today-attendance', { state: { openAddModal: true } })}
                                className="w-full p-[12px] border-none rounded-[30px] bg-[#e3f2fd] text-[#1976d2] font-semibold text-[13px] flex items-center justify-center gap-[10px] cursor-pointer transition-colors duration-200 hover:bg-[#bbdefb] shadow-sm"
                            >
                                <BarChart2 size={18} /> Generate Attendance Report
                            </button>
                        </div>
                    </div>

                    {/* Leave Balance Section */}
                    <div className="bg-white rounded-[10px] p-[20px] shadow-[0_2px_5px_rgba(0,0,0,0.03)]">
                        <h3 className="text-[16px] font-semibold text-[#333] mb-[20px]">Leave Balance</h3>

                        {/* Search Bar */}
                        <div className="relative mb-[20px]">
                            <Search className="absolute left-[12px] top-[50%] -translate-y-[50%] text-[#999]" size={16} />
                            <input
                                placeholder="Search employee..."
                                value={leaveSearch}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setLeaveSearch(value);
                                    if (value) {
                                        const match = allEmployeesLeaveData.find(emp => emp.name.toLowerCase().includes(value.toLowerCase()));
                                        if (match) setSelectedEmployeeId(match.id);
                                    }
                                }}
                                className="w-full pl-[38px] pr-[35px] py-[10px] bg-[#f8f9fa] border border-[#eee] rounded-[8px] text-[13px] text-[#333] focus:outline-none focus:border-[#2196f3] transition-colors"
                            />
                            {leaveSearch && (
                                <button
                                    onClick={() => setLeaveSearch('')}
                                    className="absolute right-[10px] top-[50%] -translate-y-[50%] text-[#999] hover:text-[#666] transition-colors border-none bg-transparent cursor-pointer"
                                >
                                    <X size={14} />
                                </button>
                            )}
                        </div>



                        {/* Selected User Info */}
                        {selectedEmployee && (
                            <>
                                <div className="flex items-center gap-[15px] mb-[25px]">
                                    <img src={selectedEmployee.image} alt="Selected User" className="w-[50px] h-[50px] rounded-full border-[2px] border-[#e3f2fd]" />
                                    <div>
                                        <h4 className="text-[15px] font-bold text-[#333]">{selectedEmployee.name}</h4>
                                        <span className="text-[12px] text-[#666] block">{selectedEmployee.role}</span>
                                        <span className="text-[11px] text-[#2196f3] font-medium">{selectedEmployee.department}</span>
                                    </div>
                                </div>

                                {/* Leave Cards */}
                                <div className="flex flex-col gap-[15px]">
                                    {/* Annual Leave */}
                                    <div className="bg-[#fff] border border-[#f0f0f0] rounded-[10px] p-[15px] shadow-[0_2px_4px_rgba(0,0,0,0.01)] transition-transform hover:scale-[1.02] duration-200">
                                        <div className="flex justify-between items-start mb-[10px]">
                                            <div className="flex items-center gap-[10px]">
                                                <div className="w-[36px] h-[36px] rounded-[8px] bg-[#4caf50] flex items-center justify-center text-white">
                                                    <Umbrella size={18} />
                                                </div>
                                                <span className="text-[14px] font-semibold text-[#333]">Annual Leave</span>
                                            </div>
                                            <span className="bg-[#fff3e0] text-[#ff9800] text-[11px] font-bold px-[8px] py-[3px] rounded-[12px]">{selectedEmployee.leaves.annual.remaining} days left</span>
                                        </div>
                                        <div className="w-full h-[6px] bg-[#f0f0f0] rounded-[3px] mb-[8px] overflow-hidden">
                                            <div
                                                className="h-full bg-[#ff9800] rounded-[3px]"
                                                style={{ width: `${(selectedEmployee.leaves.annual.used / selectedEmployee.leaves.annual.total) * 100}%` }}
                                            ></div>
                                        </div>
                                        <div className="flex justify-between text-[11px] text-[#888]">
                                            <span>{selectedEmployee.leaves.annual.used} used</span>
                                            <span>{selectedEmployee.leaves.annual.total} total</span>
                                        </div>
                                    </div>

                                    {/* Sick Leave */}
                                    <div className="bg-[#fff] border border-[#f0f0f0] rounded-[10px] p-[15px] shadow-[0_2px_4px_rgba(0,0,0,0.01)] transition-transform hover:scale-[1.02] duration-200">
                                        <div className="flex justify-between items-start mb-[10px]">
                                            <div className="flex items-center gap-[10px]">
                                                <div className="w-[36px] h-[36px] rounded-[8px] bg-[#f44336] flex items-center justify-center text-white">
                                                    <HeartPulse size={18} />
                                                </div>
                                                <span className="text-[14px] font-semibold text-[#333]">Sick Leave</span>
                                            </div>
                                            <span className="bg-[#ffebee] text-[#f44336] text-[11px] font-bold px-[8px] py-[3px] rounded-[12px]">{selectedEmployee.leaves.sick.remaining} days left</span>
                                        </div>
                                        <div className="w-full h-[6px] bg-[#f0f0f0] rounded-[3px] mb-[8px] overflow-hidden">
                                            <div
                                                className="h-full bg-[#f44336] rounded-[3px]"
                                                style={{ width: `${(selectedEmployee.leaves.sick.used / selectedEmployee.leaves.sick.total) * 100}%` }}
                                            ></div>
                                        </div>
                                        <div className="flex justify-between text-[11px] text-[#888]">
                                            <span>{selectedEmployee.leaves.sick.used} used</span>
                                            <span>{selectedEmployee.leaves.sick.total} total</span>
                                        </div>
                                    </div>

                                    {/* Personal Leave */}
                                    <div className="bg-[#fff] border border-[#f0f0f0] rounded-[10px] p-[15px] shadow-[0_2px_4px_rgba(0,0,0,0.01)] transition-transform hover:scale-[1.02] duration-200">
                                        <div className="flex justify-between items-start mb-[10px]">
                                            <div className="flex items-center gap-[10px]">
                                                <div className="w-[36px] h-[36px] rounded-[8px] bg-[#2196f3] flex items-center justify-center text-white">
                                                    <User size={18} />
                                                </div>
                                                <span className="text-[14px] font-semibold text-[#333]">Personal Leave</span>
                                            </div>
                                            <span className="bg-[#e8f5e9] text-[#4caf50] text-[11px] font-bold px-[8px] py-[3px] rounded-[12px]">{selectedEmployee.leaves.personal.remaining} days left</span>
                                        </div>
                                        <div className="w-full h-[6px] bg-[#f0f0f0] rounded-[3px] mb-[8px] overflow-hidden">
                                            <div
                                                className="h-full bg-[#4caf50] rounded-[3px]"
                                                style={{ width: `${(selectedEmployee.leaves.personal.used / selectedEmployee.leaves.personal.total) * 100}%` }}
                                            ></div>
                                        </div>
                                        <div className="flex justify-between text-[11px] text-[#888]">
                                            <span>{selectedEmployee.leaves.personal.used} used</span>
                                            <span>{selectedEmployee.leaves.personal.total} total</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {/* Action Buttons */}
                        <div className="flex gap-[15px] mt-[25px]">
                            <button className="flex-1 p-[10px] border-none rounded-[30px] bg-[#f5f5f5] text-[#333] font-semibold text-[13px] flex items-center justify-center gap-[8px] cursor-pointer hover:bg-[#eee] transition-colors">
                                <History size={16} className="text-[#333]" /> Leave History
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="mt-[20px] mb-[20px] w-full max-w-[100vw] overflow-x-hidden">
                <div className="bg-white rounded-[10px] p-[20px_40px] shadow-[0_2px_5px_rgba(0,0,0,0.03)] max-[480px]:p-[15px] max-[480px]:mb-[15px]">
                    <div className="flex justify-between items-center mb-[20px]">
                        <h3 className="text-[16px] font-semibold text-[#333]">Projects</h3>
                        <span className="text-[13px] font-semibold text-[#2196f3] cursor-pointer hover:underline">View All</span>
                    </div>

                    <div className="hidden lg:block overflow-x-auto w-full touch-pan-x">
                        <table className="w-full border-collapse min-w-[900px]">
                            <thead>
                                <tr>
                                    <th className="text-left text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">Project Name</th>
                                    <th className="text-left text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">Employee Team</th>

                                    <th className="text-left text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">Team Leaders</th>
                                    <th className="text-center text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">Priority</th>
                                    <th className="text-center text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">Open Task</th>
                                    <th className="text-center text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">Completed Task</th>
                                    <th className="text-center text-[13px] font-semibold text-[#444] p-[15px_10px] border-b border-[#eee]">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectsData.map((project) => (
                                    <tr key={project.id} className="hover:bg-[#fafafa] border-b border-[#fcfcfc]">
                                        <td
                                            className="p-[15px_10px] text-[13px] text-[#333] font-medium cursor-pointer hover:text-[#2196f3] transition-colors"
                                            onClick={() => {
                                                const { priorityIcon, ...safeProject } = project;
                                                navigate('/admin/project-details', { state: { project: safeProject } });
                                            }}
                                        >
                                            {project.name}
                                        </td>
                                        <td className="p-[15px_10px] text-[13px] align-middle">
                                            <div className="flex items-center relative z-10">
                                                {project.team.slice(0, 3).map((member, idx) => (
                                                    <img
                                                        key={idx}
                                                        src={member.image}
                                                        alt="Team"
                                                        className={`w-[30px] h-[30px] rounded-full border-[2px] border-white ${idx !== 0 ? '-ml-[10px]' : ''} pointer-events-none`}
                                                        title={member.name}
                                                    />
                                                ))}
                                                {project.team.length > 3 && (
                                                    <div className="w-[30px] h-[30px] rounded-full bg-[#7986cb] text-white text-[10px] font-semibold flex items-center justify-center border-[2px] border-white -ml-[10px] pointer-events-none">
                                                        +{project.team.length - 3}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="p-[15px_10px] text-[13px] text-[#333] align-middle">
                                            <span
                                                className="cursor-pointer hover:text-[#2196f3] hover:underline font-medium transition-colors"
                                                onClick={() => handleNavigateToEmployee(project.leader)}
                                            >
                                                {project.leader}
                                            </span>
                                        </td>
                                        <td className="p-[15px_10px] text-[13px] text-[#333] align-middle text-center">
                                            <div className={`flex items-center justify-center gap-[5px] ${project.priorityColor}`}>
                                                <project.priorityIcon size={14} /> <span>{project.priority}</span>
                                            </div>
                                        </td>
                                        <td className="p-[15px_10px] text-[13px] text-[#333] align-middle text-center">{project.openTask}</td>
                                        <td className="p-[15px_10px] text-[13px] text-[#333] align-middle text-center">{project.completedTask}</td>
                                        <td className="p-[15px_10px] text-[13px] align-middle text-center">
                                            <span className={`p-[5px_12px] rounded-[6px] text-[12px] font-medium inline-block ${project.statusClass}`}>
                                                {project.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile/Tablet Card View */}
                    <div className="lg:hidden flex flex-col gap-[15px]">
                        {projectsData.map((project) => (
                            <div
                                key={project.id}
                                className="bg-[#f8f9fa] rounded-[10px] p-[15px] border border-[#f0f0f0] cursor-pointer hover:shadow-md transition-shadow"
                                onClick={() => {
                                    const { priorityIcon, ...safeProject } = project;
                                    navigate('/admin/project-details', { state: { project: safeProject } });
                                }}
                            >
                                <div className="flex justify-between items-start mb-[10px]">
                                    <div>
                                        <h4 className="text-[14px] font-bold text-[#333] mb-[2px]">{project.name}</h4>
                                        <div className="flex items-center gap-[5px]">
                                            <span className="text-[12px] text-[#666]">Leader:</span>
                                            <span className="text-[12px] font-medium text-[#2196f3]" onClick={(e) => {
                                                e.stopPropagation();
                                                handleNavigateToEmployee(project.leader);
                                            }}>{project.leader}</span>
                                        </div>
                                    </div>
                                    <span className={`p-[4px_10px] rounded-[6px] text-[11px] font-medium ${project.statusClass}`}>
                                        {project.status}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center mb-[12px]">
                                    <div className="flex items-center relative z-0">
                                        {project.team.slice(0, 4).map((member, idx) => (
                                            <img
                                                key={idx}
                                                src={member.image}
                                                alt="Team"
                                                className={`w-[28px] h-[28px] rounded-full border-[2px] border-white ${idx !== 0 ? '-ml-[8px]' : ''} object-cover`}
                                            />
                                        ))}
                                        {project.team.length > 4 && (
                                            <div className="w-[28px] h-[28px] rounded-full bg-[#7986cb] text-white text-[9px] font-semibold flex items-center justify-center border-[2px] border-white -ml-[8px]">
                                                +{project.team.length - 4}
                                            </div>
                                        )}
                                    </div>
                                    <div className={`flex items-center gap-[4px] text-[12px] font-medium ${project.priorityColor}`}>
                                        <project.priorityIcon size={14} />
                                        <span>{project.priority}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center pt-[10px] border-t border-[#eee]">
                                    <div className="text-center">
                                        <span className="text-[16px] font-bold text-[#333] block leading-none mb-[2px]">{project.openTask}</span>
                                        <span className="text-[10px] text-[#888] uppercase">Open</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-[16px] font-bold text-[#333] block leading-none mb-[2px]">{project.completedTask}</span>
                                        <span className="text-[10px] text-[#888] uppercase">Done</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-[16px] font-bold text-[#333] block leading-none mb-[2px]">{Math.round((project.completedTask / (project.openTask + project.completedTask)) * 100)}%</span>
                                        <span className="text-[10px] text-[#888] uppercase">Rate</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Department Members Modal */}
            <DepartmentMembersModal
                isOpen={!!selectedDepartment}
                onClose={() => setSelectedDepartment(null)}
                departmentName={selectedDepartment}
                employees={allEmployeesLeaveData}
                onMemberClick={(member) => {
                    setSelectedMember(member);
                    setSelectedDepartment(null);
                }}
            />



            {/* Employee Detail Modal for Department Members */}
            {selectedMember && (
                <EmployeeDetailModal
                    member={selectedMember}
                    projectName={selectedMember.department + " Department"} // Fallback project name
                    onClose={() => setSelectedMember(null)}
                />
            )}

            {/* Notice Section */}
            <div className="mt-[25px] mb-[20px] w-full max-w-[100vw] overflow-x-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[10px] p-[20px_40px] shadow-[0_2px_5px_rgba(0,0,0,0.03)] max-[480px]:p-[15px] border border-blue-200">
                    <div className="flex gap-[15px] items-start mb-[15px]">
                        <div className="w-[40px] h-[40px] rounded-[10px] bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-[16px] font-bold text-gray-900 mb-[5px]">📢 Important Notices</h3>
                            <p className="text-[13px] text-gray-600">Stay updated with the latest HR announcements and policies</p>
                        </div>
                    </div>

                    <div className="space-y-[12px] max-h-[300px] overflow-y-auto">
                        <div className="bg-white rounded-[8px] p-[15px] border border-amber-200 bg-amber-50 hover:shadow-md transition-shadow">
                            <div className="flex gap-[12px]">
                                <span className="text-[18px] flex-shrink-0">⚠️</span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[14px] font-semibold text-gray-900 mb-[3px]">Policy Update: Remote Work Guidelines</p>
                                    <p className="text-[12px] text-gray-700 mb-[5px]">New hybrid work policy effective from January 15, 2026. Please review the guidelines in the HR portal.</p>
                                    <span className="text-[11px] text-gray-500">2 days ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[8px] p-[15px] border border-green-200 bg-green-50 hover:shadow-md transition-shadow">
                            <div className="flex gap-[12px]">
                                <span className="text-[18px] flex-shrink-0">✅</span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[14px] font-semibold text-gray-900 mb-[3px]">Announcement: Holiday Schedule 2026</p>
                                    <p className="text-[12px] text-gray-700 mb-[5px]">The annual holiday schedule for 2026 has been finalized. Check the calendar for company holidays.</p>
                                    <span className="text-[11px] text-gray-500">5 days ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[8px] p-[15px] border border-blue-200 bg-blue-50 hover:shadow-md transition-shadow">
                            <div className="flex gap-[12px]">
                                <span className="text-[18px] flex-shrink-0">📚</span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[14px] font-semibold text-gray-900 mb-[3px]">Training Program: Leadership Development</p>
                                    <p className="text-[12px] text-gray-700 mb-[5px]">Enroll now for the new leadership development program starting February 1, 2026. Limited seats available.</p>
                                    <span className="text-[11px] text-gray-500">1 week ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

// Helper component to fix Briefcase icon not being exported in this lucide version or generic naming
const BriefcaseIconWrapper = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
);

const SparkLine = ({ data, color, message }) => (
    <div className="h-[50px] w-full mt-[15px]">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <Tooltip
                    content={({ active }) => {
                        if (active) {
                            return (
                                <div className="bg-[#333] text-white text-[10px] p-[6px_10px] rounded-[4px] shadow-lg max-w-[150px] leading-[1.4]">
                                    {message}
                                </div>
                            );
                        }
                        return null;
                    }}
                    cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: '3 3' }}
                />
                <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} isAnimationActive={true} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);


const DepartmentMembersModal = ({ isOpen, onClose, departmentName, employees, onMemberClick }) => {
    if (!isOpen) return null;

    const departmentEmployees = employees.filter(emp => emp.department === departmentName);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000] animate-in fade-in duration-200">
            <div className="bg-white rounded-[15px] w-[500px] max-w-[90vw] max-h-[80vh] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.2)] flex flex-col">
                <div className="p-[20px] border-b border-[#f0f0f0] flex justify-between items-center bg-[#fafafa]">
                    <div>
                        <h3 className="text-[18px] font-bold text-[#333]">Department: {departmentName}</h3>
                        <span className="text-[13px] text-[#666]">{departmentEmployees.length} Members</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-[0] w-[32px] h-[32px] rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1L1 13M1 1L13 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>

                <div className="p-[10px] overflow-y-auto custom-scrollbar flex-1">
                    {departmentEmployees.length > 0 ? (
                        <div className="flex flex-col gap-[10px]">
                            {departmentEmployees.map((member, index) => (
                                <div
                                    key={index}
                                    onClick={() => onMemberClick(member)}
                                    className="flex items-center gap-[15px] p-[10px] rounded-[10px] hover:bg-[#f5f5f5] cursor-pointer transition-colors border border-transparent hover:border-[#eee] group"
                                >
                                    <div className="relative">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-[45px] h-[45px] rounded-full object-cover border-[2px] border-white shadow-sm"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[14px] font-semibold text-[#333] group-hover:text-[#2196f3] transition-colors">{member.name}</h4>
                                        <div className="flex items-center gap-[8px] mt-[2px]">
                                            <span className="text-[12px] text-[#666] bg-white px-[8px] py-[2px] rounded-[4px] border border-[#f0f0f0]">{member.role}</span>
                                        </div>
                                    </div>
                                    <div className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center text-[#ccc] group-hover:text-[#2196f3] transition-colors shadow-sm">
                                        <ArrowUp size={16} className="rotate-45" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-[200px] text-[#888]">
                            <Users size={40} className="mb-[10px] opacity-50" />
                            <p className="text-[14px]">No employees found in this department</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;



const EmployeeDetailModal = ({ member, projectName, onClose }) => {
    if (!member) return null;

    // Generate consistent mock data
    const mockId = `EMP-${member.name.length}${Math.floor(Math.random() * 899) + 100}`;
    const mockEmail = `${member.name.toLowerCase().replace(' ', '.')}@gmail.com`;
    const mockPhone = `+1 (555) ${Math.floor(Math.random() * 899) + 100}-${Math.floor(Math.random() * 8999) + 1000}`;
    const mockLocation = "New York, USA";

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[110] animate-in fade-in duration-200" onClick={onClose}>
            <div className="bg-white rounded-[16px] p-[0] w-[90%] max-w-[350px] shadow-2xl relative animate-in zoom-in-95 duration-200 overflow-hidden" onClick={e => e.stopPropagation()}>
                {/* Header Background */}
                <div className="h-[80px] bg-gradient-to-r from-[#2196f3] to-[#1976d2] relative">
                    <button onClick={onClose} className="p-[0] absolute right-[10px] top-[10px] w-[32px] h-[32px] rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors z-10">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1L1 13M1 1L13 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className="px-[25px] pb-[30px] pt-[0]">
                    {/* Avatar - Negative Margin to pull it up */}
                    <div className="relative -mt-[40px] mb-[15px] flex justify-center">
                        <img src={member.image} alt={member.name} className="w-[80px] h-[80px] rounded-full object-cover border-[4px] border-white shadow-md" />
                    </div>

                    <div className="text-center mb-[25px]">
                        <h3 className="text-[20px] font-bold text-[#333] mb-[2px]">{member.name}</h3>
                        <span className="inline-block px-[10px] py-[2px] bg-[#e3f2fd] text-[#1976d2] text-[11px] font-semibold rounded-[12px]">{member.role}</span>
                    </div>

                    <div className="flex flex-col gap-[12px]">
                        {/* Employee ID */}
                        <div className="flex items-center gap-[15px] p-[10px] bg-[#f8f9fa] rounded-[10px] border border-[#f0f0f0]">
                            <div className="w-[32px] h-[32px] rounded-full bg-[#e3f2fd] flex items-center justify-center text-[#2196f3] shrink-0">
                                <IdCard size={16} />
                            </div>
                            <div className="overflow-hidden">
                                <span className="text-[10px] text-[#888] font-medium block uppercase tracking-wide">Employee ID</span>
                                <span className="text-[13px] font-semibold text-[#333] truncate block">{mockId}</span>
                            </div>
                        </div>

                        {/* Job Role */}
                        <div className="flex items-center gap-[15px] p-[10px] bg-[#f8f9fa] rounded-[10px] border border-[#f0f0f0]">
                            <div className="w-[32px] h-[32px] rounded-full bg-[#ede7f6] flex items-center justify-center text-[#673ab7] shrink-0">
                                <Users size={16} />
                            </div>
                            <div className="overflow-hidden">
                                <span className="text-[10px] text-[#888] font-medium block uppercase tracking-wide">Job Role</span>
                                <span className="text-[13px] font-semibold text-[#333] truncate block">{member.role}</span>
                            </div>
                        </div>

                        {/* Project Name */}
                        <div className="flex items-center gap-[15px] p-[10px] bg-[#f8f9fa] rounded-[10px] border border-[#f0f0f0]">
                            <div className="w-[32px] h-[32px] rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#4caf50] shrink-0">
                                <Briefcase size={16} />
                            </div>
                            <div className="overflow-hidden">
                                <span className="text-[10px] text-[#888] font-medium block uppercase tracking-wide">Department</span>
                                <span className="text-[13px] font-semibold text-[#333] truncate block">{projectName}</span>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-[15px] p-[10px] bg-[#f8f9fa] rounded-[10px] border border-[#f0f0f0]">
                            <div className="w-[32px] h-[32px] rounded-full bg-[#fff3e0] flex items-center justify-center text-[#ff9800] shrink-0">
                                <Mail size={16} />
                            </div>
                            <div className="overflow-hidden">
                                <span className="text-[10px] text-[#888] font-medium block uppercase tracking-wide">Email Address</span>
                                <span className="text-[13px] font-semibold text-[#333] truncate block">{mockEmail}</span>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-[15px] p-[10px] bg-[#f8f9fa] rounded-[10px] border border-[#f0f0f0]">
                            <div className="w-[32px] h-[32px] rounded-full bg-[#f3e5f5] flex items-center justify-center text-[#9c27b0] shrink-0">
                                <Phone size={16} />
                            </div>
                            <div className="overflow-hidden">
                                <span className="text-[10px] text-[#888] font-medium block uppercase tracking-wide">Phone Number</span>
                                <span className="text-[13px] font-semibold text-[#333] truncate block">{mockPhone}</span>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-[15px] p-[10px] bg-[#f8f9fa] rounded-[10px] border border-[#f0f0f0]">
                            <div className="w-[32px] h-[32px] rounded-full bg-[#e0f7fa] flex items-center justify-center text-[#00bcd4] shrink-0">
                                <MapPin size={16} />
                            </div>
                            <div className="overflow-hidden">
                                <span className="text-[10px] text-[#888] font-medium block uppercase tracking-wide">Location</span>
                                <span className="text-[13px] font-semibold text-[#333] truncate block">{mockLocation}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};