export interface IUser {
   email: string;
   isActivated: boolean;
   id: string;
}

export interface IUserRegistration {
   userName: string;
   company: string;
   email: string;
   password: string;
}