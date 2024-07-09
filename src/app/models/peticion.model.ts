export class Peticion {

    idstudentxcoursexapplication: number;
    student: string;
    course: number;
    status: number;

constructor(
    idstudentxcoursexapplication: number,
    student: string,    
    course: number,
    status: number,

) {
    this.idstudentxcoursexapplication = idstudentxcoursexapplication,
    this.student = student,
    this.course = course,
    this.status = status
    }
}