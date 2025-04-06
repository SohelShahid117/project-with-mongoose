import { Request, Response } from 'express';
import { StdServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await StdServices.createStdIntoDB(student);
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StdController = {
  createStudent,
};
