import express from 'express';
import { StdController } from './student.controller';
const router = express.Router();
router.post('/create-student', StdController.createStudent);
