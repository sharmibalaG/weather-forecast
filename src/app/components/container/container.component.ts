import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})


export class ContainerComponent implements OnInit {

  selectdCity: string;
  appId: string = '0fc34b0cf9121807755d2f94f3b35e88';
  API_URL = 'http://api.openweathermap.org/data/2.5/forecast?';
  tableData: any
  weatherDataListCollection: any;
  dt_txt: any;
  averageTemprature;
  lineGraphData;

  constructor(private http: HttpClient) { }

  ngOnInit() { }


  //emitted Value
  getSelectedCity(selectdCity) {
    this.selectdCity = selectdCity;
    this.getTableData(this.selectdCity);
  }

  //get the table data

  getTableData(selectedId) {
    this.http.get(this.API_URL, {
      params: {
        id: selectedId,
        APPID: this.appId
      },
      observe: 'response'
    })
      .toPromise()
      .then(response => {
        this.tableData = response.body;
        this.formtTableData(this.tableData);

      })
      .catch(console.log);
  }

  //get the table data

  formtTableData(cityReport) {

    let weatherDataList = [];
    let headerData = [];

    for (let i = 0; i < cityReport.list.length; i++) {
      weatherDataList.push({
        foreCastDate: cityReport.list[i].dt_txt.substr(0, 11),
        foreCasttime: cityReport.list[i].dt_txt.substr(11, 17),
        pressure: cityReport.list[i].main.pressure,
        temp: cityReport.list[i].main.temp,       
        weather: cityReport.list[i].weather[0].description,       
      });
    }

    //calculate pressure
    let total = 0;
    let temp;
    let graphData = [];

    for (let g = 0; g < weatherDataList.length; g++) {
      let pressureKpa = weatherDataList[g].pressure / 10;
      temp = total + pressureKpa;
      total = temp;     
    }
    temp = temp / 40;
    this.averageTemprature = temp;
   

    let finalDataCollection = this.groupBy(weatherDataList, "foreCastDate");
    this.weatherDataListCollection = finalDataCollection;         
  }


  //arrange the table value
  groupBy(collection, property) {

    var i = 0, firstDate, index, result = [], firstTime;
    var temparr = {
      foreCastDate: String
    };
    var flag = true;
    var content = "{foreCastDate:" + collection[0].foreCastDate + "}";

    for (; i < collection.length; i++) {
      firstDate = collection[i].foreCastDate;
      firstTime = collection[i].foreCasttime;
      if ((firstTime == "00:00:00") && (flag == true)) {
        flag = false;
      }

      if ((firstTime != "00:00:00") && (flag == true)) {
        var j = 0;
        var newGridElement = {
          foreCastDate: collection[0].foreCastDate,
          pressure:0
        };
        switch (firstTime) {

          case "03:00:00":
       
            result.push(newGridElement);
            break;

          case "06:00:00":
            for (j = 0; j < 2; j++) {
              result.push(newGridElement);
            }
          //  j = 1;
            break;

          case "09:00:00":
            for ( j = 0; j < 3; j++) {
              result.push(newGridElement);
            }
            
            break;

          case "12:00:00":
            for ( j = 0; j < 4; j++) {
              result.push(newGridElement);
            }
            break;

          case "15:00:00":
            for ( j = 0; j < 5; j++) {
              result.push(newGridElement);
            }
            break;

          case "18:00:00":
            for ( j = 0; j < 6; j++) {
              result.push(newGridElement);
            } 
            break;

          case "21:00:00":
            for (j = 0; j < 7; j++) {
              result.push(newGridElement);
            }
            break;
        }
        result.push(collection[i]);
        flag = false;
      }
      else {
        result.push(collection[i]);
      }
    }

    let finalSet = this.finalFilterArray(result, "foreCastDate")
    return finalSet;
  }


  finalFilterArray(dataCollection, property) {
    var i = 0, val, index, values = [], finalArray = [];
    for (; i < dataCollection.length; i++) {
      val = dataCollection[i][property];
      index = values.indexOf(val);

      if (index > -1)
        finalArray[index].push(dataCollection[i]);
      else {
        values.push(val);
        finalArray.push([dataCollection[i]]);
      }
    }

    return finalArray;
  }

}
