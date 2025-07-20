import { Request, Response } from "express";
import { categorizeEvent } from "./event.utils";
import { Events } from "./event.memory";

const createEvent = async (req: Request, res: Response) => {
  const { title, date, time, notes } = req.body;
  if (!title || !date || !time) {
    return res
      .status(400)
      .json({ message: "Title, date, and time are required." });
  }
  const category = categorizeEvent(title, notes);
  const newEvent = {
    id: Date.now().toString(),
    title,
    date,
    time,
    notes,
    archived: false,
    category,
  };
  Events.push(newEvent);
  res.status(201).json({
    message: "Event created successfully",
    data: newEvent,
  });
};

// GET /events: Retrieve all events, sorted by date and time.
const getEvents = async (req: Request, res: Response) => {
  const sortedEvents = [...Events].sort((a, b) => {
    return (
      new Date(`${a.date}T${a.time}`).getTime() -
      new Date(`${b.date}T${b.time}`).getTime()
    );
  });
  res.status(200).json({
    message: "Events retrieved successfully",
    data: sortedEvents,
  });
};

export const eventController = {
  createEvent,
  getEvents,
};
