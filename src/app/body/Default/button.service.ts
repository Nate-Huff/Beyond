import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ButtonModel } from "./button-item.model";

@Injectable({

    providedIn: 'root'

})

export class ButtonService{

    private baseUrl:string = "https://beyond-app-5f18d-default-rtdb.firebaseio.com/";
    private buttonEndPoint:string = "buttons/.json";

    constructor(private http:HttpClient){}

    public getButtons() {

        return this.http.get<ButtonModel []>(this.baseUrl + this.buttonEndPoint);

    }
    
}