
import React from "react";
import { Download } from "lucide-react";

const billingData = [
  {
    invoice: "#A348",
    name: "Dr.Jacob Ryan",
    date: "04/03/2016",
    amount: "$40",
    tax: "10%",
    discount: "$5",
    total: "$39",
  },
  {
    invoice: "#A645",
    name: "Dr.Rajesh",
    date: "11/04/2016",
    amount: "$25",
    tax: "10%",
    discount: "$5",
    total: "$22",
  },
];

const Billing = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-6 text-sm text-slate-600 font-medium flex items-center gap-2">
        <span className="hover:text-indigo-600 cursor-pointer transition-colors">Home</span>
        <span className="text-slate-400">›</span>
        <span className="text-indigo-600">Billing</span>
      </div>

      {/* Card */}
      <div className="mb-6">
        <h2 className="text-5xl font-bold mb-2 text-slate-800">
          Billing
        </h2>
        <p className="text-slate-500 text-sm">Manage and track all your billing records</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100/50 overflow-hidden border border-indigo-100/50">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b-2 border-indigo-200">
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">Invoice No</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">Employee Name</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">Date</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">Amount</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">Tax</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">Discount</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-700">Total</th>
                <th className="py-4 px-6 text-center text-sm font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>

            <tbody>
              {billingData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 text-sm hover:bg-gradient-to-r hover:from-indigo-50/30 hover:to-purple-50/30 transition-all duration-200 group"
                >
                  <td className="py-4 px-6 font-semibold">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">
                      {item.invoice}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-indigo-600 cursor-pointer font-medium hover:text-indigo-800 transition-colors">
                    {item.name}
                  </td>
                  <td className="py-4 px-6 text-slate-600">{item.date}</td>
                  <td className="py-4 px-6 text-slate-700 font-medium">{item.amount}</td>
                  <td className="py-4 px-6">
                    <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-semibold">
                      {item.tax}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                      {item.discount}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-bold text-slate-900 text-base">{item.total}</td>
                  <td className="py-4 px-6 flex justify-center">
                    <button className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110 transform">
                      <Download size={18} />
                    </button>
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

export default Billing;



// import React from "react";
// import { Download } from "lucide-react";

// const billingData = [
//   {
//     invoice: "#A348",
//     name: "Dr.Jacob Ryan",
//     date: "04/03/2016",
//     amount: "$40",
//     tax: "10%",
//     discount: "$5",
//     total: "$39",
//   },
//   {
//     invoice: "#A645",
//     name: "Dr.Rajesh",
//     date: "11/04/2016",
//     amount: "$25",
//     tax: "10%",
//     discount: "$5",
//     total: "$22",
//   },
// ];

// const Billing = () => {
//   return (
//     <div className="p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
//       {/* Page Header */}
//       <div className="mb-6 text-sm text-slate-600 font-medium flex items-center gap-2">
//         <span className="hover:text-indigo-600 cursor-pointer transition-colors">Home</span>
//         <span className="text-slate-400">›</span>
//         <span className="text-indigo-600">Billing</span>
//       </div>

//       {/* Card Header */}
//       <div className="mb-6">
//         <h2 className="text-5xl font-bold mb-2 text-slate-800">Billing</h2>
//         <p className="text-slate-500 text-sm">
//           Manage and track all your billing records
//         </p>
//       </div>

//       <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100/50 overflow-hidden border border-indigo-100/50">
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse billing-table">
//             <thead>
//               <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b-2 border-indigo-200">
//                 <th>Invoice No</th>
//                 <th>Employee Name</th>
//                 <th>Date</th>
//                 <th>Amount</th>
//                 <th>Tax</th>
//                 <th>Discount</th>
//                 <th>Total</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {billingData.map((item, index) => (
//                 <tr key={index}>
//                   <td data-label="Invoice No">
//                     <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">
//                       {item.invoice}
//                     </span>
//                   </td>

//                   <td data-label="Employee Name" className="text-indigo-600 font-medium">
//                     {item.name}
//                   </td>

//                   <td data-label="Date">{item.date}</td>

//                   <td data-label="Amount">{item.amount}</td>

//                   <td data-label="Tax">
//                     <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-semibold">
//                       {item.tax}
//                     </span>
//                   </td>

//                   <td data-label="Discount">
//                     <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
//                       {item.discount}
//                     </span>
//                   </td>

//                   <td data-label="Total" className="font-bold">
//                     {item.total}
//                   </td>

//                   <td data-label="Actions" className="flex justify-center">
//                     <button className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
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
