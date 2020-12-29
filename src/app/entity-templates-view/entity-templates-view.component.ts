import { Component, Input, OnInit } from '@angular/core';
import {afk as AwayFromKeyboard} from '../../apis/afkClients';

@Component({
  selector: 'app-entity-templates-view',
  templateUrl: './entity-templates-view.component.html',
  styleUrls: ['./entity-templates-view.component.sass']
})
export class EntityTemplatesViewComponent implements OnInit {

  @Input() entityId? : string;
  templates: Array<AwayFromKeyboard.Template> = [];
  
  constructor(private templatesClient : AwayFromKeyboard.TemplatesClient) { }

  ngOnInit(): void {
    this.templatesClient.getByMetaType(AwayFromKeyboard.MetaType.Entity).subscribe(t => this.templates = t!);
  }
}
