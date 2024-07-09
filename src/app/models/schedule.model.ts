export class Schedule {
    idSchedules: number;
    professor: number;
    hours: number;
    day: number;
    subject: number;
    grade: number;
    application: number;
    classroom: number;
  
    constructor(
      idSchedules: number,
      professor: number,
      hours: number,
      day: number,
      subject: number,
      grade: number,
      application: number,
      classroom: number
    ) {
      this.idSchedules = idSchedules;
      this.professor = professor;
      this.hours = hours;
      this.day = day;
      this.subject = subject;
      this.grade = grade;
      this.application = application;
      this.classroom = classroom;
    }
  }
  