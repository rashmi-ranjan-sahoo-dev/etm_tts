import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
};

const LeaveModal = ({ close, save, editData }) => {
  const [form, setForm] = useState({
    applyDate: "",
    fromDate: "",
    toDate: "",
    halfDay: "",
    type: "",
    status: "",
    reason: "",
  });
  const today = new Date().toISOString().split("T")[0];
  const [errors, setErrors] = useState({});

  // ===== PRE-FILL DATA WHEN EDITING =====
  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let newErrors = {};

    // required fields
    if (!form.applyDate) newErrors.applyDate = "Required";
    if (!form.fromDate) newErrors.fromDate = "Required";
    if (!form.toDate) newErrors.toDate = "Required";
    if (!form.halfDay) newErrors.halfDay = "Required";
    if (!form.type) newErrors.type = "Required";
    if (!form.reason.trim()) newErrors.reason = "Required";

    // dates should not be before today
    if (form.applyDate && form.applyDate < today)
      newErrors.applyDate = "Cannot be before today";

    if (form.fromDate && form.fromDate < today)
      newErrors.fromDate = "Cannot be before today";

    if (form.toDate && form.toDate < today)
      newErrors.toDate = "Cannot be before today";

    // apply & from date must be <= to date
    if (form.applyDate && form.toDate && form.applyDate > form.toDate)
      newErrors.applyDate = "Must be before To Date";

    if (form.fromDate && form.toDate && form.fromDate > form.toDate)
      newErrors.fromDate = "Must be before To Date";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      save({
        ...form,
        applyDate: formatDate(form.applyDate),
        fromDate: formatDate(form.fromDate),
        toDate: formatDate(form.toDate),
      });

      close();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[600px] rounded-lg p-10 relative">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">
            {editData ? "Edit Leave Request" : "New Leave Request"}
          </h3>
          <X className="cursor-pointer" onClick={close} />
        </div>

        {/* FORM */}

        <div className="grid grid-cols-2 gap-4">
          <label>
            <p>Apply Date:</p>
            <input
              type="date"
              name="applyDate"
              value={form.applyDate}
              onChange={handleChange}
              min={today}
              className="border p-4 rounded w-full"
            />
          </label>

          <label>
            <p>From Date:</p>
            <input
              type="date"
              name="fromDate"
              value={form.fromDate}
              onChange={handleChange}
              min={today}
              className="border p-4 rounded w-full"
            />
          </label>

          <label>
            <p>To Date:</p>
            <input
              type="date"
              name="toDate"
              value={form.toDate}
              onChange={handleChange}
              min={form.fromDate || today}
              className="border p-4 rounded w-full"
            />
          </label>

          <label>
            <p>Half Day</p>
            <select
              name="halfDay"
              value={form.halfDay}
              onChange={handleChange}
              className="border p-4 rounded w-full h-[60px]"
            >
              <option value="">Half Day</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>

          <select
            name="type"
            value={form.type}
            placeholder="Type"
            onChange={handleChange}
            className="border p-4 rounded"
          >
            <option value="">Type</option>
            <option>Casual Leave</option>
            <option>Sick Leave</option>
            <option>Marriage Leave</option>
            <option>Maternity Leave</option>
          </select>

          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            className="col-span-2 border p-4 rounded"
            placeholder="Reason"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={close}
            className="px-6 py-2 bg-red-600 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveModal;