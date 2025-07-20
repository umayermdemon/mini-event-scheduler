import { Request, Response } from "express";
import { categorizeEvent } from "./event.utils";
import { Events } from "./event.memory";

// Function to create a new event
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

// Function to get all events
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

// Function to update the archived status of an event
const updateEventArchivedStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const eventIndex = Events.findIndex((event) => event.id === id);
  console.log(eventIndex);
  if (eventIndex === -1) {
    return res.status(404).json({ message: "Event not found." });
  }
  Events[eventIndex].archived = true;
  res.status(200).json({
    message: "Event archived successfully",
    data: Events[eventIndex],
  });
};

export const eventController = {
  createEvent,
  getEvents,
  updateEventArchivedStatus,
};
