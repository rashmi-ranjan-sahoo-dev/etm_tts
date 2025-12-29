import React, { useState } from "react";
import { Search, Plus, Pencil, Trash2, Download } from "lucide-react";
import ClientModel from "./Clientmodel";

const ClientPayment = () => {
  const [payments, setPayments] = useState([
    {
      id: 201,
      clientId: "C101",
      clientName: "Alice John",
      invoiceId: "INV001.pdf",
      date: "2023-09-01",
      amount: 150,
      method: "Credit Card",
      transactionId: "TXN12345",
      status: "Completed",
    },
    {
      id: 202,
      clientId: "C102",
      clientName: "Bob Smith",
      invoiceId: "INV002.pdf",
      date: "2023-09-02",
      amount: 200,
      method: "Bank Transfer",
      transactionId: "TXN12346",
      status: "Pending",
    },
  ]);

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const filteredPayments = payments.filter((p) =>
    Object.values(p)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const statusBadge = (status) => {
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

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="bg-indigo-100 rounded-lg p-4 mb-4 flex justify-between">
        <h2 className="text-lg font-semibold">Client Payment</h2>

        <div className="flex gap-3">
          <input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border rounded bg-white w-35"
          />
          <Plus
            className="cursor-pointer text-green-600 rounded-2xl border-2 w-[30px] h-[30px]"
            onClick={() => {
              setEditData(null);
              setOpenModal(true);
            }}
          />
        </div>
      </div>



<div className="hidden md:block bg-white rounded-lg shadow overflow-x-auto">

      {/* TABLE */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Client</th>
              <th className="p-3 text-left">Invoice</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Method</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredPayments.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{p.id}</td>
                <td>{p.clientName}</td>
                <td>{p.invoiceId}</td>
                <td>{p.date}</td>
                <td>${p.amount}</td>
                <td>{p.method}</td>
                <td>{statusBadge(p.status)}</td>
                <td className="flex gap-3 py-3">
                  <Pencil
                    className="text-blue-600 cursor-pointer"
                    onClick={() => {
                      setEditData(p);
                      setOpenModal(true);
                    }}
                  />
                  <Trash2
                    className="text-red-600 cursor-pointer"
                    onClick={() =>
                      setPayments(payments.filter((x) => x.id !== p.id))
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
</div>


{/* MOBILE VIEW */}
<div className="block md:hidden space-y-4">
  {filteredPayments.map((p) => (
    <div
      key={p.id}
      className="bg-white rounded-lg shadow p-4 space-y-3"
    >
     
      <div>
        <input type="checkbox" />
      </div>

      <div className="flex justify-between border-b pb-1 text-sm">
        <span className="font-medium">Payment ID:</span>
        <span>{p.id}</span>
      </div>

      <div className="flex justify-between border-b pb-1 text-sm">
        <span className="font-medium">Client ID:</span>
        <span>{p.clientId}</span>
      </div>

      <div className="flex justify-between border-b pb-1 text-sm">
        <span className="font-medium">Client Name:</span>
        <span>{p.clientName}</span>
      </div>

      <div className="flex justify-between border-b pb-1 text-sm">
        <span className="font-medium">Invoice ID:</span>
        <span>{p.invoiceId}</span>
      </div>

      <div className="flex justify-between border-b pb-1 text-sm">
        <span className="font-medium">Payment Date:</span>
        <span>{p.date}</span>
      </div>

      <div className="flex justify-between border-b pb-1 text-sm">
        <span className="font-medium">Payment Amount:</span>
        <span>${p.amount}</span>
      </div>

      <div className="flex justify-between border-b pb-1 text-sm">
        <span className="font-medium">Payment Method:</span>
        <span>{p.method}</span>
      </div>

      <div className="flex justify-between border-b pb-1 text-sm">
        <span className="font-medium">Transaction ID:</span>
        <span>{p.transactionId}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-medium">Payment Status:</span>
        {statusBadge(p.status)}
      </div>

      {/* ACTIONS */}
      <div className="flex gap-4 pt-2">
        <Pencil
          className="text-blue-600 cursor-pointer"
          onClick={() => {
            setEditData(p);
            setOpenModal(true);
          }}
        />
        <Trash2
          className="text-red-600 cursor-pointer"
          onClick={() =>
            setPayments(payments.filter((x) => x.id !== p.id))
          }
        />
      </div>
    </div>
  ))}
</div>



      {/* MODAL */}
      {openModal && (
        <ClientModel
          close={() => setOpenModal(false)}
          editData={editData}
          save={(data) => {
            const payload = {
              ...data,
              invoiceId: data.invoiceName, // store filename
            };

            if (editData) {
              setPayments(
                payments.map((p) => (p.id === payload.id ? payload : p))
              );
            } else {
              setPayments([...payments, { ...payload, id: Date.now() }]);
            }
            setOpenModal(false);
          }}
        />
      )}

    </div>
  );
};

export default ClientPayment;
