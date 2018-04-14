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
 
@NgModule({
  declarations: [
    AppComponent,
    TrainsComponent,
    TrainDetailComponent,
    MessagesComponent
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