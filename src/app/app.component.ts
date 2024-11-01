import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './users';
import { ChildUser } from './child-user';
import { ParentUser } from './parent-user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Saba Ghvinjilia';
  readData:any;
  ParentFunction(data:any){
    console.log(data);
    this.readData=data;
  }
}
export class UsersComponent {
user:Users [] = [
  {
    FirstName: 'Saxeli_1',
    LastName: 'Gvari_1',
    Age:22
  },
  {
    FirstName: 'Saxeli_2',
    LastName: 'Gvari_2',
    Age:6
  },
  {
    FirstName: 'Saxeli_3',
    LastName: 'Gvari_3',
    Age:20
  },
  {
    FirstName: 'Saxeli_4',
    LastName: 'Gvari_4',
    Age:25
  },
  {
    FirstName: 'Saxeli_5',
    LastName: 'Gvari_5',
    Age:18
  }
]
}
export class UsersComponent {
  users:ParentUser[] = [
    { 
      Id:1,
      FirstName:"Saxeli",
      LastName:"Gvari",
      DateOfBirth:"",
      PhoneNumber:123,
      Email:"email@gmail.com"
    }
  ]
}

export class UsersComponent {
  @Output() ParentFunction: EventEmitter<any> = new EventEmitter();
  users:ChildUser[] = [
    {
      Id:1,
      FirstName:"Saxeli",
      LastName:"Gvari",
      DateOfBirth:"",
      PhoneNumber:123,
      Email:"email@gmail.com"
    }
  ]
  sendData(){
    this.ParentFunction.emit(this.users);
  }
}