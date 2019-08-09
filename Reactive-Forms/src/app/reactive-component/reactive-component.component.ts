import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-component',
  templateUrl: './reactive-component.component.html',
  styleUrls: ['./reactive-component.component.css']
})
export class ReactiveComponentComponent implements OnInit {

  userList:User[]=[];

  form: FormGroup;

  addUser(form){
    this.userList.push(this.form.value);
    
  }

  constructor() {

   }

  ngOnInit() {
    this.form = new FormGroup({
      name:    new FormControl('', Validators.required),
      contact: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      email:   new FormControl('', [Validators.required, Validators.email])
    })
  }

}
