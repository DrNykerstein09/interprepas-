import { Router } from "express";

const router: Router = Router();

import { getMessages, newMessage } from "../controllers/chatBotController";

router.post("/newMessage", newMessage);
router.get("/getMessages",  getMessages)

router.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

function ex(req: any, res: any, next: any) {
  console.log("hola");
  next();
}

export default router;
