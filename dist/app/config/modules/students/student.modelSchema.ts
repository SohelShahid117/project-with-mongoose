import { Schema, model, connect } from 'mongoose';
import { Student } from './student.interface';

// 2. Create a Schema corresponding to the document interface.
/*const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});
*/

const studentSchema = new Schema<Student>({
     id: {type:String,required:true},
     name:{
        firstName:{type:String,required:true},
        middleName:{type:String},
        lastName:{type:String,required:true},
      },
      //   gender: string;
      gender:['male','female'] , //this is enum type in TS
      dateOfBirth: {type:String},
      email: {type:String,required:true},
    //   avatar?: string;
      contactNumber: {type:String,required:true},
      emergencyContactNumber: {type:String,required:true},
      bloodGroup:[ 'A+' , 'A-' , 'B+' , 'B-' , 'AB+' , 'AB-' , 'O+' , 'O-'];
      presentAddress: {type:String,required:true},
      permanentAddress: {type:String,required:true},
      guardian: {
        fatherName: {type:String,required:true},
        fatherOccupation: {type:String,required:true},
        fatherContactNumber: {type:String,required:true},
        motherName: {type:String,required:true},
        motherOccupation: {type:String,required:true},
        motherContactNumber: {type:String,required:true},
     },
     localGuardian:{
        name: {type:String,required:true},
        occupation: {type:String,required:true},
        contactNumber: {type:String,required:true},
        address: {type:String,required:true},
     },
     profileImg: {type:String,required:true},
    //  isActive:['active','inActive']
     isActive:['active','blocked']
});
