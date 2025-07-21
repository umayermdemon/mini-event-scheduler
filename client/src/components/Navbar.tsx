type NavbarProps = {
  onNavToggle: (section: string) => void;
  activeView: string;
};

const Navbar = ({ onNavToggle, activeView }: NavbarProps) => {
  return (
    <nav className="bg-gray-50 px-2 sm:px-4 py-3 rounded-xl w-full">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto w-full">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <span className="inline-flex items-center justify-center w-6 h-6 ">
            {/* <svg
              className="w-4 h-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24">
              <rect
                x="6"
                y="6"
                width="12"
                height="12"
                transform="rotate(45 12 12)"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                rx={2}
              />
            </svg> */}
            <img src="/icon.png" alt="QuickSched Icon" />
          </span>
          <span className="font-semibold text-lg text-gray-800">
            QuickSched
          </span>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a
            onClick={() => onNavToggle("add-event")}
            className={`text-gray-700 font-medium transition-colors cursor-pointer px-3 py-1 rounded-lg ${
              activeView === "add-event"
                ? "bg-blue-100 text-blue-700"
                : "hover:text-blue-600"
            }`}>
            Add Event
          </a>
          <a
            onClick={() => onNavToggle("my-events")}
            className={`text-gray-700 font-medium transition-colors cursor-pointer px-3 py-1 rounded-lg ${
              activeView === "my-events"
                ? "bg-blue-100 text-blue-700"
                : "hover:text-blue-600"
            }`}>
            My Events
          </a>
          <a
            onClick={() => onNavToggle("archived-events")}
            className={`text-gray-700 font-medium transition-colors cursor-pointer px-3 py-1 rounded-lg ${
              activeView === "archived-events"
                ? "bg-blue-100 text-blue-700"
                : "hover:text-blue-600"
            }`}>
            Archived Events
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
