import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

 
@Component({
    selector: 'city-dropdown',
    templateUrl: './city-dropdown.component.html'
})
export class CityDropdownComponent implements  OnInit {

    public items:any; 
    public  selectControl = new FormControl();
    configUrl ='assets/city.json';  
    @Output() getSelectedCity: EventEmitter<number> = new EventEmitter();
    
 
    constructor(private http: HttpClient) {}

    ngOnInit() {
      this.http.get(this.configUrl)
        .subscribe(data =>  {                     
          this.items = data;      
        });

         this.selectControl.valueChanges.subscribe(value =>
          this.getSelectedCity.emit(value)
         );
    
    }
 
    public defaultCity(): any {
      if(this.items != null)
        return this.items[0].id;
    }   
}