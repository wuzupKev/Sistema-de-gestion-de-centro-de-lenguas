import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Schedule } from '../../../models/schedule.model';
import { ScheduleService } from '../../../services/schedule.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  schedules: any = [];
  formHorario: FormGroup;

  constructor(
    private scheduleService: ScheduleService,
    private fb: FormBuilder,private http:HttpClient
  ) {
    this.formHorario = this.fb.group({
      dia: ['', Validators.required],
      horainicio: ['', Validators.required],
      horafinal: ['', Validators.required],
      maestro: ['', Validators.required],
      clase: ['', Validators.required],
      salon: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.http.get<Schedule[]>("http://localhost:8080/schedules/info/4").subscribe((schedule:any)=>{this.schedules=schedule});
  }



}

