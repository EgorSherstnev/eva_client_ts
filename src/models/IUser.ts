export interface IUser {
   email: string;
   isActivated: boolean;
   id: string;
}

export interface IUserLogin {
   email: string;
   password: string;
}

export interface IUserRegistration extends IUserLogin {
   userName: string;
   company: string;
}
