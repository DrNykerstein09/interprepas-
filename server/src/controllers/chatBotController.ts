import { Request, Response, NextFunction } from "express";
import { User, IUser } from "../models/UserModel";
import jwt from "jsonwebtoken";

export const newMessage = async (req: Request, res: Response) => {
  const { userId, resp, message } = req.body;
  console.log(req.body);
  try {
    const user = await User.findById(userId);
    if (!user)
      return res.status(400).json({ message: "Usuario no encontrado" });
    if (!message)
      return res.status(400).json({ message: "Mensaje no puede ser vacío" });
    user.querries.push({ querry: message, answer: resp });
    await user.save();
  } catch (error) {}
};

export const getMessages = async (req: Request, res: Response) => {
  //   const { userId } = req.body;
  // const userId = req.params.userId;
  const userId = req.query.userId;
  console.log(userId);

  try {
    const user = await User.findById(userId, { querries: true });
    console.log(user);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
