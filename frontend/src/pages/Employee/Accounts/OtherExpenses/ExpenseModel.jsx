/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const ExpenseModel = ({ close, save, editData }) => {
  const [form, setForm] = useState({
    id: null,
    invoiceNo: "",
    date: "",
    expenseType: "",
    expenseBy: "",
    amount: "",
    paymentMode: "",
    paidTo: "",
    status: "Pending",
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white max-w-lg w-[95%] rounded-lg p-6">
        {/* HEADER */}
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">
            {editData ? "Edit Expense" : "Add Expense"}
          </h3>
          <X className="cursor-pointer" onClick={close} />
        </div>

        {/* FORM */}
        <div className="grid grid-cols-2 gap-4">
          <input
            name="invoiceNo"
            placeholder="Invoice No."
            value={form.invoiceNo}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            name="expenseType"
            placeholder="Expense Type"
            value={form.expenseType}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            name="expenseBy"
            placeholder="Expense By"
            value={form.expenseBy}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <select
            name="paymentMode"
            value={form.paymentMode}
            onChange={handleChange}
            className="border p-3 rounded"
          >
            <option value="">Payment Mode</option>
            <option>Cash</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>UPI</option>
            <option>Bank Transfer</option>
          </select>

          <input
            name="paidTo"
            placeholder="Paid To"
            value={form.paidTo}
            onChange={handleChange}
            className="border p-3 rounded col-span-2"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border p-3 rounded col-span-2"
          >
            <option>Completed</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-4 mt-6">
          <button onClick={close} className="px-6 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={() => save(form)}
            className="px-6 py-2 bg-blue-600 text-white rounded"
          >
            {editData ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseModel;
