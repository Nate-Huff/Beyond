import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'fm-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  public onSubmit(data: any){
    console.log("Button clicked");
    console.log(data);

    this.auth.signup(data.value.email, data.value.password).subscribe(data => {console.log(data)});

    data.reset();
  }

}
