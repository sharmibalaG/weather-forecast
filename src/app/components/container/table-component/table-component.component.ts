import { Component, OnInit , Input } from '@angular/core';


@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})


export class TableComponentComponent implements OnInit {

  @Input() weatherDataListCollection;
  
  constructor() { }

  ngOnInit() {
   
  }

}
