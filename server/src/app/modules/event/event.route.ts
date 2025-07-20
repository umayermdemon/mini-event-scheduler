import { Router } from "express";
import { eventController } from "./event.controller";

const router = Router();

router.post("/", eventController.createEvent);
router.get("/", eventController.getEvents);

export default router;
