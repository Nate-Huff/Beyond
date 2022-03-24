import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ButtonModel } from "./button-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({

    providedIn: 'root'

})

export class ButtonService{

    constructor(private db:AngularFireDatabase){}

    public getButtons() {

        return this.db.list<ButtonModel>("buttons").valueChanges();

    }
    
}