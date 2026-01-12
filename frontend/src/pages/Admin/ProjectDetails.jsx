import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Briefcase, Activity, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const ProjectDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state?.project;

    if (!project) {
        return <div className="p-10 text-center">Project not found</div>;
    }



    return (
        <div className="p-5 md:p-10 w-full bg-gray-50 min-h-screen font-sans">
            {/* Header / Navigation */}
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors shadow-sm"
                >
                    <ArrowLeft size={20} className="text-gray-600" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                        <Briefcase className="text-blue-600" size={24} />
                        Project Details
                    </h1>
                </div>
            </div>

            {/* Project Info Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-1">{project.name}</h2>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <User size={14} />
                            <span>Team Leader: <span className="font-semibold text-gray-700">{project.leader}</span></span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 ${project.statusClass}`}>
                            {project.status === 'Completed' ? <CheckCircle size={14} /> :
                                project.status === 'In Progress' ? <Activity size={14} /> :
                                    <Clock size={14} />}
                            {project.status}
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Members Grid */}
            <h3 className="text-lg font-semibold text-gray-700 mb-4 ml-1">Team Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.team.map((member, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                            onClick={() => navigate('/admin/employee', {
                                state: {
                                    leader: {
                                        ...member,
                                        department: "Engineering", // Default department
                                        project: project.name,
                                        email: `${member.name.toLowerCase().replace(' ', '.')}@company.com`,
                                        mobile: "N/A"
                                    },
                                    hideSensitiveInfo: true
                                }
                            })}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">{member.name}</div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-600 flex items-center gap-1">
                                    Role: <span className="text-gray-900">{member.role}</span>
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectDetails;
