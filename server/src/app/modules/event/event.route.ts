import { Router } from "express";
import { eventController } from "./event.controller";

const router = Router();

router.post("/", eventController.createEvent);
router.get("/", eventController.getEvents);
router.put("/:id", eventController.updateEventArchivedStatus);
router.delete("/:id", eventController.deleteEvent);

export default router;
