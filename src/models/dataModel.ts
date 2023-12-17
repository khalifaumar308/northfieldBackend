import mongoose from "mongoose";
const Schema = mongoose.Schema;

export type dataType = {
  class: string;
  data: string;
  template: string;
}

const dataSchema = new Schema<dataType>({
  class: {
    type: String,
    required:true
  },
  data: {
    type: String,
    required:true
  },
  template: {
    type: String,
    required:true
  }
})

export default mongoose.model('Data', dataSchema);
