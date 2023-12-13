export interface IUser {
  firstName: string;
  lastName: string;
  phoneNumbers: string;
  emailAddresses: string;
  username: string;
  password: string;
}

export interface IUserPreferences extends IUser {
  notificationMethod: "email" | "sms" | "both";
  defaultAttendees: number;
}

const exampleUser: IUserPreferences = {
  firstName: "John",
  lastName: "Doe",
  phoneNumbers: "1234567890",
  emailAddresses: "john.doe@example.com",
  username: "john.doe@example.com",
  password: "hashedPassword123", // This should be hashed in real-world scenarios
  notificationMethod: "email",
  defaultAttendees: 2,
};

console.log(exampleUser);
