import mongoose, { Types } from "mongoose";
import validator from "validator";
import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

interface Querry {
  querry: string;
  answer: string;
}

export interface IUser extends Document {
  mail: string;
  isEmailConfirmed: boolean;
  password: string;
  name: string;
  querries?: Querry[];
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema({
  mail: {
    type: String,
    required: true,
    unique: true,
    rcase: true,
    validate: {
      validator: function (v: any) {
        return v !== null;
      },
      message: "El correo electrónico no puede ser null",
    },
  },
  isEmailConfirmed: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  querries: [
    {
      querry: {
        type: String,
      },
      answer: {
        type: String,
      },
    },
  ],
});

userSchema.methods.encryptPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);
