import { Schema, model } from "mongoose";
import { IUserPreferences } from "./user.interface";

const userSchema = new Schema<IUserPreferences>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumbers: { type: String, required: true },
  emailAddresses: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  notificationMethod: { type: String, enum: ["email", "sms", "both"], required: true },
  defaultAttendees: { type: Number, required: false },
});

const userModel = model<IUserPreferences>("User", userSchema);

export default userModel;
