import { Request, Response } from "express";
import {
  RegisterIUser,
  RegisterUser,
  LoginUser,
  LoginIUser,
} from "../models/Users";
import {
  hashPassword,
  comparePasswords,
  generateToken,
} from "../shared/utils/authUtils";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser: RegisterIUser | null = await RegisterUser.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const newUser: RegisterIUser = new RegisterUser({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const existingUser: LoginIUser | null = await LoginUser.findOne({ email });
    if (!existingUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Compare passwords
    const isMatch = await comparePasswords(password, existingUser.password);
    if (!isMatch) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // Generate and send the token
    const token = generateToken({ email });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    // Clear the JWT token
    res.status(200).json({ token: "" });
  } catch (error) {
    console.error("Error in logout:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
