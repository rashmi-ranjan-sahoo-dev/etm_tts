
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
