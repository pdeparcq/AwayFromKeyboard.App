import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityViewComponent } from './entity-view/entity-view.component';

import {InputTextareaModule} from 'primeng/inputtextarea';
import {TabViewModule} from 'primeng/tabview';

import {afk as AwayFromKeyboard} from '../apis/afkClients'
import {environment} from '../environments/environment';
import { CodeViewComponent } from './code-view/code-view.component'
import { HighlightService } from '../services/highlight.service';
import { EntityTemplatesViewComponent } from './entity-templates-view/entity-templates-view.component';
import { EntityCodeViewComponent } from './entity-code-view/entity-code-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EntityViewComponent,
    CodeViewComponent,
    EntityTemplatesViewComponent,
    EntityCodeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    TabViewModule
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
