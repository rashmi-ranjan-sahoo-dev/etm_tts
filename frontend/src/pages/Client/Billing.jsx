// import React from "react";
// import { Download } from "lucide-react";

// const billingData = [
//   {
//     invoice: "#A348",
//     name: "Feasibility Study",
//     date: "04/03/2016",
//     amount: "$40",
//     tax: "10%",
//     discount: "$5",
//     total: "$39",
//   },
//   {
//     invoice: "#A645",
//     name: "Requirement gathering and analysis",
//     date: "11/04/2016",
//     amount: "$25",
//     tax: "10%",
//     discount: "$5",
//     total: "$22",
//   },
// ];

// const handleDownload = () => {
//     const url = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "DemoFile.pdf"; 
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

// const Billing = () => {
//   return (
//     <div className="p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
//       {/* Page Header */}
//       <div className="mb-6 text-sm text-slate-600 font-medium flex items-center gap-2">
//         <span className="hover:text-indigo-600 cursor-pointer transition-colors">
//           Home
//         </span>
//         <span className="text-slate-400">›</span>
//         <span className="text-indigo-600">Billing</span>
//       </div>

//       {/* Card */}
//       <div className="mb-6">
//         <h2 className="text-5xl font-bold mb-2 text-slate-800">Billing</h2>
//         <p className="text-slate-500 text-sm">
//           Manage and track all your billing records
//         </p>
//       </div>

//       <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100/50 overflow-hidden border border-indigo-100/50">
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b-2 border-indigo-200">
//                 <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
//                   Invoice No
//                 </th>
//                 <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
//                  Invoice Detail
//                 </th>
//                 <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
//                   Date
//                 </th>
//                 <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
//                   Amount
//                 </th>
//                 <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
//                   Tax
//                 </th>
//                 <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
//                   Discount
//                 </th>
//                 <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
//                   Total
//                 </th>
//                 <th className="py-4 px-6 text-center text-sm font-semibold text-slate-700">
//                   Actions
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {billingData.map((item, index) => (
//                 <tr
//                   key={index}
//                   className="border-b border-slate-100 text-sm hover:bg-gradient-to-r hover:from-indigo-50/30 hover:to-purple-50/30 transition-all duration-200 group"
//                 >
//                   <td
//                     className="py-4 px-6 font-semibold"
//                     data-label="Invoice No"
//                   >
//                     <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">
//                       {item.invoice}
//                     </span>
//                   </td>
//                   <td className="py-4 px-6 cursor-pointer font-medium hover:text-indigo-800 transition-colors" data-label="Invoice Detail">
//                     {item.name}
//                   </td>
//                   <td className="py-4 px-6 text-slate-600" data-label="Date">{item.date}</td>
//                   <td className="py-4 px-6 text-slate-700 font-medium" data-label="Amount">
//                     {item.amount}
//                   </td>
//                   <td className="py-4 px-6"data-label="Tax">
//                     <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-semibold">
//                       {item.tax}
//                     </span>
//                   </td>
//                   <td className="py-4 px-6"data-label="Discount">
//                     <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
//                       {item.discount}
//                     </span>
//                   </td>
//                   <td className="py-4 px-6 font-bold text-bold text-base" data-label="Total">
//                     {item.total}
//                   </td>
//                   <td className="py-4 px-6 flex justify-center">
//                     <button className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110 transform" onClick={handleDownload}>
//                       <Download size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Billing;

import React from "react";
import { Download, FileText } from "lucide-react";

// NOTE:
// This data structure mirrors the fields used in Employee Accounts -> ClientPayment.jsx
// so the client can see the same billing details (amount, tax, discount, total, status, etc.).
const billingData = [
  {
    id: 201,
    clientId: "C101",
    clientName: "Alisha Jain",
    invoiceId: "INV001.pdf",
    date: "2023-09-01",
    amount: 150,
    tax: 0,
    discount: 0,
    total: 150,
    method: "Credit Card",
    transactionId: "TXN12345",
    status: "Completed",
  },
  {
    id: 202,
    clientId: "C102",
    clientName: "Bobby Ghosh",
    invoiceId: "INV002.pdf",
    date: "2023-09-02",
    amount: 200,
    tax: 0,
    discount: 0,
    total: 200,
    method: "Bank Transfer",
    transactionId: "TXN12346",
    status: "Pending",
  },
];

const handleDownload = (invoiceId) => {
  // Placeholder behaviour – wire this to your real invoice URLs if available
  if (!invoiceId) {
    alert("No invoice file available to download.");
    return;
  }

  const link = document.createElement("a");
  link.href = invoiceId; // e.g. `/invoices/${invoiceId}` if you serve them from public folder
  link.download = invoiceId;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ClientBilling = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-6 text-sm text-slate-600 font-medium flex items-center gap-2">
        <span className="hover:text-indigo-600 cursor-pointer transition-colors">
          Home
        </span>
        <span className="text-slate-400">›</span>
        <span className="text-indigo-600">Billing</span>
      </div>

      {/* Card */}
      <div className="mb-6">
        <h2 className="text-5xl font-bold mb-2 text-slate-800">Billing</h2>
        <p className="text-slate-500 text-sm">
          View and download all billing records from the accounts section
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100/50 overflow-hidden border border-indigo-100/50">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b-2 border-indigo-200">
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                  Invoice No
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                  Client
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                  Date
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                  Amount
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                  Tax
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                  Discount
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                  Total
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">
                  Status
                </th>
                <th className="py-4 px-6 text-center text-sm font-semibold text-slate-700">
                  Invoice File
                </th>
              </tr>
            </thead>

            <tbody>
              {billingData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 text-sm hover:bg-gradient-to-r hover:from-indigo-50/30 hover:to-purple-50/30 transition-all duration-200 group"
                >
                  <td
                    className="py-4 px-6 font-semibold"
                    data-label="Invoice No"
                  >
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">
                      {item.invoiceId}
                    </span>
                  </td>
                  <td
                    className="py-4 px-6 cursor-pointer font-medium hover:text-indigo-800 transition-colors"
                    data-label="Client"
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-800">
                        {item.clientName}
                      </span>
                      <span className="text-xs text-slate-500">
                        {item.clientId}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-600" data-label="Date">
                    {item.date}
                  </td>
                  <td
                    className="py-4 px-6 text-slate-700 font-medium"
                    data-label="Amount"
                  >
                    ${item.amount}
                  </td>
                  <td className="py-4 px-6" data-label="Tax">
                    <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-semibold">
                      ${item.tax ?? 0}
                    </span>
                  </td>
                  <td className="py-4 px-6" data-label="Discount">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                      ${item.discount ?? 0}
                    </span>
                  </td>
                  <td
                    className="py-4 px-6 font-bold text-bold text-base"
                    data-label="Total"
                  >
                    $
                    {item.total ??
                      (Number(item.amount || 0) +
                        Number(item.tax || 0) -
                        Number(item.discount || 0))}
                  </td>
                  <td className="py-4 px-6" data-label="Status">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : item.status === "Pending"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 flex justify-center">
                    {item.invoiceId ? (
                      <button
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110 transform text-xs font-medium"
                        onClick={() => handleDownload(item.invoiceId)}
                      >
                        <FileText size={16} />
                        <Download size={16} />
                      </button>
                    ) : (
                      <span className="text-xs text-slate-400">
                        No invoice
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientBilling;