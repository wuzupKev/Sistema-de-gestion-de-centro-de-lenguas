import { Component } from '@angular/core';
import { Peticion } from '../../models/peticion.model';
import { PeticionService } from '../../services/peticion.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.css'
})
export class ApplicationsComponent {

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
      course: [''],
      status: [''],
    });
  }

  ngOnInit(): void {
    this.getUpdatedData();
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
