import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const TaskModal = ({ close, save, editData }) => {
  const [form, setForm] = useState({
    TaskNumber: "",
    Employee_ID: "",
    Project: "",
    Client: "",
    Status: "",
    Priority: "",
    Type: "",
    TaskDate: new Date().toISOString().split("T")[0],
    Details: "",
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    // You can add validations here
    save(form);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-150 rounded-lg p-8 relative">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">{editData ? editData.TaskNumber : "New Task"}</h3>
          <X className="cursor-pointer" onClick={close} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="TaskNumber"
            value={form.TaskNumber}
            onChange={handleChange}
            placeholder="Task No*"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="Employee_ID"
            value={form.Employee_ID}
            onChange={handleChange}
            placeholder="Employee_ID*"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="Project"
            value={form.Project}
            onChange={handleChange}
            placeholder="Project*"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="Client"
            value={form.Client}
            onChange={handleChange}
            placeholder="Client*"
            className="border p-2 rounded w-full"
          />
          <label>
            <p>Status*</p>
          <select
            name="Status"
            value={form.Status}
            placeholder="Status"
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option>Open</option>
            <option>Closed</option>
          </select>
          </label>
          <select
            name="Priority"
            value={form.Priority}
            placeholder="Priority*"
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select
            name="Type"
            value={form.Type}
            placeholder="Type*"
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option>Bug</option>
            <option>Error</option>
            <option>Development</option>
          </select>
          <input
            type="date"
            name="TaskDate"
            value={form.TaskDate}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <textarea
            name="Details"
            value={form.Details}
            onChange={handleChange}
            placeholder="Details*"
            className="col-span-2 border p-2 rounded w-full"
          />
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <button className="px-4 py-2 bg-red-600 text-white rounded" onClick={close}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
