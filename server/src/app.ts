import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/modules/event/event.route";
const app = express();

// app.use(cors({ origin: "http://localhost:5173" }));
app.use(cors({ origin: "https://quick-sched.vercel.app" }));
app.use(express.json());

app.use("/events", router);

app.get("/", (req: Request, res: Response) => {
  res.send("mini-event-scheduler server is running!");
});

export default app;
