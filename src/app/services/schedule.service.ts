import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Schedule } from "../models/schedule.model";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiUrl = 'http://localhost:8080/schedules';

  constructor(private http: HttpClient) {}

  getSchedule(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.apiUrl); // Obtener todos los horarios
  }

  getScheduleById(id: number): Observable<Schedule> {
    return this.http.get<Schedule>(`${this.apiUrl}/${id}`); // Obtener un horario por ID
  }

  createSchedule(schedule: any): Observable<Schedule> {
    return this.http.post<any>(this.apiUrl, schedule); // Crear un nuevo horario
  }

  updateSchedule(id: number, schedule: Schedule): Observable<Schedule> {
    return this.http.put<Schedule>(`${this.apiUrl}/${id}`, schedule); // Actualizar un horario existente
  }

  deleteSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); // Eliminar un horario por ID
  }
}
