import dataModel from "../models/dataModel";
import { dataType } from "../models/dataModel";
import { RequestHandler } from "express";

export const addData: RequestHandler = async (req, res) => {
  const data = req.body
  const dclass = data["class"]

  try {
    const foundClass = dataModel.findOne({ class: dclass }).exec();
    if (foundClass) {
      return res
        .status(409)
        .json({"msg":"class data exists"})
    }
    const sdata = await dataModel.create({
      class: data.class,
      data: JSON.stringify(data.data),
      template:data.template
    })
    if (sdata) {
      return res
        .status(201)
        .json({"msg":"class data saved"})
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json({"msg":`${error}`})
  }
}

export const getData: RequestHandler = async (req, res) => {
  const cclass = req.query || req.params.class
  const foundData = await dataModel.findOne({ class: cclass }).exec()
  if (foundData) {
    const data = foundData.data
    return res
      .status(200)
      .json({data:JSON.parse(data)})
  }
  return res.status(404)
}