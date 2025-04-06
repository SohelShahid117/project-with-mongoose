import { Student } from './student.interface';
import { StudentModel } from './student.modelSchema';

const createStdIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const StdServices = {
  createStdIntoDB,
};
