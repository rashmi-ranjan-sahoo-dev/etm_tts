import React, { useState } from 'react';
import {
    ClipboardList,
    Search,
    Plus,
    Pencil,
    Trash2,
    Mail,
    Phone,
    Briefcase,
    X,
    User,
    Flag,
    Folder,
    FileSearch,
    IdCard,
    Users,
    MapPin,
    ChevronDown
} from 'lucide-react';


const Leader = () => {
    // Available Projects List
    const availableProjects = [
        "Hospital Management",
        "Android Shopping App",
        "School Website",
        "IOS chatting app",
        "Java software",
        "Bootstrap template",
        "PHP website",
        "Dating Website",
        "Vegetable shop app",
        "Accounting software"
    ];

    // Mock Data - Matching the user's new image
    const initialLeaders = [
        {
            id: 1,
            name: "John Doe",
            email: "test@email.com",
            role: "Project Manager",
            mobile: "1234567890",
            department: "Java",
            project: "Hospital Management, Java software, Dating Website",
            avatar: "https://i.pravatar.cc/150?u=1"
        },
        {
            id: 2,
            name: "Sarah Smith",
            email: "test@email.com",
            role: "Team Leader",
            mobile: "1234567890",
            department: "Designing",
            project: "Android Shopping App, Ecommerce Website, Logo Design",
            avatar: "https://i.pravatar.cc/150?u=2"
        },
        {
            id: 3,
            name: "Rajesh",
            email: "test@email.com",
            role: "Team Leader",
            mobile: "1234567890",
            department: "Marketing",
            project: "School Website, SEO Optimization, Social Media Campaign",
            avatar: "https://i.pravatar.cc/150?u=3"
        },
        {
            id: 4,
            name: "Jay Soni",
            email: "test@email.com",
            role: "Project Manager",
            mobile: "1234567890",
            department: "Java",
            project: "IOS chatting app, Dating App Backend",
            avatar: "https://i.pravatar.cc/150?u=4"
        },
        {
            id: 5,
            name: "Rajesh",
            email: "test@email.com",
            role: "Team Leader",
            mobile: "1234567890",
            department: "Accounting",
            project: "Java software, Payroll System, Tax Calculator",
            avatar: "https://i.pravatar.cc/150?u=5"
        },
        {
            id: 6,
            name: "John Doe",
            email: "test@email.com",
            role: "Team Leader",
            mobile: "1234567890",
            department: "Developing",
            project: "Bootstrap template, Portfolio Site, Blog Theme",
            avatar: "https://i.pravatar.cc/150?u=6"
        },
        {
            id: 7,
            name: "Cara Stevens",
            email: "test@email.com",
            role: "Project Manager",
            mobile: "1234567890",
            department: "Testing",
            project: "PHP website, Legacy App Maintenance, Bug Tracking Tool",
            avatar: "https://i.pravatar.cc/150?u=7"
        },
        {
            id: 8,
            name: "Jay Soni",
            email: "test@email.com",
            role: "Team Leader",
            mobile: "1234567890",
            department: "Testing",
            project: "Dating Website, Matchmaking Algorithm, User Profile System",
            avatar: "https://i.pravatar.cc/150?u=8"
        },
        {
            id: 9,
            name: "Angelica Ramos",
            email: "test@email.com",
            role: "Project Manager",
            mobile: "1234567890",
            department: "Java",
            project: "Vegetable shop app, Grocery Delivery, Inventory System",
            avatar: "https://i.pravatar.cc/150?u=9"
        },
        {
            id: 10,
            name: "Alrl Satou",
            email: "test@email.com",
            role: "Team Leader",
            mobile: "1234567890",
            department: "Designing",
            project: "Accounting software, Finance Dashboard, Invoicing Tool",
            avatar: "https://i.pravatar.cc/150?u=10"
        }
    ];

    const [leaders, setLeaders] = useState(initialLeaders);
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedLeader, setSelectedLeader] = useState(null);
    const [selectedLeaderDetail, setSelectedLeaderDetail] = useState(null);
    const [suggestions, setSuggestions] = useState([]);

    // Filter State
    const [roleFilter, setRoleFilter] = useState("");
    const [departmentFilter, setDepartmentFilter] = useState("");

    // Form State - Removed Project
    const [newLeader, setNewLeader] = useState({
        name: "",
        department: "",
        role: "",
        mobile: "",
        email: "",
        projects: []
    });

    // Mock Database for Auto-fill
    const mockDatabase = [
        { name: "Alice Johnson", department: "HR", role: "HR Manager", mobile: "9876543210", email: "alice.johnson@gmail.com" },
        { name: "Bob Smith", department: "Development", role: "Developer", mobile: "8765432109", email: "bob.smith@gmail.com" },
        { name: "Charlie Brown", department: "Marketing", role: "Marketing Manager", mobile: "7654321098", email: "charlie.brown@gmail.com" },
        { name: "David Wilson", department: "Designing", role: "Designer", mobile: "6543210987", email: "david.wilson@gmail.com" },
        { name: "Eva Davis", department: "Testing", role: "Tester", mobile: "5432109876", email: "eva.davis@gmail.com" },
        { name: "Frank Miller", department: "Java", role: "Developer", mobile: "4321098765", email: "frank.miller@gmail.com" },
        { name: "Grace Lee", department: "Development", role: "Team Leader", mobile: "3210987654", email: "grace.lee@gmail.com" },
        { name: "Henry White", department: "HR", role: "Recruiter", mobile: "2109876543", email: "henry.white@gmail.com" },
    ];

    const handleEdit = (leader) => {
        setSelectedLeader(leader);
        setEditModalOpen(true);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this leader?")) {
            setLeaders(leaders.filter(leader => leader.id !== id));
        }
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setNewLeader({ ...newLeader, name: value });

        if (value.length > 0) {
            const matches = mockDatabase.filter(emp => emp.name.toLowerCase().includes(value.toLowerCase()));
            setSuggestions(matches);
        } else {
            setSuggestions([]);
        }
    };

    const selectSuggestion = (emp) => {
        setNewLeader({
            name: emp.name,
            department: emp.department,
            role: emp.role,
            mobile: emp.mobile,
            email: emp.email
        });
        setSuggestions([]);
    };

    const handleAddSubmit = (e) => {
        e.preventDefault();
        // Basic Validation - Removed Project
        if (!newLeader.name || !newLeader.department || !newLeader.role || !newLeader.mobile || !newLeader.email) {
            alert("Please fill in all fields.");
            return;
        }

        // Join selected projects for the main view
        const projectString = newLeader.projects.length > 0 ? newLeader.projects.join(", ") : "N/A";

        const newEntry = {
            id: Date.now(),
            ...newLeader,
            project: projectString,
            avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png" // Default logo as profile picture
        };

        setLeaders([...leaders, newEntry]);
        setShowModal(false);
        setNewLeader({ // Reset form
            name: "",
            department: "",
            role: "",
            mobile: "",
            email: "",
            projects: []
        });
        setSuggestions([]);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        setLeaders(leaders.map((leader) => (leader.id === selectedLeader.id ? selectedLeader : leader)));
        setEditModalOpen(false);
    };

    // Filter Logic
    const filteredLeaders = leaders.filter(leader => {
        const matchesSearch = leader.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = roleFilter ? leader.role === roleFilter : true;
        const matchesDept = departmentFilter ? leader.department === departmentFilter : true;
        return matchesSearch && matchesRole && matchesDept;
    });

    // Extract unique options
    const uniqueRoles = [...new Set(leaders.map(l => l.role))];
    const uniqueDepartments = [...new Set(leaders.map(l => l.department))];

    return (
        <div className="p-0.5 font-sans">
            {/* Header Card */}
            <div className="bg-white rounded-2xl px-[30px] py-5 flex justify-between items-center mb-[30px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] max-[900px]:flex-col max-[900px]:gap-5 max-[900px]:items-stretch">
                <div className="flex items-center gap-5">
                    <div className="w-[50px] h-[50px] bg-[#9c27b0] rounded-xl flex items-center justify-center shadow-[0_4px_10px_rgba(156,39,176,0.3)]">
                        <Briefcase size={24} color="white" />
                    </div>
                    <div>
                        <h2 className="m-0 text-[22px] text-[#8e24aa] font-bold">Team Leaders</h2>
                        <span className="text-[13px] text-[#666] mt-1 block">{filteredLeaders.length} leaders found</span>
                    </div>
                </div>

                <div className="flex gap-[15px] items-center max-[900px]:flex-col max-[900px]:w-full">
                    {/* Role Filter */}
                    <div className="relative">
                        <select
                            value={roleFilter}
                            onChange={(e) => setRoleFilter(e.target.value)}
                            className="h-[55px] px-[15px] pr-[30px] rounded-xl border border-[#f0f0f0] text-[13px] bg-white text-[#444] outline-none cursor-pointer focus:border-[#e0e0e0] appearance-none min-w-[120px]"
                        >
                            <option value="">All Roles</option>
                            {uniqueRoles.map((role, idx) => (
                                <option key={idx} value={role}>{role}</option>
                            ))}
                        </select>
                        <Flag size={14} className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[#999] pointer-events-none" />
                    </div>

                    {/* Department Filter */}
                    <div className="relative">
                        <select
                            value={departmentFilter}
                            onChange={(e) => setDepartmentFilter(e.target.value)}
                            className="h-[55px] px-[15px] pr-[30px] rounded-xl border border-[#f0f0f0] text-[13px] bg-white text-[#444] outline-none cursor-pointer focus:border-[#e0e0e0] appearance-none min-w-[140px]"
                        >
                            <option value="">All Departments</option>
                            {uniqueDepartments.map((dept, idx) => (
                                <option key={idx} value={dept}>{dept}</option>
                            ))}
                        </select>
                        <Briefcase size={14} className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[#999] pointer-events-none" />
                    </div>

                    <div className="relative w-[350px] max-[900px]:w-full">
                        <Search className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#999]" size={18} />
                        <input
                            type="text"
                            placeholder="Search leaders..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full py-3 px-[15px] pl-[45px] rounded-xl border border-[#f0f0f0] text-[13px] bg-white text-[#444] outline-none transition-all duration-200 focus:border-[#e0e0e0] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.02)] h-[55px]"
                        />
                    </div>
                    <button
                        className="w-[55px] h-[55px] bg-[#9c27b0] text-white border-none rounded-xl flex items-center justify-center cursor-pointer shadow-[0_4px_10px_rgba(156,39,176,0.3)] transition-transform duration-200 hover:-translate-y-[2px] max-[900px]:w-full max-[900px]:h-[45px] shrink-0"
                        onClick={() => setShowModal(true)}
                    >
                        <Plus size={32} strokeWidth={3} />
                    </button>
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-x-auto">
                <table className="w-full border-separate border-spacing-y-[15px] min-w-[1000px]">
                    <thead>
                        <tr>
                            <th className="w-10 text-center text-left text-[11px] font-bold text-[#555] uppercase px-[15px] pb-[10px] tracking-[0.5px]"><input type="checkbox" className="w-4 h-4 rounded border-[#ccc] cursor-pointer accent-[#9c27b0]" /></th>
                            <th className="text-left text-[11px] font-bold text-[#555] uppercase px-[15px] pb-[10px] tracking-[0.5px]">Employee Name</th>
                            <th className="text-left text-[11px] font-bold text-[#555] uppercase px-[15px] pb-[10px] tracking-[0.5px]">Email</th>
                            <th className="text-left text-[11px] font-bold text-[#555] uppercase px-[15px] pb-[10px] tracking-[0.5px]">Role</th>
                            <th className="text-left text-[11px] font-bold text-[#555] uppercase px-[15px] pb-[10px] tracking-[0.5px]">Mobile</th>
                            <th className="text-left text-[11px] font-bold text-[#555] uppercase px-[15px] pb-[10px] tracking-[0.5px]">Department</th>

                            <th className="text-center text-[11px] font-bold text-[#555] uppercase px-[15px] pb-[10px] tracking-[0.5px]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLeaders.map((leader) => (
                            <tr key={leader.id} className="transition-transform duration-200 hover:transform-none">
                                <td className="w-10 text-center bg-white p-[15px] text-[13px] text-[#444] align-middle relative"><input type="checkbox" className="w-4 h-4 rounded border-[#ccc] cursor-pointer accent-[#9c27b0]" /></td>
                                <td className="bg-white p-[15px] text-[13px] text-[#444] align-middle relative">
                                    <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedLeaderDetail(leader)}>
                                        <img src={leader.avatar} alt={leader.name} className="w-8 h-8 rounded-full object-cover mr-[10px]" />
                                        <span className="font-semibold text-[#8e24aa]">{leader.name}</span>
                                    </div>
                                </td>
                                <td className="bg-white p-[15px] text-[13px] text-[#444] align-middle relative">
                                    <div className="flex items-center gap-2 text-[#444]">
                                        <Mail size={14} className="flex-shrink-0 text-[#f44336]" />
                                        {leader.email}
                                    </div>
                                </td>
                                <td className="bg-white p-[15px] text-[13px] text-[#444] align-middle relative">{leader.role}</td>
                                <td className="bg-white p-[15px] text-[13px] text-[#444] align-middle relative">
                                    <div className="flex items-center gap-2 text-[#444]">
                                        <Phone size={14} className="flex-shrink-0 text-[#4caf50]" />
                                        {leader.mobile}
                                    </div>
                                </td>
                                <td className="bg-white p-[15px] text-[13px] text-[#444] align-middle relative">{leader.department}</td>

                                <td className="text-center bg-white p-[15px] text-[13px] text-[#444] align-middle relative">
                                    <div className="flex justify-center gap-[15px]">
                                        <button className="bg-transparent border-none cursor-pointer p-[5px] transition-opacity duration-200 text-[#2196f3] hover:opacity-70" onClick={() => handleEdit(leader)}>
                                            <Pencil size={16} />
                                        </button>
                                        <button className="bg-transparent border-none cursor-pointer p-[5px] transition-opacity duration-200 text-[#f44336] hover:opacity-70" onClick={() => handleDelete(leader.id)}>
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-end items-center pt-5 gap-5 text-[13px] text-[#666]">
                    <div>
                        Items per page: <span className="inline-block px-2 py-0.5">10</span>
                    </div>
                    <div>1 - 10 of 16</div>
                </div>
            </div>

            {/* Add Modal - Project Removed, Auto-fill Added */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1100]">
                    <div className="bg-white w-[900px] max-w-[95%] rounded-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                        <div className="flex justify-between items-center px-[25px] py-5 border-b border-[#f0f0f0] bg-white relative">
                            <div className="flex items-center gap-[15px]">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="New Lead" className="w-10 h-10 rounded-full object-cover" />
                                <h3 className="m-0 text-[16px] font-semibold text-[#333]">New Leads</h3>
                            </div>
                            <button className="bg-transparent border-none cursor-pointer text-[#666] p-[5px] absolute right-[25px] top-5" onClick={() => setShowModal(false)}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-[30px] overflow-y-auto">
                            <form className="grid grid-cols-2 gap-[25px] max-[900px]:grid-cols-1" onSubmit={handleAddSubmit}>
                                <div className="relative flex flex-col">
                                    <div className="relative flex items-center">
                                        <input
                                            type="text"
                                            placeholder="Name*"
                                            value={newLeader.name}
                                            onChange={handleNameChange}
                                            autoComplete="off"
                                            className="w-full py-3 px-[15px] border border-[#ccc] rounded text-[14px] bg-transparent outline-none text-[#333] focus:border-[#666]"
                                        />
                                        <User className="absolute right-[15px] text-[#555] pointer-events-none" size={18} />
                                    </div>
                                    {/* Auto-suggestion Dropdown */}
                                    {suggestions.length > 0 && (
                                        <ul className="absolute top-[100%] left-0 w-full bg-white border border-[#ccc] rounded-b-md shadow-lg z-50 max-h-[150px] overflow-y-auto mt-1">
                                            {suggestions.map((emp, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => selectSuggestion(emp)}
                                                    className="px-[15px] py-[10px] hover:bg-[#f5f5f5] cursor-pointer text-[13px] text-[#444] border-b border-[#f0f0f0] last:border-none"
                                                >
                                                    <span className="font-semibold">{emp.name}</span> <span className="text-[#888]">({emp.department})</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="relative flex items-center">
                                    <select
                                        className="w-full py-3 px-[15px] border border-[#ccc] rounded text-[14px] bg-transparent outline-none text-[#666] cursor-pointer appearance-none focus:text-[#333] focus:border-[#666]"
                                        value={newLeader.department}
                                        onChange={(e) => setNewLeader({ ...newLeader, department: e.target.value })}
                                    >
                                        <option value="" disabled>Department*</option>
                                        <option value="HR">Human Resource</option>
                                        <option value="Development">Development</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Designing">Designing</option>
                                        <option value="Testing">Testing</option>
                                        <option value="Java">Java</option>
                                    </select>
                                    <Briefcase className="absolute right-[15px] text-[#555] pointer-events-none" size={18} />
                                </div>
                                <div className="relative flex items-center">
                                    <select
                                        className="w-full py-3 px-[15px] border border-[#ccc] rounded text-[14px] bg-transparent outline-none text-[#666] cursor-pointer appearance-none focus:text-[#333] focus:border-[#666]"
                                        value={newLeader.role}
                                        onChange={(e) => setNewLeader({ ...newLeader, role: e.target.value })}
                                    >
                                        <option value="" disabled>Role*</option>
                                        <option value="Team Leader">Team Leader</option>
                                        <option value="Project Manager">Project Manager</option>
                                        <option value="Developer">Developer</option>
                                        <option value="Designer">Designer</option>
                                        <option value="Tester">Tester</option>
                                        <option value="HR Manager">HR Manager</option>
                                        <option value="Marketing Manager">Marketing Manager</option>
                                        <option value="Recruiter">Recruiter</option>
                                    </select>
                                    <Flag className="absolute right-[15px] text-[#555] pointer-events-none" size={18} />
                                </div>

                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Mobile*"
                                        value={newLeader.mobile}
                                        onChange={(e) => setNewLeader({ ...newLeader, mobile: e.target.value })}
                                        className="w-full py-3 px-[15px] border border-[#ccc] rounded text-[14px] bg-transparent outline-none text-[#333] focus:border-[#666]"
                                    />
                                    <Phone className="absolute right-[15px] text-[#555] pointer-events-none" size={18} />
                                </div>
                                <div className="relative flex items-center">
                                    <input
                                        type="email"
                                        placeholder="Email*"
                                        value={newLeader.email}
                                        onChange={(e) => setNewLeader({ ...newLeader, email: e.target.value })}
                                        className="w-full py-3 px-[15px] border border-[#ccc] rounded text-[14px] bg-transparent outline-none text-[#333] focus:border-[#666]"
                                    />
                                    <Mail className="absolute right-[15px] text-[#555] pointer-events-none" size={18} />
                                </div>
                            </form>
                        </div>

                        <div className="px-[30px] py-5 flex gap-[15px] justify-start">
                            <button className="bg-[#e0e0e0] text-[#666] border-none py-[10px] px-[25px] rounded-[20px] font-semibold cursor-pointer" onClick={handleAddSubmit}>Save</button>
                            <button className="bg-[#c62828] text-white border-none py-[10px] px-[25px] rounded-[20px] font-semibold cursor-pointer" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {editModalOpen && selectedLeader && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1100]">
                    <div className="bg-white w-[900px] max-w-[95%] rounded-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                        <div className="flex justify-between items-center px-[25px] py-5 border-b border-[#f0f0f0] bg-white relative">
                            <div className="flex items-center gap-[15px]">
                                <img src={selectedLeader.avatar} alt="user" className="w-10 h-10 rounded-full object-cover" />
                                <h3 className="m-0 text-[16px] font-semibold text-[#333]">Edit Leads: {selectedLeader.name}</h3>
                            </div>
                            <button className="bg-transparent border-none cursor-pointer text-[#666] p-[5px] absolute right-[25px] top-5" onClick={() => setEditModalOpen(false)}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-[30px] overflow-y-auto">
                            <form className="grid grid-cols-2 gap-[25px] max-[900px]:grid-cols-1" onSubmit={handleEditSubmit}>
                                <div className="relative border border-[#757575] rounded-md h-[50px] flex items-center px-[15px]">
                                    <input
                                        type="text"
                                        value={selectedLeader.name}
                                        onChange={(e) => setSelectedLeader({ ...selectedLeader, name: e.target.value })}
                                        className="w-full border-none outline-none text-[15px] text-[#333] font-medium"
                                    />
                                    <label className="absolute -top-[10px] left-3 bg-white px-[5px] text-[12px] text-[#666] font-medium">Name*</label>
                                    <User className="text-[#444]" size={18} />
                                </div>
                                <div className="relative border border-[#757575] rounded-md h-[50px] flex items-center px-[15px]">
                                    <input
                                        type="text"
                                        value={selectedLeader.department}
                                        onChange={(e) => setSelectedLeader({ ...selectedLeader, department: e.target.value })}
                                        className="w-full border-none outline-none text-[15px] text-[#333] font-medium"
                                    />
                                    <label className="absolute -top-[10px] left-3 bg-white px-[5px] text-[12px] text-[#666] font-medium">department*</label>
                                    <Briefcase className="text-[#444]" size={18} />
                                </div>
                                <div className="relative border border-[#757575] rounded-md h-[50px] flex items-center px-[15px]">
                                    <input
                                        type="text"
                                        value={selectedLeader.role}
                                        onChange={(e) => setSelectedLeader({ ...selectedLeader, role: e.target.value })}
                                        className="w-full border-none outline-none text-[15px] text-[#333] font-medium"
                                    />
                                    <label className="absolute -top-[10px] left-3 bg-white px-[5px] text-[12px] text-[#666] font-medium">role*</label>
                                    <Flag className="text-[#444]" size={18} />
                                </div>
                                <div className="relative border border-[#757575] rounded-md h-[50px] flex items-center px-[15px]">
                                    <input
                                        type="text"
                                        value={selectedLeader.project}
                                        onChange={(e) => setSelectedLeader({ ...selectedLeader, project: e.target.value })}
                                        className="w-full border-none outline-none text-[15px] text-[#333] font-medium"
                                    />
                                    <label className="absolute -top-[10px] left-3 bg-white px-[5px] text-[12px] text-[#666] font-medium">Project*</label>
                                    <FileSearch className="text-[#444]" size={18} />
                                </div>
                                <div className="relative border border-[#757575] rounded-md h-[50px] flex items-center px-[15px]">
                                    <input
                                        type="text"
                                        value={selectedLeader.mobile}
                                        onChange={(e) => setSelectedLeader({ ...selectedLeader, mobile: e.target.value })}
                                        className="w-full border-none outline-none text-[15px] text-[#333] font-medium"
                                    />
                                    <label className="absolute -top-[10px] left-3 bg-white px-[5px] text-[12px] text-[#666] font-medium">Mobile*</label>
                                    <Phone className="text-[#444]" size={18} />
                                </div>
                                <div className="relative border border-[#757575] rounded-md h-[50px] flex items-center px-[15px]">
                                    <input
                                        type="text"
                                        value={selectedLeader.email}
                                        onChange={(e) => setSelectedLeader({ ...selectedLeader, email: e.target.value })}
                                        className="w-full border-none outline-none text-[15px] text-[#333] font-medium"
                                    />
                                    <label className="absolute -top-[10px] left-3 bg-white px-[5px] text-[12px] text-[#666] font-medium">Email*</label>
                                    <Mail className="text-[#444]" size={18} />
                                </div>
                            </form>
                        </div>

                        <div className="px-[30px] py-5 flex gap-[15px] justify-start">
                            <button className="bg-[#0056b3] text-white border-none py-[10px] px-[30px] rounded-[20px] font-semibold cursor-pointer" onClick={handleEditSubmit}>Save</button>
                            <button className="bg-[#c62828] text-white border-none py-[10px] px-[30px] rounded-[20px] font-semibold cursor-pointer" onClick={() => setEditModalOpen(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            {/* Employee Detail Modal for Leader */}
            {selectedLeaderDetail && (
                <EmployeeDetailModal
                    member={selectedLeaderDetail}
                    projectName={selectedLeaderDetail.project}
                    onClose={() => setSelectedLeaderDetail(null)}
                />
            )}
        </div>
    );
};

const EmployeeDetailModal = ({ member, projectName, onClose }) => {
    if (!member) return null;

    // Generate consistent mock data
    const mockId = `EMP-${member.name.length}${Math.floor(Math.random() * 899) + 100}`;
    const mockEmail = member.email || `${member.name.toLowerCase().replace(' ', '.')}@gmail.com`;
    // Use member.mobile if available, else mock
    const mockPhone = member.mobile || `+1 (555) ${Math.floor(Math.random() * 899) + 100}-${Math.floor(Math.random() * 8999) + 1000}`;
    const mockLocation = "New York, USA";

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[1110] animate-in fade-in duration-200" onClick={onClose}>
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
                        <img src={member.avatar || member.image} alt={member.name} className="w-[80px] h-[80px] rounded-full object-cover border-[4px] border-white shadow-md" />
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

                        {/* Department */}
                        <div className="flex items-center gap-[15px] p-[10px] bg-[#f8f9fa] rounded-[10px] border border-[#f0f0f0]">
                            <div className="w-[32px] h-[32px] rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#4caf50] shrink-0">
                                <Briefcase size={16} />
                            </div>
                            <div className="overflow-hidden">
                                <span className="text-[10px] text-[#888] font-medium block uppercase tracking-wide">Department</span>
                                <span className="text-[13px] font-semibold text-[#333] truncate block">{member.department}</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-[15px] p-[10px] bg-[#f8f9fa] rounded-[10px] border border-[#f0f0f0]">
                            <div className="w-[32px] h-[32px] rounded-full bg-[#e0f2f1] flex items-center justify-center text-[#009688] shrink-0 mt-1">
                                <Folder size={16} />
                            </div>
                            <div className="overflow-hidden w-full">
                                <span className="text-[10px] text-[#888] font-medium block uppercase tracking-wide mb-1">Project Details</span>
                                {(projectName || member.project) ? (
                                    <div className="relative flex items-center">
                                        <select className="mt-1 w-full bg-transparent text-[13px] font-semibold text-[#333] border-none outline-none cursor-pointer appearance-none pr-6 z-10 relative" defaultValue="">
                                            <option value="" disabled hidden>View Projects</option>
                                            {(projectName || member.project).toString().split(',').map((p, i) => (
                                                <option key={i} value={p.trim()}>{p.trim()}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={14} className="absolute right-0 top-1/2 mt-0.5 -translate-y-1/2 text-[#444] z-0 pointer-events-none" />
                                    </div>
                                ) : (
                                    <span className="text-[13px] font-semibold text-[#333] truncate block">N/A</span>
                                )}
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

export default Leader;