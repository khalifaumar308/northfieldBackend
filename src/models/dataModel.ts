import mongoose from "mongoose";
const Schema = mongoose.Schema;

export type dataType = {
  class: string;
  data: string;
  template: string;
}

const dataSchema = new Schema<dataType>({
  class: String,
  data: String,
  template: String
})

export default mongoose.model('Data', dataSchema);
