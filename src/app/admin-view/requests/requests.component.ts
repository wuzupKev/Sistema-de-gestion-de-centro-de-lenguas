import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Peticion } from '../../models/peticion.model';
import { PeticionService } from '../../services/peticion.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  peticion: Peticion[] = [];
  form: FormGroup;

  constructor(
    private peticionService: PeticionService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      idstudentxcoursexapplication: [''],
      student: [''],
      course: ['']
    });
  }

  ngOnInit(): void {
    this.getUpdatedData();
  }

  createPeticion(): void {
    const peticionData = this.form.value;
    const newPeticion = new Peticion(
      peticionData.idstudentxcoursexapplication,
      peticionData.student,
      peticionData.course,
      peticionData.status
    );

    this.peticionService.createPeticion(newPeticion).subscribe(
      () => {
        alert('Datos Ingresados!');
        this.getUpdatedData(); // Actualiza los datos después de crear una petición
      },
      error => {
        console.error('Error al enviar los datos:', error);
        alert('Error al enviar los datos');
      }
    );
  }

  getUpdatedData(): void {
    this.peticionService.getPeticiones().subscribe(
      (peticiones: Peticion[]) => {
        this.peticion = peticiones;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
}
