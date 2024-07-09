export class Curso {

    idcourses: number;
    name: string;
    description: string;
    language: string;
    level: number;
    codigo: string;

constructor(
    idcourses: number,
    name: string,
    description: string,
    language: string,
    level: number,
    codigo: string,

) {

    this.idcourses = idcourses,
    this.name = name,
    this.description = description,
    this.language = language,
    this.level = level,
    this.codigo = codigo
    }
}