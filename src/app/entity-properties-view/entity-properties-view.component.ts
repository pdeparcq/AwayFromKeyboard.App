import { Component, Input, OnInit } from '@angular/core';
import { afk as AwayFromKeyboard } from '../../apis/afkClients';

@Component({
  selector: 'app-entity-properties-view',
  templateUrl: './entity-properties-view.component.html',
  styleUrls: ['./entity-properties-view.component.sass']
})
export class EntityPropertiesViewComponent implements OnInit {

  @Input() entity? : AwayFromKeyboard.Entity;

  constructor() { }

  ngOnInit(): void {
  }
}
