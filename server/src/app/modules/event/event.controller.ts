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
  const isExists = Events.find((event) => event.id === id);
  if (!isExists) {
    return res.status(404).json({ message: "Event not found." });
  }
  isExists.archived = !isExists.archived;
  res.status(200).json({
    message: `Event ${
      isExists.archived ? "archived" : "unarchived"
    } successfully`,
    data: isExists,
  });
};

// Function to delete an event
const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const isExists = Events.find((event) => event.id === id);
  if (!isExists) {
    return res.status(404).json({ message: "Event not found." });
  }
  const updatedEvents = Events.filter((event) => event.id !== id);
  Events.length = 0;
  Events.push(...updatedEvents);
  res.status(200).json({
    message: "Event deleted successfully",
    data: null,
  });
};

export const eventController = {
  createEvent,
  getEvents,
  updateEventArchivedStatus,
  deleteEvent,
};
