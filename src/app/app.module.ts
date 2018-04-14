import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { TrainsComponent } from './trains/trains.component';
import { TrainDetailComponent } from './train-detail/train-detail.component';
import { TrainService } from './train.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
 
@NgModule({
  declarations: [
    AppComponent,
    TrainsComponent,
    TrainDetailComponent,
    MessagesComponent,
    DashboardComponent
	HttpClientModule,

	// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
	// and returns simulated server responses.
	// Remove it when a real server is ready to receive requests.
	HttpClientInMemoryWebApiModule.forRoot(
	InMemoryDataService, { dataEncapsulation: false }
)	
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    TrainService,
    MessageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }