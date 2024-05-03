import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';


const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    component:LoginComponent
  },
  
  {
    path:'dashboard/teachershp',
    component:TeacherhomeComponent
  },
  {
    path:'dashboard/studentshp',
    component:StudenthomeComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
