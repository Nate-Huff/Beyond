import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-card', templateUrl: 'card-layout.component.html', styleUrls: ['card-layout.component.css']
})

export class CardComponent implements OnInit{
    
    change: any;

    constructor(){
        this.change = {
            name:'',
            date:'',
            author:'',
            image:''
        };
    }

    ngOnInit(){
    }



}