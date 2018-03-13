import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './heroes-detail/detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroService }          from './heroes/hero.service';
import { MessageService }       from './messages/message.service';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  providers: [
    HeroService,
    MessageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }