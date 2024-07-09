import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionService } from '../../services/peticion.service';
import { Peticion } from '../../models/peticion.model';

@Component({
  selector: 'app-allows',
  templateUrl: './allows.component.html',
  styleUrls: ['./allows.component.css'] // Corrección del nombre de la propiedad
})
export class AllowsComponent implements OnInit {
  form: FormGroup;
  idstudentxcoursexapplication: number;

  constructor(
    private route: ActivatedRoute,
    private peticionService: PeticionService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nombrecompleto: '',
      cedula: '',
      correo: '',
      curso: '',
      activo: '',
      contrasena: '',
      status: ''
    });
    this.idstudentxcoursexapplication = 0; // Inicializar correctamente
  }

  ngOnInit(): void {
    this.idstudentxcoursexapplication = +this.route.snapshot.paramMap.get('id')!;
    this.peticionService.getPeticionById(this.idstudentxcoursexapplication).subscribe(user => {
      this.form.patchValue(user);
    });
  }

  updatePeticion(): void {
    if (this.form.valid) {
      this.peticionService.updatePeticion(this.idstudentxcoursexapplication, this.form.value).subscribe(() => {
        this.router.navigate(['/applications']);
      });
    }
  }
}
