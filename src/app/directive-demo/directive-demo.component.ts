import { Component, OnInit } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {

  dcHeros:string[]=['Batman', 'Superman', 'WonderWoman', 'Flash'];
  index=0;
  toggleHerosFlag:boolean= true;
  selectedHero:string;

  selectHero(hero){
    this.selectedHero = hero;
    console.log(hero);
  }

  toggleHeros(){
    this.toggleHerosFlag = !this.toggleHerosFlag;
  }

  constructor() { }

  ngOnInit() {
  }

}
