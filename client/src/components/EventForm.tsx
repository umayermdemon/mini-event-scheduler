import { useState } from "react";
import { categorizeEvent } from "../utils/categorizeEvent";

const EventForm = () => {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    notes: "",
    category: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    if (name === "title" || name === "notes") {
      const category = categorizeEvent(updatedForm.title, updatedForm.notes);
      updatedForm.category = category;
    }
    setForm(updatedForm);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const eventData = {
      title: form.title,
      date: form.date,
      time: form.time,
      notes: form.notes,
    };
    fetch("http://localhost:5000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setForm({
          title: "",
          date: "",
          time: "",
          notes: "",
          category: "",
        });
      })
      .catch((error) => {
        console.error("Error saving event:", error);
      });
    // Reset form after submission
    setForm({
      title: "",
      date: "",
      time: "",
      notes: "",
      category: "",
    });
  };

  return (
    <div className="rounded-b-2xl px-8 py-4" id="event-form">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto"
        autoComplete="off">
        <h1 className="text-3xl font-bold mb-8">Add New Event</h1>
        <div className="mb-6">
          <label className="block font-semibold mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            placeholder="Event Title"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={form.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2" htmlFor="date">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            placeholder="YYYY-MM-DD"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2" htmlFor="time">
            Time
          </label>
          <input
            id="time"
            name="time"
            type="time"
            required
            placeholder="HH:MM"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={form.time}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2" htmlFor="notes">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Additional notes"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={form.notes}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2" htmlFor="category">
            Category
          </label>
          <input
            id="category"
            name="category"
            type="text"
            placeholder=""
            className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none"
            value={form.category}
            readOnly
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
            Save Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
