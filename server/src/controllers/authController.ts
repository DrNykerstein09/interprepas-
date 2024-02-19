import { Request, Response, NextFunction } from "express";
import { User, IUser } from "../models/UserModel";
import jwt from "jsonwebtoken";
// import { sendEmail } from "../helpers/sendEmail";
const os = require("os");
import dotenv from "dotenv";
import { sendEmail } from "../helpers/sendEmail";

export const signup = async (req: Request, res: Response) => {
  try {
    const user: IUser = new User({
      mail: req.body.mail,
      password: req.body.password,
      name: req.body.name,
    }) as IUser;

    user.password = await user.encryptPassword(user.password);

    const savedUser = await user.save();

    //create token
    const token: string = jwt.sign(
      { _id: user._id },
      process.env.TOKEN_SECRET || "tokennnn",
      { expiresIn: 60 * 60 * 24 }
    );

    const link = `http://localhost:1000/api/auth/email/verify?token=${token}`;

    const sendMail = await sendEmail(user.mail, user.name, link);

    if (sendMail) {
      console.error("Error al enviar correo de verificación");
    } else {
      res.json({ savedUser, token });
    }
  } catch (error: any) {
    console.log(error);
    return res
      .status(500)
      .json({ error: error.message || "Error al crear usuario" });
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
  try {
    const token = req.query.token;

    if (!token) {
      return res.status(400).json({ error: "Token missing" });
    }

    const decoded: any = jwt.verify(
      token.toString(),
      process.env.TOKEN_SECRET || "tokennnn"
    );

    if (!decoded) {
      return res.status(400).json({ error: "Invalid token" });
    }

    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (user.isEmailConfirmed) {
      return res.status(400).json({ error: "Email already verified" });
    }

    user.isEmailConfirmed = true;
    await user.save();

    // Send a success response
    res.json("CORREO VERIFICADO");
  } catch (error: any) {
    res.status(500).json({ error: "Error al verificar email" });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ mail: req.body.mail });
    if (!user) return res.status(400).json("Correo no encontrado");

    const correctPassword: boolean = await (user as IUser).validatePassword(
      req.body.password
    );
    if (!correctPassword) return res.status(400).json("Contraseña incorrecta");

    if (!user.isEmailConfirmed) {
      return res.status(400).json("Correo no verificado");
    }

    const token: string = jwt.sign(
      { _id: user._id },
      process.env.TOKEN_SECRET || "tokentest"
    );

    res.json({ user, token });
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error.message || "Error al iniciar sesión" });
  }
};