import { Schema, model, connect } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';

// 2. Create a Schema corresponding to the document interface.
/*const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});
*/

const userNameSchema = new Schema<UserName>({
        firstName:{type:String,required:true},
        middleName:{type:String},
        lastName:{type:String,required:true}
})

const guardianSchema = new Schema<Guardian>({
        fatherName: {type:String,required:true},
        fatherOccupation: {type:String,required:true},
        fatherContactNumber: {type:String,required:true},
        motherName: {type:String,required:true},
        motherOccupation: {type:String,required:true},
        motherContactNumber: {type:String,required:true},
})

const localGuardianSchema = new Schema<LocalGuardian>({
        name: {type:String,required:true},
        occupation: {type:String,required:true},
        contactNumber: {type:String,required:true},
        address: {type:String,required:true},
     })

const studentSchema = new Schema<Student>({
     id: {type:String,required:true},
     name:userNameSchema,
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
      guardian: guardianSchema,
      localGuardian:localGuardianSchema,
      profileImg: {type:String,required:true},
    //  isActive:['active','inActive']
     isActive:['active','blocked']
});


// 3. Create a Model.
// const User = model<IUser>('User', userSchema);

// const Student = model<UserName>("Student",studentSchema)
export const StudentModel = model<Student>("Student",studentSchema)