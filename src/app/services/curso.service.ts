import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Curso } from "../models/curso.model";

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://localhost:8080/courses';

  constructor(private http: HttpClient) {}

  getCurso(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/info`); // Obtener todos los horarios
  }

  getCursoById(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiUrl}/${id}`); // Obtener un horario por ID
  }

  createCurso(Curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.apiUrl, Curso); // Crear un nuevo horario
  }

  updateCurso(id: number, Curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/${id}`, Curso); // Actualizar un horario existente
  }

  deleteCurso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); // Eliminar un horario por ID
  }
}
