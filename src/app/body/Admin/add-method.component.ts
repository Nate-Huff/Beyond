import{Component} from "@angular/core";
import { ButtonModel } from "../Default/button-item.model";
import { ButtonService } from "../Default/button.service";

@Component({
    selector: 'add-method',
    templateUrl: 'add-method.component.html',
    styleUrls: ['add-method.component.css']
})

export class AddMethodComponent{
    
    constructor(private ps:ButtonService){}

    ngOnInit(): void{}

    addMethod(method:ButtonModel){
       console.log("You pressed add method");
       console.log(method);
       this.ps.addMethod(method);
    }

}