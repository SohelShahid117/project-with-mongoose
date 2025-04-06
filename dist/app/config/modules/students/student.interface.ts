//interface-->schema-->model-->dbQuery

import { Schema, model, connect } from 'mongoose';

//https://mongoosejs.com/docs/typescript.html

// 1. Create an interface representing a document in MongoDB.
// interface Student {

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
};
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Student = {
  id: string;
  name: UserName;
  //   gender: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  avatar?: string;
  contactNumber: string; //as count 0 so here type is string
  emergencyContactNumber: string; //as count 0 so here type is string
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  //   guardian: {
  //     fatherName: string;
  //     fatherOccupation: string;
  //     fatherContactNumber: string;
  //     motherName: string;
  //     motherOccupation: string;
  //     motherContactNumber: string;
  //   };
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg: string; //akane url link t hobe so type is string
  //   isActive: 'active' | 'inActive';
  isActive: ['active', 'blocked'];
};
