import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../../models/schedule.model';
import { ScheduleService } from '../../../services/schedule.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedule: Schedule[] = [];
  formSchedule: FormGroup;

  constructor(
    private scheduleService: ScheduleService,
    private fb: FormBuilder
  ) {
    this.formSchedule = this.fb.group({
      professor: ['', Validators.required],
      hours: ['', Validators.required],
      day: ['', Validators.required],
      subject: ['', Validators.required],
      grade: ['', Validators.required],
      application: ['', Validators.required],
      classroom: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getUpdatedData();
  }


  resetForm(): void {
    this.formSchedule.reset(); // Resetea el formulario reactivo
  }

  getUpdatedData(): void {
    this.scheduleService.getSchedule().subscribe(
      (schedules: Schedule[]) => {
        this.schedule = schedules;
      },
      error => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
}
