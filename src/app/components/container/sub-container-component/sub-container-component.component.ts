import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-sub-container-component',
  templateUrl: './sub-container-component.component.html',
  styleUrls: ['./sub-container-component.component.scss']
})
export class SubContainerComponentComponent implements OnInit {

  @Input() averageTemprature;
  

  constructor() { }

  ngOnInit() {
  
  }

}
