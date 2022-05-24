import _ from 'lodash'
import studentModel from '@/models/student.model';
import { AddStudentDto, CreateStudentDto, GetStudentsDto } from '@/dtos/student.dto';
import { IStudent } from '@/interfaces/student.interface';
import parentModel from '@/models/parent.model';
import addressModel from '@/models/address.model';
import TCModel from '@/models/transferCertificate.model';
import { IAddress } from '@/interfaces/address.interface';
import { IParent } from '@/interfaces/parent.interface';
import { Schema } from 'mongoose';
import { HttpException } from '@/exceptions/HttpException';

class StudentService {
    public student = studentModel;
    public parent = parentModel
    public address = addressModel
    public tcModel = TCModel

    // to create a new student
    public async create(data: AddStudentDto): Promise<IStudent> {
        let prnt: any;
        // checking parent exists or not
        let parentExists = await this.parent.findOne({ mobileNumber: data.parent.mobileNumber })
        if (parentExists) {
            prnt = parentExists
        } else {
            let addr = await this.address.create(data.address)
            data.parent.address = addr._id
            prnt = await this.parent.create(data.parent)
        }
        // adding address and parent details in student req data
        data.student = {
            ...data.student,
            address: prnt.address,
            parent: prnt._id,
            mobileNumber: data.student.mobileNumber || prnt.mobileNumber
        }
        // checking student exists or not
        let studentExists = await this.student.findOne({
            mobileNumber: { $in: [data.parent.mobileNumber, data.student.mobileNumber] },
            name: data.student.name,
            address: data.student.address,
            parent: data.student.parent
        })
        // throwing error
        if (studentExists) {
            throw new HttpException(400, "Student already Exists")
        }
        // creating new student
        let stnt = await this.student.create(data.student)
        if (data.tc) {
            let tc = await this.tcModel.create(data.tc)
        }
        return stnt
    }
    // To get all the students
    public async getAll(data: GetStudentsDto): Promise<IStudent[]> {
        return this.student.find();
    }
}

export default StudentService;
