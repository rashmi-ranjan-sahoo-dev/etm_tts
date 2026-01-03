// import React, { useState } from 'react';
// import { ChevronDown, ChevronUp, Plus, Users, CheckCircle, Clock, AlertCircle, X, Edit, Trash2, MoreVertical } from 'lucide-react';

// const TeamDetail = () => {
//   const [projects, setProjects] = useState([
//     {
//       id: 1,
//       name: 'E-Commerce Platform',
//       code: 'ECOM-2024',
//       client: 'TechCorp Inc.',
//       manager: 'Sarah Johnson',
//       startDate: '2024-01-15',
//       endDate: '2024-06-30',
//       status: 'Active',
//       priority: 'High',
//       teams: [
//         {
//           id: 1,
//           name: 'Frontend Team',
//           lead: 'Rahul Sharma',
//           members: 5,
//           taskCount: 12,
//           tasksOpen: 7,
//           tasksInProgress: 3,
//           tasksDone: 2,
//           status: 'Active'
//         },
//         {
//           id: 2,
//           name: 'Backend Team',
//           lead: 'Priya Patel',
//           members: 4,
//           taskCount: 15,
//           tasksOpen: 5,
//           tasksInProgress: 6,
//           tasksDone: 4,
//           status: 'Active'
//         }
//       ]
//     },
//     {
//       id: 2,
//       name: 'Mobile App Redesign',
//       code: 'MOB-2024',
//       client: 'StartupXYZ',
//       manager: 'Michael Chen',
//       startDate: '2024-02-01',
//       endDate: '2024-05-15',
//       status: 'On Hold',
//       priority: 'Medium',
//       teams: [
//         {
//           id: 3,
//           name: 'UI/UX Team',
//           lead: 'Anita Desai',
//           members: 3,
//           taskCount: 8,
//           tasksOpen: 3,
//           tasksInProgress: 4,
//           tasksDone: 1,
//           status: 'Active'
//         }
//       ]
//     }
//   ]);

//   const [expandedProjects, setExpandedProjects] = useState({});
//   const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);
//   const [showProjectSelector, setShowProjectSelector] = useState(false);
//   const [selectedProjectId, setSelectedProjectId] = useState(null);
//   const [newTeam, setNewTeam] = useState({
//     name: '',
//     description: '',
//     lead: '',
//     status: 'Active',
//     members: []
//   });

//   const toggleProject = (projectId) => {
//     setExpandedProjects(prev => ({
//       ...prev,
//       [projectId]: !prev[projectId]
//     }));
//   };

//   const openCreateTeamModal = (projectId) => {
//     setSelectedProjectId(projectId);
//     setShowCreateTeamModal(true);
//   };

//   const closeCreateTeamModal = () => {
//     setShowCreateTeamModal(false);
//     setNewTeam({
//       name: '',
//       description: '',
//       lead: '',
//       status: 'Active',
//       members: []
//     });
//   };

//   const handleCreateTeam = () => {
//     if (!newTeam.name || !newTeam.lead) {
//       alert('Please fill in required fields');
//       return;
//     }

//     const team = {
//       id: Date.now(),
//       name: newTeam.name,
//       lead: newTeam.lead,
//       members: newTeam.members.length || 0,
//       taskCount: 0,
//       tasksOpen: 0,
//       tasksInProgress: 0,
//       tasksDone: 0,
//       status: newTeam.status
//     };

//     setProjects(prev => prev.map(project => {
//       if (project.id === selectedProjectId) {
//         return {
//           ...project,
//           teams: [...project.teams, team]
//         };
//       }
//       return project;
//     }));

//     closeCreateTeamModal();
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Active': return 'bg-green-100 text-green-800';
//       case 'On Hold': return 'bg-yellow-100 text-yellow-800';
//       case 'Completed': return 'bg-blue-100 text-blue-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case 'High': return 'bg-red-100 text-red-800';
//       case 'Medium': return 'bg-orange-100 text-orange-800';
//       case 'Low': return 'bg-green-100 text-green-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-6 flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">Projects Management</h1>
//             <p className="text-gray-600 mt-2">Manage your projects and teams efficiently</p>
//           </div>
//           <button
//             onClick={() => {
//               if (projects.length === 1) {
//                 openCreateTeamModal(projects[0].id);
//               } else {
//                 setShowProjectSelector(true);
//               }
//             }}
//             className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-lg hover:shadow-xl"
//           >
//             <Plus className="w-5 h-5" />
//             Create Team
//           </button>
//         </div>

//         <div className="space-y-4">
//           {projects.map(project => (
//             <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//               {/* Project Header */}
//               <div className="p-6 border-b border-gray-200">
//                 <div className="flex items-start justify-between">
//                   <div className="flex-1">
//                     <div className="flex items-center gap-3">
//                       <h2 className="text-xl font-semibold text-gray-900">{project.name}</h2>
//                       <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
//                         {project.status}
//                       </span>
//                       <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
//                         {project.priority}
//                       </span>
//                     </div>
//                     <p className="text-sm text-gray-500 mt-1">Project Code: {project.code}</p>
//                   </div>
//                   <button className="p-2 hover:bg-gray-100 rounded-lg transition">
//                     <MoreVertical className="w-5 h-5 text-gray-500" />
//                   </button>
//                 </div>

//                 {/* Project Details Grid */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
//                   <div>
//                     <p className="text-xs text-gray-500">Client</p>
//                     <p className="text-sm font-medium text-gray-900">{project.client}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Project Manager</p>
//                     <p className="text-sm font-medium text-gray-900">{project.manager}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Start Date</p>
//                     <p className="text-sm font-medium text-gray-900">{project.startDate}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">End Date</p>
//                     <p className="text-sm font-medium text-gray-900">{project.endDate}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Team Details Dropdown */}
//               <div className="border-b border-gray-200">
//                 <button
//                   onClick={() => toggleProject(project.id)}
//                   className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
//                 >
//                   <div className="flex items-center gap-3">
//                     <Users className="w-5 h-5 text-gray-600" />
//                     <span className="font-semibold text-gray-900">Team Details</span>
//                     <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
//                       {project.teams.length} {project.teams.length === 1 ? 'team' : 'teams'}
//                     </span>
//                   </div>
//                   {expandedProjects[project.id] ? (
//                     <ChevronUp className="w-5 h-5 text-gray-600" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5 text-gray-600" />
//                   )}
//                 </button>

//                 {/* Expanded Team List */}
//                 {expandedProjects[project.id] && (
//                   <div className="px-6 pb-6 pt-2 bg-gray-50">
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="text-sm font-medium text-gray-700">All Teams</h3>
//                       <button
//                         onClick={() => openCreateTeamModal(project.id)}
//                         className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
//                       >
//                         <Plus className="w-4 h-4" />
//                         Create New Team
//                       </button>
//                     </div>

//                     <div className="space-y-3">
//                       {project.teams.map(team => (
//                         <div key={team.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition">
//                           <div className="flex items-start justify-between">
//                             <div className="flex-1">
//                               <div className="flex items-center gap-2 mb-2">
//                                 <h4 className="font-semibold text-gray-900">{team.name}</h4>
//                                 <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(team.status)}`}>
//                                   {team.status}
//                                 </span>
//                               </div>
                              
//                               <div className="grid grid-cols-2 gap-3 text-sm">
//                                 <div>
//                                   <p className="text-gray-500">Team Lead</p>
//                                   <p className="font-medium text-gray-900">{team.lead}</p>
//                                 </div>
//                                 <div>
//                                   <p className="text-gray-500">Members</p>
//                                   <p className="font-medium text-gray-900">{team.members} members</p>
//                                 </div>
//                               </div>

//                               <div className="mt-3 pt-3 border-t border-gray-100">
//                                 <p className="text-xs text-gray-500 mb-2">Task Summary</p>
//                                 <div className="flex items-center gap-4 text-sm">
//                                   <div className="flex items-center gap-1">
//                                     <AlertCircle className="w-4 h-4 text-red-500" />
//                                     <span className="text-gray-700">{team.tasksOpen} Open</span>
//                                   </div>
//                                   <div className="flex items-center gap-1">
//                                     <Clock className="w-4 h-4 text-yellow-500" />
//                                     <span className="text-gray-700">{team.tasksInProgress} In Progress</span>
//                                   </div>
//                                   <div className="flex items-center gap-1">
//                                     <CheckCircle className="w-4 h-4 text-green-500" />
//                                     <span className="text-gray-700">{team.tasksDone} Done</span>
//                                   </div>
//                                   <div className="ml-auto">
//                                     <span className="font-semibold text-gray-900">Total: {team.taskCount}</span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="flex gap-2 ml-4">
//                               <button className="p-2 hover:bg-gray-100 rounded-lg transition">
//                                 <Edit className="w-4 h-4 text-gray-600" />
//                               </button>
//                               <button className="p-2 hover:bg-red-50 rounded-lg transition">
//                                 <Trash2 className="w-4 h-4 text-red-600" />
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Other Options */}
//               <div className="px-6 py-3 bg-gray-50 flex gap-2">
//                 <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg transition">
//                   Edit Project
//                 </button>
//                 <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg transition">
//                   Archive
//                 </button>
//                 <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg transition">
//                   Share
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Project Selector Modal */}
//       {showProjectSelector && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg max-w-md w-full">
//             <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
//               <h2 className="text-xl font-semibold text-gray-900">Select Project</h2>
//               <button
//                 onClick={() => setShowProjectSelector(false)}
//                 className="p-2 hover:bg-gray-100 rounded-lg transition"
//               >
//                 <X className="w-5 h-5 text-gray-500" />
//               </button>
//             </div>

//             <div className="p-6">
//               <p className="text-sm text-gray-600 mb-4">Choose a project to create the team for:</p>
//               <div className="space-y-2">
//                 {projects.map(project => (
//                   <button
//                     key={project.id}
//                     onClick={() => {
//                       setShowProjectSelector(false);
//                       openCreateTeamModal(project.id);
//                     }}
//                     className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition"
//                   >
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="font-medium text-gray-900">{project.name}</p>
//                         <p className="text-sm text-gray-500">{project.code}</p>
//                       </div>
//                       <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(project.status)}`}>
//                         {project.status}
//                       </span>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Create Team Modal */}
//       {showCreateTeamModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
//               <h2 className="text-xl font-semibold text-gray-900">Create New Team</h2>
//               <button
//                 onClick={closeCreateTeamModal}
//                 className="p-2 hover:bg-gray-100 rounded-lg transition"
//               >
//                 <X className="w-5 h-5 text-gray-500" />
//               </button>
//             </div>

//             <div className="p-6 space-y-6">
//               {/* Basic Team Info */}
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-900 mb-4">Basic Team Information</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Team Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={newTeam.name}
//                       onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="e.g., Frontend Team"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
//                     <input
//                       type="text"
//                       value={projects.find(p => p.id === selectedProjectId)?.name || ''}
//                       disabled
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Team Description
//                     </label>
//                     <textarea
//                       value={newTeam.description}
//                       onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
//                       rows={3}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       placeholder="Brief description of the team's responsibilities..."
//                     />
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Team Lead <span className="text-red-500">*</span>
//                       </label>
//                       <select
//                         value={newTeam.lead}
//                         onChange={(e) => setNewTeam({ ...newTeam, lead: e.target.value })}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       >
//                         <option value="">Select Team Lead</option>
//                         <option value="Rahul Sharma">Rahul Sharma</option>
//                         <option value="Priya Patel">Priya Patel</option>
//                         <option value="Anita Desai">Anita Desai</option>
//                         <option value="Michael Chen">Michael Chen</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Team Status
//                       </label>
//                       <select
//                         value={newTeam.status}
//                         onChange={(e) => setNewTeam({ ...newTeam, status: e.target.value })}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       >
//                         <option value="Active">Active</option>
//                         <option value="Inactive">Inactive</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Team Members */}
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-900 mb-4">Team Members</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Select Members
//                     </label>
//                     <select
//                       multiple
//                       value={newTeam.members}
//                       onChange={(e) => {
//                         const selected = Array.from(e.target.selectedOptions, option => option.value);
//                         setNewTeam({ ...newTeam, members: selected });
//                       }}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
//                     >
//                       <option value="John Doe - Developer">John Doe - Developer</option>
//                       <option value="Jane Smith - Designer">Jane Smith - Designer</option>
//                       <option value="Mike Johnson - Tester">Mike Johnson - Tester</option>
//                       <option value="Sarah Williams - Developer">Sarah Williams - Developer</option>
//                       <option value="David Brown - Developer">David Brown - Developer</option>
//                     </select>
//                     <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple members</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="flex gap-3 pt-4 border-t border-gray-200">
//                 <button
//                   onClick={handleCreateTeam}
//                   className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
//                 >
//                   Create Team
//                 </button>
//                 <button
//                   onClick={closeCreateTeamModal}
//                   className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TeamDetail;







import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Users, CheckCircle, Clock, AlertCircle, X, Edit, Trash2, MoreVertical } from 'lucide-react';

const TeamDetail = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'E-Commerce Platform',
      code: 'ECOM-2024',
      client: 'TechCorp Inc.',
      manager: 'Sarah Johnson',
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      status: 'Active',
      priority: 'High',
      teams: [
        {
          id: 1,
          name: 'Frontend Team',
          lead: 'Rahul Sharma',
          members: 5,
          taskCount: 12,
          tasksOpen: 7,
          tasksInProgress: 3,
          tasksDone: 2,
          status: 'Active'
        },
        {
          id: 2,
          name: 'Backend Team',
          lead: 'Priya Patel',
          members: 4,
          taskCount: 15,
          tasksOpen: 5,
          tasksInProgress: 6,
          tasksDone: 4,
          status: 'Active'
        }
      ]
    },
    {
      id: 2,
      name: 'Mobile App Redesign',
      code: 'MOB-2024',
      client: 'StartupXYZ',
      manager: 'Michael Chen',
      startDate: '2024-02-01',
      endDate: '2024-05-15',
      status: 'On Hold',
      priority: 'Medium',
      teams: [
        {
          id: 3,
          name: 'UI/UX Team',
          lead: 'Anita Desai',
          members: 3,
          taskCount: 8,
          tasksOpen: 3,
          tasksInProgress: 4,
          tasksDone: 1,
          status: 'Active'
        }
      ]
    }
  ]);

  const [expandedProjects, setExpandedProjects] = useState({});
  const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
  const [showProjectSelector, setShowProjectSelector] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [newTeam, setNewTeam] = useState({
    name: '',
    description: '',
    lead: '',
    status: 'Active',
    members: []
  });
  const [newProject, setNewProject] = useState({
    name: '',
    code: '',
    client: '',
    manager: '',
    startDate: '',
    endDate: '',
    status: 'Active',
    priority: 'Medium',
    description: ''
  });

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const openCreateTeamModal = (projectId) => {
    setSelectedProjectId(projectId);
    setShowCreateTeamModal(true);
  };

  const closeCreateTeamModal = () => {
    setShowCreateTeamModal(false);
    setNewTeam({
      name: '',
      description: '',
      lead: '',
      status: 'Active',
      members: []
    });
  };

  const handleCreateTeam = () => {
    if (!newTeam.name || !newTeam.lead) {
      alert('Please fill in required fields');
      return;
    }

    const team = {
      id: Date.now(),
      name: newTeam.name,
      lead: newTeam.lead,
      members: newTeam.members.length || 0,
      taskCount: 0,
      tasksOpen: 0,
      tasksInProgress: 0,
      tasksDone: 0,
      status: newTeam.status
    };

    setProjects(prev => prev.map(project => {
      if (project.id === selectedProjectId) {
        return {
          ...project,
          teams: [...project.teams, team]
        };
      }
      return project;
    }));

    closeCreateTeamModal();
  };

  const closeCreateProjectModal = () => {
    setShowCreateProjectModal(false);
    setNewProject({
      name: '',
      code: '',
      client: '',
      manager: '',
      startDate: '',
      endDate: '',
      status: 'Active',
      priority: 'Medium',
      description: ''
    });
  };

  const handleCreateProject = () => {
    if (!newProject.name || !newProject.code || !newProject.manager) {
      alert('Please fill in required fields (Name, Code, Manager)');
      return;
    }

    const project = {
      id: Date.now(),
      name: newProject.name,
      code: newProject.code,
      client: newProject.client,
      manager: newProject.manager,
      startDate: newProject.startDate,
      endDate: newProject.endDate,
      status: newProject.status,
      priority: newProject.priority,
      teams: []
    };

    setProjects(prev => [...prev, project]);
    closeCreateProjectModal();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'On Hold': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-orange-100 text-orange-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Projects Management</h1>
            <p className="text-gray-600 mt-2">Manage your projects and teams efficiently</p>
          </div>
          <button
            onClick={() => setShowCreateProjectModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
            Create Project
          </button>
        </div>

        <div className="space-y-4">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Project Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-semibold text-gray-900">{project.name}</h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                        {project.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Project Code: {project.code}</p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                    <MoreVertical className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div>
                    <p className="text-xs text-gray-500">Client</p>
                    <p className="text-sm font-medium text-gray-900">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Project Manager</p>
                    <p className="text-sm font-medium text-gray-900">{project.manager}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Start Date</p>
                    <p className="text-sm font-medium text-gray-900">{project.startDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">End Date</p>
                    <p className="text-sm font-medium text-gray-900">{project.endDate}</p>
                  </div>
                </div>
              </div>

              {/* Team Details Dropdown */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold text-gray-900">Team Details</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {project.teams.length} {project.teams.length === 1 ? 'team' : 'teams'}
                    </span>
                  </div>
                  {expandedProjects[project.id] ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>

                {/* Expanded Team List */}
                {expandedProjects[project.id] && (
                  <div className="px-6 pb-6 pt-2 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-gray-700">All Teams</h3>
                      <button
                        onClick={() => openCreateTeamModal(project.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                      >
                        <Plus className="w-4 h-4" />
                        Create New Team
                      </button>
                    </div>

                    <div className="space-y-3">
                      {project.teams.map(team => (
                        <div key={team.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-semibold text-gray-900">{team.name}</h4>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(team.status)}`}>
                                  {team.status}
                                </span>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                  <p className="text-gray-500">Team Lead</p>
                                  <p className="font-medium text-gray-900">{team.lead}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Members</p>
                                  <p className="font-medium text-gray-900">{team.members} members</p>
                                </div>
                              </div>

                              <div className="mt-3 pt-3 border-t border-gray-100">
                                <p className="text-xs text-gray-500 mb-2">Task Summary</p>
                                <div className="flex items-center gap-4 text-sm">
                                  <div className="flex items-center gap-1">
                                    <AlertCircle className="w-4 h-4 text-red-500" />
                                    <span className="text-gray-700">{team.tasksOpen} Open</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4 text-yellow-500" />
                                    <span className="text-gray-700">{team.tasksInProgress} In Progress</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span className="text-gray-700">{team.tasksDone} Done</span>
                                  </div>
                                  <div className="ml-auto">
                                    <span className="font-semibold text-gray-900">Total: {team.taskCount}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-2 ml-4">
                              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                <Edit className="w-4 h-4 text-gray-600" />
                              </button>
                              <button className="p-2 hover:bg-red-50 rounded-lg transition">
                                <Trash2 className="w-4 h-4 text-red-600" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Other Options */}
              <div className="px-6 py-3 bg-gray-50 flex gap-2">
                <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg transition">
                  Edit Project
                </button>
                <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg transition">
                  Archive
                </button>
                <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg transition">
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Project Modal */}
      {showCreateProjectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Create New Project</h2>
              <button
                onClick={closeCreateProjectModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Project Basic Information */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Project Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={newProject.name}
                        onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., E-Commerce Platform"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={newProject.code}
                        onChange={(e) => setNewProject({ ...newProject, code: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., ECOM-2024"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Description
                    </label>
                    <textarea
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Brief description of the project..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Client Name
                      </label>
                      <input
                        type="text"
                        value={newProject.client}
                        onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., TechCorp Inc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Manager <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={newProject.manager}
                        onChange={(e) => setNewProject({ ...newProject, manager: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Manager</option>
                        <option value="Sarah Johnson">Sarah Johnson</option>
                        <option value="Michael Chen">Michael Chen</option>
                        <option value="Rahul Sharma">Rahul Sharma</option>
                        <option value="Priya Patel">Priya Patel</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Start Date
                      </label>
                      <input
                        type="date"
                        value={newProject.startDate}
                        onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        End Date
                      </label>
                      <input
                        type="date"
                        value={newProject.endDate}
                        onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Status
                      </label>
                      <select
                        value={newProject.status}
                        onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Active">Active</option>
                        <option value="On Hold">On Hold</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Priority
                      </label>
                      <select
                        value={newProject.priority}
                        onChange={(e) => setNewProject({ ...newProject, priority: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={handleCreateProject}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Create Project
                </button>
                <button
                  onClick={closeCreateProjectModal}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Selector Modal */}
      {showProjectSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Select Project</h2>
              <button
                onClick={() => setShowProjectSelector(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4">Choose a project to create the team for:</p>
              <div className="space-y-2">
                {projects.map(project => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setShowProjectSelector(false);
                      openCreateTeamModal(project.id);
                    }}
                    className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{project.name}</p>
                        <p className="text-sm text-gray-500">{project.code}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Team Modal */}
      {showCreateTeamModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Create New Team</h2>
              <button
                onClick={closeCreateTeamModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Basic Team Info */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Basic Team Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Team Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={newTeam.name}
                      onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., Frontend Team"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                    <input
                      type="text"
                      value={projects.find(p => p.id === selectedProjectId)?.name || ''}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Team Description
                    </label>
                    <textarea
                      value={newTeam.description}
                      onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Brief description of the team's responsibilities..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Team Lead <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={newTeam.lead}
                        onChange={(e) => setNewTeam({ ...newTeam, lead: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Team Lead</option>
                        <option value="Rahul Sharma">Rahul Sharma</option>
                        <option value="Priya Patel">Priya Patel</option>
                        <option value="Anita Desai">Anita Desai</option>
                        <option value="Michael Chen">Michael Chen</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Team Status
                      </label>
                      <select
                        value={newTeam.status}
                        onChange={(e) => setNewTeam({ ...newTeam, status: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Team Members</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Members
                    </label>
                    <select
                      multiple
                      value={newTeam.members}
                      onChange={(e) => {
                        const selected = Array.from(e.target.selectedOptions, option => option.value);
                        setNewTeam({ ...newTeam, members: selected });
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                    >
                      <option value="John Doe - Developer">John Doe - Developer</option>
                      <option value="Jane Smith - Designer">Jane Smith - Designer</option>
                      <option value="Mike Johnson - Tester">Mike Johnson - Tester</option>
                      <option value="Sarah Williams - Developer">Sarah Williams - Developer</option>
                      <option value="David Brown - Developer">David Brown - Developer</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple members</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={handleCreateTeam}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold text-base shadow-md"
                >
                  💾 Save Team
                </button>
                <button
                  onClick={closeCreateTeamModal}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamDetail;