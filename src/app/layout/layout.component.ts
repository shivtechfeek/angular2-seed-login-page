import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',      
})
export class LayoutComponent implements OnInit {
    constructor(private router: Router) {
     }
   

     ngOnInit() {       
        if (this.router.url === '/') {
            this.router.navigate(['/home']);
        }
    }
    
    
}
    
