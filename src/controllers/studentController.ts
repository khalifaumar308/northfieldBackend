import { studentModel } from "../models/studentModel";
import { RequestHandler } from "express";
import { sendMail } from "../email";
import firstTemplate from "../resultTemplates/firstTemplate";
import secondTemplate from "../resultTemplates/secondTemplate";

export const studentController: RequestHandler = async (req, res) => {
  res.set('Access-Control-Allow-Origin', 'https://northfield-frontend.vercel.app');
  // res.set('Access-Control-Allow-Origin', 'http://localhost:5173');

  try {
    const data = req.body
    // console.log(data)
    const { details, topics, assesments, template } = data
    const user = await studentModel.findOne({
      "email": details.email,
      "name": details.name,
    });
    if (user) {
        return res.status(400).json({ error: "Result already registered." });
    }

    //add student to database
    const student = await studentModel.create({
      email: details.email,
      name: details.name,
      template,
      class: details.class,
      result: JSON.stringify(data)
    });
    const reportCard = template == 2 ? await secondTemplate(data) : await firstTemplate(data)
    console.log(details.email)
    const rt = await sendMail({
      name: details.name,
      email: details.email,
      schoolName: 'NorthField Montessori'
    }, reportCard) 
    return res.status(201).json({ message: "Student Result Saved successfully and result sent" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
