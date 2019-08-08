import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
userList: User[]=[];

 addUser(frm){
var user: User;
user= frm.value;
this.userList.push(user);
 }

  constructor() { }

  ngOnInit() {
  }

}
