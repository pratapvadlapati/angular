import { Component } from '@angular/core';

@Component({
    selector: "app-first",
    templateUrl: 'first.component.html',
    styleUrls: ['first.component.css']
})

export class FirstComponent{
    
     //property binding

     imgUrl:string = 'firtst-app\src\app\first\mickym.png';
    
     //event-binding
     headingTwo:string='I love interpolation!';
     changeData(){
        this.headingTwo = "now I love event biding";
     }

    //Interpolation
    test:string = "this is to test interpolation";
    returnString() {
        return "I am component, first component, again n again";

       
    }
}