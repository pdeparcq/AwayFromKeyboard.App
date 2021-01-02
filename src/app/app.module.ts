import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityViewComponent } from './entity-view/entity-view.component';

import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import {SplitterModule} from 'primeng/splitter';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';

import {afk as AwayFromKeyboard} from '../apis/afkClients'
import {environment} from '../environments/environment';
import { CodeViewComponent } from './code-view/code-view.component'
import { HighlightService } from '../services/highlight.service';
import { EntityTemplatesViewComponent } from './entity-templates-view/entity-templates-view.component';
import { EntityCodeViewComponent } from './entity-code-view/entity-code-view.component';
import { EntityPropertiesViewComponent } from './entity-properties-view/entity-properties-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EntityViewComponent,
    CodeViewComponent,
    EntityTemplatesViewComponent,
    EntityCodeViewComponent,
    EntityPropertiesViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    TabViewModule,
    AccordionModule,
    InputTextModule,
    InputTextareaModule,
    SplitterModule,
    TableModule,
    PanelModule,
    ButtonModule,
    ToolbarModule,
    DialogModule
  ],
  providers: [
    {
      provide: AwayFromKeyboard.API_BASE_URL,
      useValue: environment.apiBaseUrl
    },
    HighlightService,
    AwayFromKeyboard.TemplatesClient,
    AwayFromKeyboard.EntitiesClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
