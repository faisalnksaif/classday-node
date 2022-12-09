import { Teacher } from "@/interfaces/teacher.interface";
import teacherModel from "@/models/teacher.model";

export class TeacherService {
    public teachers = teacherModel;

    createTeacher = async (name: String, age?: number, subject?: String, isClassTeacher?: Boolean) => {
        const newTeacher = {
            name: name,
            age: age,
            subject: subject,
            isClassTeacher: isClassTeacher
        }
        await teacherModel.create(newTeacher);
    }

    findAllTeachers = async () => {
        const teachers = await teacherModel.find();
        return teachers;
    }

    // findAllClassTeachers = async () => {
    //     // const findUser: User = this.users.find(user => user.id === userId);
    //     const teachers: ITeacher[] = await teacherModel.find(teacher => teacher.isClassTeacher===true);
    //     return teachers;
    // }

    public async findAllClassTeachers(): Promise<Teacher[]> {
        const findTeacher: Teacher[] = this.teachers.find({ isClassTeacher: true });
        return findTeacher;
    }
}