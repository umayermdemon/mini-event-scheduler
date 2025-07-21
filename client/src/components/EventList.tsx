import { useEffect, useState } from "react";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  category: string;
  notes?: string;
};

const categoryStyles: Record<string, string> = {
  Work: "bg-amber-100 text-gray-700",
  Personal: "bg-green-100 text-gray-700",
  Other: "bg-gray-100 text-gray-700",
};

const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data.data))
      .catch(() => setEvents([]));
  }, []);

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm overflow-y-scroll h-[700px]">
      <ul>
        {events.length === 0 && (
          <li className="py-8 text-center text-gray-400">No events found.</li>
        )}
        {events.map((event) => (
          <li
            key={event.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between border-b last:border-b-0 py-4 gap-2">
            <div>
              <div className="font-semibold text-lg text-gray-900">
                {event.title}
              </div>
              <div className="flex items-center gap-4 text-gray-500 text-sm mt-1">
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
                className="p-2 rounded hover:bg-gray-100 transition-colors">
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
              <button
                title="Delete"
                className="p-2 rounded hover:bg-gray-100 transition-colors">
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
