import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbootstrapModule } from './components/ngbootstrap/ngbootstrap.module';
import { NgxSelectModule, INgxSelectOptions  } from 'ngx-select-ex';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { CityDropdownComponent } from './components/container/city-dropdown/city-dropdown.component';
import { TableComponentComponent } from './components/container/table-component/table-component.component';
import { SubContainerComponentComponent } from './components/container/sub-container-component/sub-container-component.component';


const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'id',
  optionTextField: 'name',
  keepSelectedItems: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    CityDropdownComponent,
    TableComponentComponent,
    SubContainerComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbootstrapModule,
    NgxSelectModule.forRoot(CustomSelectOptions),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
