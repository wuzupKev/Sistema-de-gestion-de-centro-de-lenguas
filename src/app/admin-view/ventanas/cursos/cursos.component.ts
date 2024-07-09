import { Component } from '@angular/core';
import { CursoService } from '../../../services/curso.service';
import { Curso } from '../../../models/curso.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  curso: Curso = new Curso(0, '', '', '', 0, ''); // Variable con minúscula

  constructor(private cursoService: CursoService) {}

  onSubmit() {
    this.cursoService.createCurso(this.curso).subscribe(
      response => {
        alert('Curso creado exitosamente:');
        // Aquí podrías limpiar el formulario o hacer alguna otra acción después de la creación exitosa
        this.resetForm();
      },
      error => {
        alert('Error al crear curso:');
        console.error('Error al crear curso:', error);
      }
    );
  }

  resetForm() {
    this.curso = new Curso(0, '', '', '', 0, ''); // Reinicia el objeto curso
  }

  
}

