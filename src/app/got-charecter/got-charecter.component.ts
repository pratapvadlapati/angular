import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-got-charecter',
  templateUrl: './got-charecter.component.html',
  styleUrls: ['./got-charecter.component.css']
})
export class GotCharecterComponent implements OnInit {

  GotCharecter:string[];
  GotCharecterFirstName:string[]=['John','Arya','Cersi','Daenerys'];
  GotCharecterLastName:string[]=['Snow','Stark','Lanister','Tregarys'];

  @Input()imageUrlChild:string;

  i=0;
  stopSwitch:any;
  swithStatus = true;
  twoWayData='Tyriyan';

  switchFirstAndLast(){
    this.stopSwitch=setInterval(()=>{
      if(this.i%2 == 0){
      this.GotCharecter=this.GotCharecterFirstName;
      console.log('am in if')
      
      }
      else{
        this.GotCharecter=this.GotCharecterLastName;
        console.log('am in else')
        
      }
      this.i++;
      console.log('am in if')
    },3000)
    this.swithStatus=false;
  }

//stop

Stop(){
  clearInterval(this.stopSwitch);
  this.swithStatus=true;
}

  constructor() { 
    this.GotCharecter=this.GotCharecterFirstName;
  }

  ngOnInit() {
    console.log(this.imageUrlChild);
  }

}
