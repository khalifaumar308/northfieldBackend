import { Schema, model } from 'mongoose';
// import { data, details, topics, question,assesment, questions, subtopics } from '../resultTemplates/interface';

type student = {
  name: string;
  class: string;
  template: string;
  result: string;
  email: string;
}
// //  name: string;
// //     class: string;
// //     teacher: string;
// //     email: string;
// // absent: string
const studentSchema = new Schema<student>({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required:true,
  },
  email: {
    type: String,
    required:true,
  },
  template: {
    type: String,
    required:true,
  },
  result: {
    type: String,
    required:true,
  },
})
// const detailsSchema = new Schema<details>({
//   name: {
//     type: String,
//     required: true,
//   },
//   class: {
//     type: String,
//     required:true,
//   },
//   email: {
//     type: String,
//     required:true,
//   },
//   absent: {
//     type: String,
//     required:true,
//   },
//   teacher: {
//     type: String,
//     required:true
//   },

// })

// const questionSchema = new Schema<question>({
//   question: String,
//   status: String,
//   note: String
// })

// const assesmentSchema = new Schema<assesment>({
//   assesment: String,
//   rating: String
// })

// const studentSchema = new Schema({
//   details: detailsSchema,
//   topics: String,
//   assesments: [assesmentSchema],
//   emailSent: {
//     type: Boolean,
//     default: false
//   }
// })

// // const topicSchema = new Schema<topic>({

// // })
export const studentModel = model('Student', studentSchema); 