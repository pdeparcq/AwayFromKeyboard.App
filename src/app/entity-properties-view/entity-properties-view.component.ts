import { Component, Input, OnInit } from '@angular/core';
import { afk as AwayFromKeyboard } from '../../apis/afkClients';

@Component({
  selector: 'app-entity-properties-view',
  templateUrl: './entity-properties-view.component.html',
  styleUrls: ['./entity-properties-view.component.sass']
})
export class EntityPropertiesViewComponent implements OnInit {

  @Input() entity? : AwayFromKeyboard.EntityDetails;
  addProperty? : AwayFromKeyboard.AddProperty;

  constructor(private entitiesClient: AwayFromKeyboard.EntitiesClient) { }

  ngOnInit(): void {
  }

  openNew(){
    this.addProperty = new AwayFromKeyboard.AddProperty({
      name: "",
      description: "",
      systemType: AwayFromKeyboard.SystemType.String
    });
  }

  hideDialog(){
    this.addProperty = undefined;
  }

  editProperty(property: AwayFromKeyboard.Property){
  }

  saveProperty(){
    this.entitiesClient.addProperty(this.entity!.id!, this.addProperty!).subscribe(() => {
      this.entity!.properties!.push(new AwayFromKeyboard.Property({
        name: this.addProperty!.name,
        description: this.addProperty!.description,
        systemType: AwayFromKeyboard.SystemType.String
      }));
      this.hideDialog();
    });
  }

  deleteProperty(property: AwayFromKeyboard.Property){
    this.entitiesClient.removeProperty(this.entity!.id!, property.name!).subscribe(() => this.entity!.properties!.splice(this.entity!.properties!.indexOf(property), 1));
  }
}
