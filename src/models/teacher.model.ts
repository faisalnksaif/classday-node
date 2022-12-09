import { Teacher } from "@/interfaces/teacher.interface";
import { model, Schema, Document } from "mongoose";

const teacherSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    age: {
        type: Schema.Types.Number,
    },
    subject: {
        type: Schema.Types.String,
        required: true
    },
    isClassTeacher: {
        type: Schema.Types.Boolean,
    }
})

const TeacherModel = model<Teacher & Document>('Teacher', teacherSchema);
export default TeacherModel;