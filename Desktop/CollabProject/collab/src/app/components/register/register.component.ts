
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { register } from 'module';
import { error } from 'console';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  repeatPass: string='none'
constructor(public registerService:RegisterService){}

formData = {
  firstname: '',
  lastname: '',
  email: '',
  mobile:'',
  role:'',
  password:'',
  rpassword:''
};
ngOnInit(): void {
    
}

registerForm=new FormGroup({
  firstname:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
  lastname: new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
  email:new FormControl("",[Validators.required, Validators.email]),
  mobile:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern("[0-9].*")]),
  password:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
  rpassword:new FormControl(""),
  role:new FormControl("",[Validators.required]),
});

registerSubmited(data:any){
  if(this.Password.value==this.Rpassword.value){
    this.registerService.saveUsers(data).subscribe((res)=>{
      console.warn(res);
    })
    this.repeatPass='none'
  }
  else{
    this.repeatPass='inline'
  }
  
 
}
get FirstName(): FormControl {
  return this.registerForm.get("firstname") as FormControl;
}
get LastName(): FormControl {
  return this.registerForm.get("lastname") as FormControl;
}
get Email(): FormControl {
  return this.registerForm.get("email") as FormControl;
}
get Mobile(): FormControl {
  return this.registerForm.get("mobile") as FormControl;
}
get Password(): FormControl {
  return this.registerForm.get("password") as FormControl;
}
get Rpassword(): FormControl {
  return this.registerForm.get("rpassword") as FormControl;
}
get Role(): FormControl {
  return this.registerForm.get("role") as FormControl;
}
}