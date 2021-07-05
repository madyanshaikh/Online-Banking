import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var $: any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  ngOnInit(): void{
    $(document).ready(function() {
      $("#show_hide_password a").on('click', function(event: { preventDefault: () => void; }){
          event.preventDefault();
          if($('#show_hide_password input').attr("type") == "text"){
              $('#show_hide_password input').attr('type', 'password');
              $('#show_hide_password i').addClass( "fa-eye-slash" );
              $('#show_hide_password i').removeClass( "fa-eye" );
          }else if($('#show_hide_password input').attr("type") == "password"){
              $('#show_hide_password input').attr('type', 'text');
              $('#show_hide_password i').removeClass( "fa-eye-slash" );
              $('#show_hide_password i').addClass( "fa-eye" );
          }
      });
  });
  }
  username = ''
  password = ''

  constructor(private snackbar: MatSnackBar, private router: Router) { }


 
  onlogin() {
    if (this.username == 'admin' && this.password == 'admin123') {
      sessionStorage.setItem("isLogedIn", "true")
      this.router.navigate(['dashboard'])
    }
    else {
      this.snackbar.open("Invalid Username Or Password", "okay", { duration: 3000 })
    }

  }
  
}
