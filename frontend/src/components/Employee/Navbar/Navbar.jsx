<<<<<<< HEAD

=======
>>>>>>> 62839f2dbd0ea6b35ceb0b15d9e629fc35e15f58
import { Menu } from "lucide-react";

const Navbar = ({ toggleSidebar ,isSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-99 bg-white shadow-sm h-16 flex items-center px-4 w-full">
      <button onClick={toggleSidebar}>
        <Menu className={`${isSidebarOpen ? "hidden" : "visible"}`} />
      </button>

      {/* <h1 className="ml-10 font-semibold">Employee Dashboard</h1> */}
    </header>
  );
};

export default Navbar;
