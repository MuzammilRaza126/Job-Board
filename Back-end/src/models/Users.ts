import mongoose, { Schema, Document } from 'mongoose';

// export interface RegisterIUser extends Document {
//   name:string;
//   email: string;
//   password: string;
// }
// export interface LoginIUser extends Document {
//   email: string;
//   password: string;
// }

// const signupUserSchema = new Schema<RegisterIUser>({
//   name: { type: String, required: true},
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// });

// const loginUserSchema = new Schema<LoginIUser>({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// });

// export const RegisterUser = mongoose.model<RegisterIUser>('SignupUser', signupUserSchema);
// export const LoginUser = mongoose.model<LoginIUser>('LoginUser', loginUserSchema);


export interface IUser extends Document {
  name:string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;

