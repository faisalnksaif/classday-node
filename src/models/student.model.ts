import { IStudent } from "@/interfaces/student.interface";
import { model, Schema, Document } from "mongoose";

const studentSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    age: {
        type: Schema.Types.Number,
    }
})

const StudentModel = model<IStudent & Document>('Student', studentSchema);
export default StudentModel;