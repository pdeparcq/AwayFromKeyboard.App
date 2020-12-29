import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityViewComponent } from './entity-view/entity-view.component';

import {InputTextareaModule} from 'primeng/inputtextarea';

import {afk as AwayFromKeyboard} from '../apis/afkClients'
import {environment} from '../environments/environment';
import { CodeViewComponent } from './code-view/code-view.component'
import { HighlightService } from '../services/highlight.service';

@NgModule({
  declarations: [
    AppComponent,
    EntityViewComponent,
    CodeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: AwayFromKeyboard.API_BASE_URL,
      useValue: environment.apiBaseUrl
    },
    HighlightService,
    AwayFromKeyboard.TemplatesClient,
    AwayFromKeyboard.EntitiesClient,
    InputTextareaModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
