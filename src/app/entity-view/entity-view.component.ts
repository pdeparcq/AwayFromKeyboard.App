import { Component, Input, OnInit } from '@angular/core';
import { afk as AwayFromKeyboard } from '../../apis/afkClients';

@Component({
  selector: 'app-entity-view',
  templateUrl: './entity-view.component.html',
  styleUrls: ['./entity-view.component.sass']
})
export class EntityViewComponent implements OnInit{

  @Input() entityId? : string;

  entity?: AwayFromKeyboard.EntityDetails

  constructor(private entitiesClient : AwayFromKeyboard.EntitiesClient){}

  ngOnInit(): void {
    this.entitiesClient.getDetails(this.entityId!).subscribe(e => this.entity = e!);
  }
}
