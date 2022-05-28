import { IAddress, IParent } from "./parent.interface";
import { ISchoolTransfer } from "./schoolTransfer.interface";
import { IStudentAdmissionDetails, IStudentPersonalDetails } from "./student.interface";

export interface IStudentAdmission {
  personalDetails: IStudentPersonalDetails
  admissionDetails: IStudentAdmissionDetails
  parentDetails: Omit<IParent, 'address'>
  address: IAddress
  schoolTransferDetails: ISchoolTransfer
}