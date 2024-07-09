import { HttpClient } from "@angular/common/http";
import { Injectable,inject } from "@angular/core";
import { Observable } from 'rxjs';
import { Peticion } from "../models/peticion.model";

@Injectable({
    providedIn: 'root'
  })
  export class PeticionService { 
    private apiUrl = 'http://localhost:8080/applications';
  
    constructor(private http: HttpClient) {}
  
    getPeticiones(): Observable<Peticion[]> {
      return this.http.get<Peticion[]>(`${this.apiUrl}/info`); // Obtener todos los usuarios
    }
  
    getPeticionById(id: number): Observable<Peticion> {
      return this.http.get<Peticion>(`${this.apiUrl}/${id}`); // Obtener un usuario por ID
    }
  
    createPeticion(peticion:Peticion): Observable< Peticion> { // Corrección en el método
      return this.http.post<Peticion>(this.apiUrl, peticion); // Crear un nuevo usuario
    }
  
    updatePeticion(id: number, peticion:Peticion): Observable<Peticion> {
      return this.http.put<Peticion>(`${this.apiUrl}/${id}`, peticion); // Actualizar un usuario existente
    }
  
    deletePeticion(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`); // Eliminar un usuario por ID
    }
  }