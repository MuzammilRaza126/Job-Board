import express from 'express';
import { login, logout, register } from '../controllers/authControllers';
import { authMiddleware } from '../shared/utils/authMiddleware';
// import { getCurrentUser } from '../controllers/userController';

const router = express.Router();

// Signup route
router.post('/signup', register);

// Login route
router.post('/login', login);

// Curr User

// router.get('/me', authMiddleware, getCurrentUser);

// Logout route
router.get('/logout', logout);

export default router;
