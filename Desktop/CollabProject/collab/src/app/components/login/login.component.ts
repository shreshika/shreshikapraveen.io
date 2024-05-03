import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(){}
ngOnInit(): void {
    
}
registerForm=new FormGroup({
  username:new FormControl("",[Validators.required]),
  password:new FormControl(""),
  remember:new FormControl(""),

});

registerSubmited(){
  console.log(this.registerForm.value);
}

}