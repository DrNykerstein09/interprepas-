import { Router } from "express";
// import { TokenValidation } from "../helpers/validateToken";
// import hola from "../views/hola.ejs";
// const  .]=0=-56\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ = require("multer");

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

const router: Router = Router();

import { signup, verifyEmail, signin } from "../controllers/authController";


router.get("/email/verify", verifyEmail);
router.post("/signin", signin);
router.post("/signup", signup);


router.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

function ex(req: any, res: any, next: any) {
  console.log("hola");
  next();
}

export default router;
