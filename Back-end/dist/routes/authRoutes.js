"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authControllers_1 = require("../controllers/authControllers");
const router = express_1.default.Router();
// Signup route
router.post('/signup', authControllers_1.signup);
// Login route
router.post('/login', authControllers_1.login);
// Logout route
router.get('/logout', authControllers_1.logout);
exports.default = router;
