/* eslint-disable react-hooks/set-state-in-effect */
// import React, { useEffect, useState } from "react";
// import { X } from "lucide-react";

// const ClientModel = ({ close, save, editData }) => {
//   const [form, setForm] = useState({
//     clientId: "",
//     clientName: "",
//     invoice: "",
//     date: "",
//     amount: "",
//     method: "",
//     transactionId: "",
//     status: "Pending",
//   });

//   useEffect(() => {
//     if (editData) setForm(editData);
//   }, [editData]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white w-[95%] max-w-lg rounded-lg p-6 relative">
//         {/* HEADER */}
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-semibold">
//             {editData ? "Edit Payment" : "Add Payment"}
//           </h3>
//           <X className="cursor-pointer" onClick={close} />
//         </div>

//         {/* FORM */}
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             name="clientId"
//             placeholder="Client ID"
//             value={form.clientId}
//             onChange={handleChange}
//             className="border p-3 rounded"
//           />
//           <input
//             name="clientName"
//             placeholder="Client Name"
//             value={form.clientName}
//             onChange={handleChange}
//             className="border p-3 rounded"
//           />
//           <input
//             type="File"
//             name="invoice"
//             placeholder="Invoice"
//             value={form.invoice}
//             onChange={handleChange}
//             className="border p-3 rounded"
//           />
//           <input
//             type="date"
//             name="date"
//             value={form.date}
//             onChange={handleChange}
//             className="border p-3 rounded"
//           />
//           <input
//             name="amount"
//             placeholder="Amount"
//             value={form.amount}
//             onChange={handleChange}
//             className="border p-3 rounded"
//           />
//           <input
//             name="transactionId"
//             placeholder="Transaction ID"
//             value={form.transactionId}
//             onChange={handleChange}
//             className="border p-3 rounded"
//           />

//           <select
//             name="method"
//             value={form.method}
//             onChange={handleChange}
//             className="border p-3 rounded col-span-2"
//           >
//             <option value="">Payment Method</option>
//             <option>Credit Card</option>
//             <option>Debit Card</option>
//             <option>PayPal</option>
//             <option>Bank Transfer</option>
//           </select>

//           <select
//             name="status"
//             value={form.status}
//             onChange={handleChange}
//             className="border p-3 rounded col-span-2"
//           >
//             <option>Completed</option>
//             <option>Pending</option>
//             <option>Failed</option>
//           </select>
//         </div>

//         {/* BUTTONS */}
//         <div className="flex justify-end gap-4 mt-6">
//           <button
//             onClick={close}
//             className="px-6 py-2 bg-gray-300 rounded"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={() => save(form)}
//             className="px-6 py-2 bg-blue-600 text-white rounded"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientModel;




import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const ClientModel = ({ close, save, editData }) => {
  const [form, setForm] = useState({
    id: null,
    clientId: "",
    clientName: "",
    invoiceFile: null,   
    invoiceName: "",     
    date: "",
    amount: "",
    method: "",
    transactionId: "",
    status: "Pending",
  });

  useEffect(() => {
    if (editData) {
      setForm({
        ...editData,
        invoiceFile: null,
        invoiceName: editData.invoiceId || "",
      });
    }
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
            {editData ? "Edit Payment" : "Add Payment"}
          </h3>
          <X className="cursor-pointer" onClick={close} />
        </div>

        {/* FORM */}
        <div className="grid grid-cols-2 gap-4">
          <input
            name="clientId"
            placeholder="Client ID"
            value={form.clientId}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            name="clientName"
            placeholder="Client Name"
            value={form.clientName}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          {/* FILE INPUT */}
          <input
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg"
            onChange={(e) => {
              const file = e.target.files[0];
              setForm({
                ...form,
                invoiceFile: file,
                invoiceName: file?.name || "",
              });
            }}
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
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            name="transactionId"
            placeholder="Transaction ID"
            value={form.transactionId}
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <select
            name="method"
            value={form.method}
            onChange={handleChange}
            className="border p-3 rounded col-span-2"
          >
            <option value="">Payment Method</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>PayPal</option>
            <option>Bank Transfer</option>
          </select>

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

        {/* SHOW FILE NAME */}
        {form.invoiceName && (
          <p className="text-sm text-gray-500 mt-2">
            Selected Invoice: {form.invoiceName}
          </p>
        )}

        {/* BUTTONS */}
        <div className="flex justify-end gap-4 mt-6">
          <button onClick={close} className="px-6 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={() => save(form)}
            className="px-6 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientModel;
