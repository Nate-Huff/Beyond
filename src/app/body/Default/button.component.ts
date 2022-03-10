import { Component, Input } from "@angular/core";

@Component({
    
    selector: 'beyond-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.css']

})

export class ButtonComponent{

    @Input() link:string;
    @Input() title:string;
    @Input() description:string;

    constructor(){

        this.link = "";
        this.title = "";
        this.description = "";

    }

}