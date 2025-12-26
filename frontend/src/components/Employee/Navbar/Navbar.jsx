

// import React from "react";
// import { Menu } from "lucide-react";

// const Navbar = ({ toggleSidebar }) => {
//   return (
//     <header className="sticky top-0 z-99 bg-white shadow-sm">
//       <div className="flex items-center gap-4 px-4 py-3">
//         <button
//           onClick={toggleSidebar}
//           className="p-2 rounded-md hover:bg-gray-100"
//         >
//           <Menu />
//         </button>

//         <h1 className="font-semibold text-gray-700">
//           Employee Dashboard
//         </h1>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



import { Menu } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm h-16 flex items-center px-4">
      <button onClick={toggleSidebar}>
        <Menu />
      </button>

      <h1 className="ml-4 font-semibold">Employee Dashboard</h1>
    </header>
  );
};

export default Navbar;
