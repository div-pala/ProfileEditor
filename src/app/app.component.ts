import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profile Editor';
  pageTitle:string = "User Information" 

  user:User = {
    name : 'Divya',
    age : 10,
    favoriteColor : 'Orange'
  }

  formUser:User = {
    name : '',
    age : 0,
    favoriteColor : ''
  }
  displayEdit:boolean = false;

  toggleEdit():void {
    if(this.displayEdit == true){
      this.displayEdit=false;
    } else{
      this.pageTitle = "Update User Information";
      this.displayEdit=true;
    }
    //this.displayEdit == true? this.displayEdit=false : this.displayEdit=true;
  }

  saveChanges(form:NgForm):void {
    this.formUser.name = this.user.name;
    this.formUser.age = this.user.age;
    this.formUser.favoriteColor = this.user.favoriteColor;
  }

}
