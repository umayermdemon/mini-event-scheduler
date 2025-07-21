type NavbarProps = {
  onNavToggle: (section: string) => void;
};

const Navbar = ({ onNavToggle }: NavbarProps) => {
  return (
    <nav className="bg-gray-50 px-4 py-3 rounded-xl">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          {/* Simple diamond icon */}
          <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-gray-200">
            <svg
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
            </svg>
          </span>
          <span className="font-semibold text-lg text-gray-800">
            QuickSched
          </span>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <a
            onClick={() => onNavToggle("add-event")}
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors hidden sm:inline cursor-pointer">
            Add Event
          </a>
          <a
            onClick={() => onNavToggle("my-events")}
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors hidden sm:inline cursor-pointer">
            My Events
          </a>
          <a
            onClick={() => onNavToggle("archived-events")}
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors hidden sm:inline cursor-pointer">
            Archived Events
          </a>
          {/* Notification bell */}
          <button className="ml-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24">
              <path
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* User avatar placeholder */}
          <span className="ml-2 w-9 h-9 rounded-full bg-gray-300 border-2 border-gray-200 inline-block"></span>
        </div>
        {/* Mobile menu button (optional) */}
        {/* <button className="sm:hidden ml-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
