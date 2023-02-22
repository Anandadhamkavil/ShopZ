import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
// register form group
registerForm = this.fb.group({
  // array
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  email:['',[Validators.required,Validators.pattern('[0-9@.a-z]+$')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
})

constructor(private fb:FormBuilder,private api:ApiService,private router:Router) { }

register(){

  if(this.registerForm.valid){
    let uname = this.registerForm.value.uname
    let email = this.registerForm.value.email
    let pswd  = this.registerForm.value.pswd
    this.api.register(uname,email,pswd)
    .subscribe(
      // success
      (result:any)=>{
      alert(result.message) 
      // navigate login
      this.router.navigateByUrl('login')
    },
    // client error
    (result:any)=>{
      alert(result.error.message)
    }
    )
  }  
  else{
    alert('Invalid Form')
  }
  }
}