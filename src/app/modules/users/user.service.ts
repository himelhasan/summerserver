import { IUserPreferences } from "./user.interface";
import userModel from "./user.model";

export const getAllUsersFromDB = async (): Promise<IUserPreferences[]> => {
  const getAllUsers = await userModel.find();
  return getAllUsers;
};
