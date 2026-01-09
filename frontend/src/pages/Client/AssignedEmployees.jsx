import React, { useState } from 'react';
import { Search, Users, Briefcase, Calendar } from 'lucide-react';

const sampleEmployees = [
  {
    id: 'e1',
    name: 'Cara Stevens',
    role: 'Frontend Developer',
    email: 'cara.stevens@example.com',
    phone: '+1 555 1234',
    projects: [
      { id: 'p1', name: 'HR Portal', status: 'In Progress' },
      { id: 'p2', name: 'Client Dashboard', status: 'Pending' },
    ],
  },
  {
    id: 'e2',
    name: 'John Deo',
    role: 'Backend Developer',
    email: 'john.deo@example.com',
    phone: '+1 555 5678',
    projects: [
      { id: 'p3', name: 'API Integration', status: 'In Progress' },
    ],
  },
  {
    id: 'e3',
    name: 'Airi Satou',
    role: 'QA Engineer',
    email: 'airi.satou@example.com',
    phone: '+1 555 9012',
    projects: [
      { id: 'p1', name: 'HR Portal', status: 'In Progress' },
      { id: 'p4', name: 'Mobile App', status: 'Completed' },
    ],
  },
];

const AssignedEmployees = () => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = sampleEmployees.filter((e) =>
    `${e.name} ${e.role} ${e.email}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white">
                <Users className="w-5 h-5" />
              </div>
              Assigned Employees
            </h1>
            <p className="text-gray-600 mt-1">View employee details and the projects they're working on.</p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
            <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search employees..."
                className="pl-10 pr-4 py-3 rounded-2xl border-2 border-gray-200 bg-white outline-none focus:border-teal-500 w-full md:w-64"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((emp) => (
            <div key={emp.id} className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition cursor-pointer" onClick={() => setSelected(emp)}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center font-bold text-lg">
                  {emp.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">{emp.name}</div>
                  <div className="text-sm text-gray-500">{emp.role}</div>
                </div>
                <div className="text-sm text-gray-400">{emp.projects.length} <Briefcase className="inline w-4 h-4 ml-1" /></div>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>Currently on {emp.projects[0]?.name || '—'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-auto max-h-[90vh]">
              <div className="p-6 border-b flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center font-bold text-xl">
                  {selected.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800">{selected.name}</h2>
                  <p className="text-sm text-gray-500">{selected.role}</p>
                  <p className="text-sm text-gray-500 mt-2">{selected.email} · {selected.phone}</p>
                </div>
                <div>
                  <button onClick={() => setSelected(null)} className="px-3 py-2 rounded-lg border">Close</button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Assigned Projects</h3>
                <div className="space-y-3">
                  {selected.projects.map((p) => (
                    <div key={p.id} className="p-4 border rounded-lg flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-800">{p.name}</div>
                        <div className="text-sm text-gray-500">Status: {p.status}</div>
                      </div>
                      <div className="text-sm text-gray-500">{p.status === 'In Progress' ? '⏳' : p.status === 'Completed' ? '✅' : '—'}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AssignedEmployees;
