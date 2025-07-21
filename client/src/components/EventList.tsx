import { useEffect, useState } from "react";
import { toast } from "sonner";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  category: string;
  archived?: boolean;
  notes?: string;
};

const categoryStyles: Record<string, string> = {
  Work: "bg-amber-100 text-gray-700",
  Personal: "bg-green-100 text-gray-700",
  Other: "bg-gray-100 text-gray-700",
};

const categories = ["All", "Work", "Personal", "Other"];

const EventList = ({ isArchived }: { isArchived: boolean }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_API}/events`)
      .then((res) => res.json())
      .then((data) => setEvents(data.data))
      .catch(() => setEvents([]));
  }, []);

  const handleArchive = (id: string) => {
    fetch(`${import.meta.env.VITE_SERVER_API}/events/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents((prev) => prev.filter((event) => event.id !== id));
        toast.success(data.message);
      })
      .catch((error) => console.error("Error archiving event:", error));
  };

  const filteredEvents =
    filter === "All"
      ? events.filter((event) => event.archived === isArchived)
      : events.filter(
          (event) => event.category === filter && event.archived === isArchived
        );

  const handleDelete = (id: string) => {
    fetch(`${import.meta.env.VITE_SERVER_API}/events/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setEvents((prev) => prev.filter((event) => event.id !== id));
        toast.success("Event deleted successfully");
      })
      .catch((error) => console.error("Error deleting event:", error));
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-xl border-2 border-[#DCE6EF] overflow-y-scroll h-[700px] w-full">
      <div className="mb-4 flex gap-2 flex-wrap items-center">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1 rounded-full font-medium border cursor-pointer ${
              filter === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-gray-700 border-gray-200"
            } transition-colors`}
            onClick={() => setFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>
      <ul>
        {filteredEvents.length === 0 && (
          <li className="py-8 text-center text-gray-400">No events found.</li>
        )}
        {filteredEvents.map((event) => (
          <li
            key={event.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between border-b last:border-b-0 py-4 gap-2">
            <div>
              <div className="font-semibold text-lg text-gray-900">
                {event.title}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mt-1">
                <span>{event.date}</span>
                <span>{event.time}</span>
              </div>
              {event.notes && (
                <div className="mt-1 text-gray-700 text-sm">{event.notes}</div>
              )}
            </div>
            <div className="flex items-center gap-3 mt-2 sm:mt-0">
              <span
                className={`px-3 py-1 rounded-lg font-medium text-sm ${
                  categoryStyles[event.category] || categoryStyles.Other
                }`}>
                {event.category}
              </span>
              <button
                title="Archive"
                onClick={() => handleArchive(event.id)}
                className="p-2 rounded hover:bg-gray-100 transition-colors cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24">
                  <path
                    d="M4 7V6a2 2 0 012-2h12a2 2 0 012 2v1M9 11v6m6-6v6M10 17h4a2 2 0 002-2V7H8v8a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {/* <button
                title="Edit"
                disabled
                className="p-2 rounded hover:bg-blue-100 transition-colors cursor-pointer">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24">
                  <path
                    d="M15.232 5.232l3.536 3.536M9 13l6.232-6.232a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0L9 13z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button> */}
              <button
                title="Delete"
                onClick={() => handleDelete(event.id)}
                className="p-2 rounded hover:bg-red-200 transition-colors cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24">
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
