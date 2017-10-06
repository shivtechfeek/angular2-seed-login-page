import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'login-screen',
    templateUrl: './login.component.html',  
    styleUrls:['./login.component.css']   
})
export class LoginComponent implements OnInit {
    constructor(private router: Router) {
     }
   
    ngOnInit() { }
    
    loginUser() {        
        this.router.navigate(["/home"]);                  
    }
}
    
