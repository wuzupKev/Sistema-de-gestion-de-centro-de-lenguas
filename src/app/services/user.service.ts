import { HttpClient } from "@angular/common/http";
import { Injectable,inject } from "@angular/core";
import { UserForm } from "../models/userform";
import { User } from "../models/user";

@Injectable(
{
    providedIn:'root'
})

export class UserService{
    apiUrl="http://localhost:8080";
    private  http=inject(HttpClient);
    constructor(){

    }

    getAllUsers(){
        this.http.get<User[]>(this.apiUrl+"/users");
    }
    create(user:any){
        return this.http.post<UserForm>(this.apiUrl+"/users/formulario",user);
    }

    create2(user:any){
        return this.http.post<any>(this.apiUrl+"/users",user);
    }

    update(idusers:number,user:any){
        return this.http.put<any>(this.apiUrl+'/users/'+idusers,user);
    }

    getUseById(idusers:number){
        return this.http.get<any>(this.apiUrl+'/users/'+idusers);
    }
}