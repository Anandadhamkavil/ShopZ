import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 // login form group
 loginForm = this.fb.group({
  // array
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
})

 constructor(private fb:FormBuilder,private api:ApiService,private router:Router) { }

 login(){

  if(this.loginForm.valid){
    let uname = this.loginForm.value.uname
    let pswd  = this.loginForm.value.pswd
    this.api.login(uname,pswd)
    .subscribe(
      // success
      (result:any)=>{
      alert(result.message) 
      // navigate login
       this.router.navigateByUrl('')
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

