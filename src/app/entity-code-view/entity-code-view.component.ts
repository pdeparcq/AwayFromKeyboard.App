import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {afk as AwayFromKeyboard} from '../../apis/afkClients';

@Component({
  selector: 'app-entity-code-view',
  templateUrl: './entity-code-view.component.html',
  styleUrls: ['./entity-code-view.component.sass']
})
export class EntityCodeViewComponent implements OnInit, OnDestroy{

  @Input() templateId? : string;
  @Input() entityId? : string;
  templateValue : string = "";
  generatedCode : string = "";
  private modelChanged: Subject<string> = new Subject<string>();
  private subscription?: Subscription;
  debounceTime = 500;

  constructor(
    private templatesClient: AwayFromKeyboard.TemplatesClient,
    private entitiesclient: AwayFromKeyboard.EntitiesClient){ 
  }

  ngOnInit(): void {
    // Delay execution when model changed
    this.subscription = this.modelChanged
      .pipe(
        debounceTime(this.debounceTime),
      )
      .subscribe(value => {
        this.onTemplateChangedDelayed(value);
      });

    this.templatesClient.getById(this.templateId!).subscribe(t => 
      {
        this.templateValue = t?.value!;
        this.generateCode();
      });
  }

  onTemplateChanged(): void{
    this.modelChanged.next(this.templateValue);
  }

  onTemplateChangedDelayed(value: string): void {
    this.templatesClient.update(this.templateId!, new AwayFromKeyboard.UpdateTemplate({
      value: value
    })).subscribe(t => 
      {
        this.generateCode();
      });
  }

  generateCode() : void {
    this.entitiesclient.generate(this.entityId!, this.templateId!).subscribe(gc => {
      this.generatedCode = gc?.value!;
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
