import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObject:Login;
  constructor(private http: HttpClient,private router:Router){
    this.loginObject=new Login();
  }

  onlogin(){
    this.http.post('http://localhost:8080/users/login',this.loginObject).subscribe(res=>{
      if(res){
        alert("login success")
        this.router.navigateByUrl('/user-view');
      }else if(res)
      {
        alert("malll")
      }
    })
}

}
export class Login{
  email:string;
  password:string;
  constructor(){
    this.email='';
    this.password='';
  }
}
