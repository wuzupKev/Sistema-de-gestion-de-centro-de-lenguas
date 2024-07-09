import { Component, inject, Injectable, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
@Injectable(
  {
      providedIn:'root'
  })
export class UserViewComponent implements OnInit {
  apiUrl="http://localhost:8080";
  private  http=inject(HttpClient)
  users:any[]=[];
  private fb= inject(FormBuilder);
  private router =inject(Router);
  private route =inject(ActivatedRoute);
  idusers!:number;
  isedited=false;
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.idusers=this.route.snapshot.params["idusers"];// sacar el id de la cabecera 
    this.http.get<User[]>(this.apiUrl+"/users").subscribe((user:any)=>{this.users=user});
    if(this.idusers){
      this.isedited=true;
      this.userService.getUseById(this.idusers).subscribe(res=>{
        console.log(res)
        this.form.patchValue(res);
      })
    }
  }

  update(){
    const usr=this.form.value
    if(this.isedited){
      this.userService.update(this.idusers,usr).subscribe(res=>{
        alert("usuario actualizado")
        this.reloadComponent()
      })
    }
    else{
      this.create()
    }
    
  }

  form=this.fb.group({
    fullName:[''],
    dni:[''],
    age:[''],
    phone:[''],
    email:[''],
    password:[''],
    rol:['']
  });

  create(){
    const user= this.form.value;
    this.userService.create2(user)
    .subscribe(()=>{
       this.reloadComponent();
    });
}
reloadComponent(){
  let currentUrl=this.router.url;
  this.router.navigateByUrl('/',{
    skipLocationChange:true,
  }).then(()=>{
    this.router.navigate([currentUrl]);
  });
}

edit(id:number){
  console.log(id);
  this.router.navigateByUrl('/user-view/'+id);
}


}
