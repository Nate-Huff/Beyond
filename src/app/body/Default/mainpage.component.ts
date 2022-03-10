import{Component} from "@angular/core";
import { ButtonModel } from "./button-item.model";
import { ButtonService } from "./button.service";

@Component({
    selector: 'app-mainpage',
    templateUrl: 'mainpage.component.html',
    styleUrls: ['mainpage.component.css']
})

export class MainPageComponent{
    buttons: ButtonModel [] = [];

    constructor(private service:ButtonService){
        
    }

    ngOnInit(): void{

        console.log("Fetch data");
        this.service.getButtons().subscribe(data => {
            console.log(data);
            for(var button of data){
                this.buttons.push(button);
            }
        });

    }

}