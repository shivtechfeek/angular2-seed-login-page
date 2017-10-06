import { Routes } from '@angular/router';



export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  {
    path: '',
    loadChildren: './layout/layout.module#LayoutModule',    
  },  
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

