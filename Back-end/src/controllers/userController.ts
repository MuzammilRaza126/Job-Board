import { Request, Response } from "express";
import { RegisterIUser, RegisterUser } from "../models/Users";
// import User, { IUser } from '../models/User';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: RegisterIUser[] = await RegisterUser.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;
    const user: RegisterIUser | null = await RegisterUser.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getCurrentUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email } = req.body;
    const user: RegisterIUser | null = await RegisterUser.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// export const signup = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists.' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);
//     const newUser = new User({ email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User created successfully.' });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong.' });
//   }
// };

// export const login = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Authentication failed: Invalid credentials.' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Authentication failed: Invalid credentials.' });
//     }

//     const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });
//     res.status(200).json({ token });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong.' });
//   }
// };

// export const getCurrentUser = async (req: Request, res: Response) => {
//   try {
//     const user = await User.findById(req.userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found.' });
//     }

//     res.status(200).json({ user });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong.' });
//   }
// };
