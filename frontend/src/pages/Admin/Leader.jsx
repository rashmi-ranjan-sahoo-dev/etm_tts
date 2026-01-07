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
    FileSearch
} from 'lucide-react';


const Leader = () => {
    // Mock Data - Matching the user's new image
    const initialLeaders = [
        {
            id: 1,
            name: "John Doe",
            email: "test@email.com",
            role: "Project Manager",
            mobile: "1234567890",
            department: "Java",
            project: "Hospital Management",
            avatar: "https://i.pravatar.cc/150?u=1"
        },
        {
            id: 2,
            name: "Sarah Smith",
            email: "test@email.com",
            role: "Team Leader",
            mobile: "1234567890",
            department: "Designing",
            project: "Android Shopping App",
            avatar: "https://i.pravatar.cc/150?u=2"
        },
        {
            id: 3,
            name: "Rajesh",
            email: "test@email.com",
            role: "Team Leader",
            mobile: "1234567890",
            department: "Marketing",
            project: "School Website",
            avatar: "https://i.pravatar.cc/150?u=3"
        },
        {
            id: 4,
            name: "Jay Soni",
            email: "test@email.com",
            role: "Project Manager",
            mobile: "1234567890",
            department: "Java",
            project: "IOS chatting app",
            avatar: "https://i.pravatar.cc/150?u=4"
        },
        {
            id: 5,
            name: "Rajesh",
            email: "test@email.com",
            role: "Team Leader",
            mobile: "1234567890",
            department: "Accounting",
            project: "Java software",
            avatar: "https://i.pravatar.cc/150?u=5"
        },
        {
            id: 6,
            name: "John Doe",
            email: "test@email.com",
            role: "Team Leader",
            mobile: "1234567890",
            department: "Developing",
            project: "Bootstrap template",
            avatar: "https://i.pravatar.cc/150?u=6"
        },
        {
            id: 7,
            name: "Cara Stevens",
            email: "test@email.com",
            role: "Project Manager",
            mobile: "1234567890",
            department: "Testing",
            project: "PHP website",
            avatar: "https://i.pravatar.cc/150?u=7"
        },
        {
            id: 8,
            name: "Jay Soni",
            email: "test@email.com",
            role: "Team Leader",
            mobile: "1234567890",
            department: "Testing",
            project: "Dating Website",
            avatar: "https://i.pravatar.cc/150?u=8"
        },
        {
            id: 9,
            name: "Angelica Ramos",
            email: "test@email.com",
            role: "Project Manager",
            mobile: "1234567890",
            department: "Java",
            project: "Vegetable shop app",
            avatar: "https://i.pravatar.cc/150?u=9"
        },
        {
            id: 10,
            name: "Alrl Satou",
            email: "test@email.com",
            role: "Team Leader",
            mobile: "1234567890",
            department: "Designing",
            project: "Accounting software",
            avatar: "https://i.pravatar.cc/150?u=10"
        }
    ];

    const [leaders, setLeaders] = useState(initialLeaders);
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedLeader, setSelectedLeader] = useState(null);
    const [newLeader, setNewLeader] = useState({
        name: "",
        department: "",
        role: "",
        project: "",
        mobile: "",
        email: ""
    });

    const handleEdit = (leader) => {
        setSelectedLeader(leader);
        setEditModalOpen(true);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this leader?")) {
            setLeaders(leaders.filter(leader => leader.id !== id));
        }
    };

    const handleAddSubmit = (e) => {
        e.preventDefault();
        // Basic Validation
        if (!newLeader.name || !newLeader.department || !newLeader.role || !newLeader.project || !newLeader.mobile || !newLeader.email) {
            alert("Please fill in all fields.");
            return;
        }

        const newEntry = {
            id: Date.now(),
            ...newLeader,
            avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png" // Default logo as profile picture
        };

        setLeaders([...leaders, newEntry]);
        setShowModal(false);
        setNewLeader({ // Reset form
            name: "",
            department: "",
            role: "",
            project: "",
            mobile: "",
            email: ""
        });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        setLeaders(leaders.map((leader) => (leader.id === selectedLeader.id ? selectedLeader : leader)));
        setEditModalOpen(false);
    };

    const filteredLeaders = leaders.filter(leader =>
        leader.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    <div className="relative w-[350px] max-[900px]:w-full">
                        <Search className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#999]" size={18} />
                        <input
                            type="text"
                            placeholder="Search leaders..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full py-3 px-[15px] pl-[45px] rounded-xl border border-[#f0f0f0] text-[13px] bg-white text-[#444] outline-none transition-all duration-200 focus:border-[#e0e0e0] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.02)]"
                        />
                    </div>
                    <button
                        className="w-[55px] h-[55px] bg-[#9c27b0] text-white border-none rounded-xl flex items-center justify-center cursor-pointer shadow-[0_4px_10px_rgba(156,39,176,0.3)] transition-transform duration-200 hover:-translate-y-[2px] max-[900px]:w-full max-[900px]:h-[45px]"
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
                            <th className="text-left text-[11px] font-bold text-[#555] uppercase px-[15px] pb-[10px] tracking-[0.5px]">Project</th>
                            <th className="text-center text-[11px] font-bold text-[#555] uppercase px-[15px] pb-[10px] tracking-[0.5px]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredLeaders.map((leader) => (
                            <tr key={leader.id} className="transition-transform duration-200 hover:transform-none">
                                <td className="w-10 text-center bg-white p-[15px] text-[13px] text-[#444] align-middle relative"><input type="checkbox" className="w-4 h-4 rounded border-[#ccc] cursor-pointer accent-[#9c27b0]" /></td>
                                <td className="bg-white p-[15px] text-[13px] text-[#444] align-middle relative">
                                    <div className="flex items-center">
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
                                <td className="bg-white p-[15px] text-[13px] text-[#444] align-middle relative">{leader.project}</td>
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

            {/* Add Modal */}
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
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Name*"
                                        value={newLeader.name}
                                        onChange={(e) => setNewLeader({ ...newLeader, name: e.target.value })}
                                        className="w-full py-3 px-[15px] border border-[#ccc] rounded text-[14px] bg-transparent outline-none text-[#333] focus:border-[#666]"
                                    />
                                    <User className="absolute right-[15px] text-[#555] pointer-events-none" size={18} />
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
                                    </select>
                                    <Flag className="absolute right-[15px] text-[#555] pointer-events-none" size={18} />
                                </div>
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Project*"
                                        value={newLeader.project}
                                        onChange={(e) => setNewLeader({ ...newLeader, project: e.target.value })}
                                        className="w-full py-3 px-[15px] border border-[#ccc] rounded text-[14px] bg-transparent outline-none text-[#333] focus:border-[#666]"
                                    />
                                    <Folder className="absolute right-[15px] text-[#555] pointer-events-none" size={18} />
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
        </div>
    );
};

export default Leader;