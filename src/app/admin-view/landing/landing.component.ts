import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  private fb= inject(FormBuilder);
  private userService = inject(UserService);
  private router =inject(Router);
  private route =inject(ActivatedRoute);

  ngOnInit(): void {
  }

  form=this.fb.group({
    fullName:[''],
    dni:[''],
    age:[''],
    phone:[''],
    email:['']
  });
  reloadComponent(){
    let currentUrl=this.router.url;
    this.router.navigateByUrl('/',{
      skipLocationChange:true,
    }).then(()=>{
      this.router.navigate([currentUrl]);
    });
  }

  create(){
    const userform= this.form.value;
    this.userService.create(userform)
    .subscribe(()=>{
        alert("Tu informacion ha sido enviada se consejo academico")
        this.reloadComponent()
    });
}

}
