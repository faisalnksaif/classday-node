import studentModel from "@/models/student.model";

export class StudentService {
    creat = async (name: String, age?: number) => {
        const newStudent = {
            name: name,
            age: age,
        }
        await studentModel.create(newStudent);
    }
}