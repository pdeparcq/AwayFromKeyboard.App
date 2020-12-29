import { Component, Input, OnInit } from '@angular/core';
import {afk as AwayFromKeyboard} from '../../apis/afkClients';

@Component({
  selector: 'app-entity-view',
  templateUrl: './entity-view.component.html',
  styleUrls: ['./entity-view.component.sass']
})
export class EntityViewComponent implements OnInit {

  @Input() entityId? : string = undefined;
  template : AwayFromKeyboard.Template | null = null;
  generatedCode : string = "";

  constructor(
    private templatesClient: AwayFromKeyboard.TemplatesClient,
    private entitiesclient: AwayFromKeyboard.EntitiesClient){ 
    }

  ngOnInit(): void {
    this.templatesClient.getById(this.entityId!).subscribe(t => 
      {
        this.onTemplateUpdated(t!);
      });
  }

  onTemplateChanged(): void {
    console.info(event);
    this.templatesClient.update(this.template!.id!, new AwayFromKeyboard.UpdateTemplate({
      value: this.template?.value!
    })).subscribe(t => 
      {
        this.onTemplateUpdated(t!);
      });
  }

  onTemplateUpdated(template: AwayFromKeyboard.Template): void {
    this.template = template;
        this.entitiesclient.generate("10e31858-9c19-4abb-bc5b-eaebe407fbc3", this.template?.id!).subscribe(gc => {
          this.generatedCode = gc?.value!;
        })
  }
}
