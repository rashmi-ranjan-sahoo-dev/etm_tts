import React, { useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import LeaveModal from "./LeaveModal";

const MyLeaves = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const [leaves, setLeaves] = useState([
    {
      id: 1,
      applyDate: "02/22/2019",
      fromDate: "02/22/2019",
      toDate: "02/26/2019",
      halfDay: "Yes",
      type: "Casual Leave",
      status: "Approved",
      reason: "Lorem Ipsum is sim..",
    },
    {
      id: 2,
      applyDate: "02/17/2019",
      fromDate: "02/22/2019",
      toDate: "02/26/2019",
      halfDay: "No",
      type: "Sick Leave",
      status: "Rejected",
      reason: "Lorem Ipsum is sim..",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    setEditData(null);
    setOpenModal(true);
  };

  const handleEdit = (row) => {
    setEditData(row);
    setOpenModal(true);
  };

  const handleDelete = (id) => {
    setLeaves(leaves.filter((item) => item.id !== id));
  };
  const handleSave = (data) => {
    if (editData) {
      setLeaves(leaves.map((l) => (l.id === data.id ? data : l)));
    } else {
      setLeaves([...leaves, { ...data, id: Date.now(), status: "Pending" }]);
    }
    setOpenModal(false);
  };

  const filteredLeaves = leaves.filter((l) => {
    if (!search.trim()) return true;

    const s = search.toLowerCase();

    return (
      l.type.toLowerCase().includes(s) ||
      l.status.toLowerCase().includes(s) ||
      l.reason.toLowerCase().includes(s) ||
      l.applyDate.toLowerCase().includes(s) ||
      l.fromDate.toLowerCase().includes(s) ||
      l.toDate.toLowerCase().includes(s)
    );
  });

  const Item = ({ label, value }) => (
    <div className="flex justify-between border-b pb-1 text-sm">
      <span className="font-medium">{label}:</span>
      <span className="text-gray-700">{value}</span>
    </div>
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* HEADER BAR */}
      <div className="bg-blue-100 rounded-lg p-4 flex items-center justify-between mb-4">
        {/* LEFT: TITLE + SEARCH */}
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-800">My Leaves</h2>

          {/* SEARCH */}
          <div className="relative">
            <Search
              className="absolute left-3 top-2.5 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-3 w-55 rounded-md border border-gray-300 bg-white
                   focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* RIGHT: ADD BUTTON */}
        <button
          onClick={handleAdd}
          className="w-10 h-10 flex items-center justify-center
               rounded-full border border-green-500
               text-green-600 hover:bg-green-50 border-2"
        >
          <Plus />
        </button>
      </div>
      {/* TABLE */}
      {/* <div className="hidden md:block bg-white rounded-lg shadow overflow-x-auto"> */}
      {/* TABLE */}
      <div className="hidden md:block bg-white rounded-lg shadow overflow-x-auto max-h-[650px] overflow-y-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-black">
              {/* <th className="p-3">
                <input type="checkbox" />
              </th> */}
              <th className="p-3">
                <input
                  type="checkbox"
                  checked={
                    filteredLeaves.length > 0 &&
                    selectedIds.length === filteredLeaves.length
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedIds(filteredLeaves.map((row) => row.id));
                    } else {
                      setSelectedIds([]);
                    }
                  }}
                />
              </th>

              <th className="text-left p-3">Application Date</th>
              <th className="text-left">From Date</th>
              <th className="text-left">To Date</th>
              <th className="text-left">Half Day</th>
              <th className="text-left">Leave Type</th>
              <th className="text-left">Status</th>
              <th className="text-left">Reason</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeaves.map((row, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(row.id)}
                    onChange={() => {
                      if (selectedIds.includes(row.id)) {
                        setSelectedIds(
                          selectedIds.filter((id) => id !== row.id)
                        );
                      } else {
                        setSelectedIds([...selectedIds, row.id]);
                      }
                    }}
                  />
                </td>

                <td className="p-3">{row.applyDate}</td>
                <td>{row.fromDate}</td>
                <td>{row.toDate}</td>
                <td>{row.halfDay}</td>
                <td>{row.type}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      row.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td>{row.reason}</td>
                <td className="flex gap-3 py-3">
                  <Pencil
                    onClick={() => handleEdit(row)}
                    className="text-blue-600 cursor-pointer"
                    size={18}
                  />
                  <Trash2
                    onClick={() => handleDelete(row.id)}
                    className="text-red-600 cursor-pointer"
                    size={18}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE VIEW */}
      {/* <div className="block md:hidden space-y-4"> */}
      <div className="block md:hidden space-y-4 max-h-[400px] overflow-y-auto">
        {filteredLeaves.map((row, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4 space-y-3">
            {/* Checkbox */}
            <div>
              <input
                type="checkbox"
                checked={selectedIds.includes(row.id)}
                onChange={() => {
                  if (selectedIds.includes(row.id)) {
                    setSelectedIds(selectedIds.filter((id) => id !== row.id));
                  } else {
                    setSelectedIds([...selectedIds, row.id]);
                  }
                }}
              />
            </div>

            <Item label="Application Date" value={row.applyDate} />
            <Item label="From Date" value={row.fromDate} />
            <Item label="To Date" value={row.toDate} />
            <Item label="Half Day" value={row.halfDay} />
            <Item label="Leave Type" value={row.type} />

            <div className="flex justify-between items-center">
              <span className="font-medium">Status:</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  row.status === "Approved"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {row.status}
              </span>
            </div>

            <Item label="Reason" value={row.reason} />

            {/* Actions */}
            <div className="flex gap-4 pt-2">
              <Pencil
                onClick={() => handleEdit(row)}
                className="text-blue-600 cursor-pointer"
              />
              <Trash2
                onClick={() => handleDelete(row.id)}
                className="text-red-600 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {openModal && (
        <LeaveModal
          close={() => setOpenModal(false)}
          save={handleSave}
          editData={editData}
        />
      )}
    </div>
  );
};

export default MyLeaves;