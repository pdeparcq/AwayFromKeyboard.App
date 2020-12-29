import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-view',
  templateUrl: './entity-view.component.html',
  styleUrls: ['./entity-view.component.sass']
})
export class EntityViewComponent implements OnInit{

  @Input() entityId? : string;

  constructor(){}

  ngOnInit(): void {
  }
}
