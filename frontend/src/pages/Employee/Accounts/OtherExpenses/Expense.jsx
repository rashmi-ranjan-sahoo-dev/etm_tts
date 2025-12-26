import React, { useState } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import ExpenseModel from "./ExpenseModel";

const Expense = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      invoiceNo: "INV-001",
      date: "2023-09-01",
      expenseType: "Travel",
      expenseBy: "Alice",
      amount: 1500,
      paymentMode: "Credit Card",
      paidTo: "Uber",
      status: "Completed",
    },
    {
      id: 2,
      invoiceNo: "INV-002",
      date: "2023-09-03",
      expenseType: "Food",
      expenseBy: "Bob",
      amount: 800,
      paymentMode: "Cash",
      paidTo: "Restaurant",
      status: "Pending",
    },
  ]);

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const filteredExpenses = expenses.filter((e) =>
    Object.values(e)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const badge = (status) => {
    const map = {
      Completed: "bg-green-100 text-green-700",
      Pending: "bg-yellow-100 text-yellow-700",
      Failed: "bg-red-100 text-red-700",
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs ${map[status]}`}>
        {status}
      </span>
    );
  };

  const handleSave = (data) => {
    if (editData) {
      setExpenses(
        expenses.map((e) => (e.id === data.id ? data : e))
      );
    } else {
      setExpenses([...expenses, { ...data, id: Date.now() }]);
    }
    setOpenModal(false);
    setEditData(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="bg-indigo-100 rounded-lg p-4 mb-4 flex justify-between">
        <h2 className="text-lg font-semibold">Expense Management</h2>

        <div className="flex gap-3">
          <input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border rounded"
          />
          <Plus
            className="cursor-pointer text-green-600"
            onClick={() => {
              setEditData(null);
              setOpenModal(true);
            }}
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-3 text-left">Invoice No.</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Expense Type</th>
              <th className="p-3 text-left">Expense By</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Payment Mode</th>
              <th className="p-3 text-left">Paid To</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredExpenses.map((e) => (
              <tr key={e.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{e.invoiceNo}</td>
                <td>{e.date}</td>
                <td>{e.expenseType}</td>
                <td>{e.expenseBy}</td>
                <td>₹{e.amount}</td>
                <td>{e.paymentMode}</td>
                <td>{e.paidTo}</td>
                <td>{badge(e.status)}</td>
                <td className="flex gap-3 py-3">
                  <Pencil
                    className="text-blue-600 cursor-pointer"
                    onClick={() => {
                      setEditData(e);
                      setOpenModal(true);
                    }}
                  />
                  <Trash2
                    className="text-red-600 cursor-pointer"
                    onClick={() =>
                      setExpenses(expenses.filter((x) => x.id !== e.id))
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {openModal && (
        <ExpenseModel
          close={() => setOpenModal(false)}
          editData={editData}
          save={handleSave}
        />
      )}
    </div>
  );
};

export default Expense;
