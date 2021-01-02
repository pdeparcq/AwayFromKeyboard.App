import { Component, OnInit, Input } from '@angular/core';
import { afk as AwayFromKeyboard } from '../../apis/afkClients';

@Component({
  selector: 'app-entity-relations-view',
  templateUrl: './entity-relations-view.component.html',
  styleUrls: ['./entity-relations-view.component.sass']
})
export class EntityRelationsViewComponent implements OnInit {

  @Input() entity? : AwayFromKeyboard.EntityDetails;
  addRelation? : AwayFromKeyboard.AddRelation;
  entities : AwayFromKeyboard.Entity[] = [];
  multiplicities : any[] = [
    {
      "label": "One",
      "value": AwayFromKeyboard.Multiplicity.One
    },
    {
      "label": "Many",
      "value": AwayFromKeyboard.Multiplicity.Many
    }
  ]

  constructor(private entitiesClient: AwayFromKeyboard.EntitiesClient, private modulesClient: AwayFromKeyboard.ModulesClient) { }

  ngOnInit(): void {
    this.modulesClient.get().subscribe(modules => {
      this.entities = modules!.flatMap((m : any) => m.entities!)
    });
  }

  openNew(){
    this.addRelation = new AwayFromKeyboard.AddRelation({
      name: "",
      description: "",
      multiplicity: AwayFromKeyboard.Multiplicity.One,
      toEntityId: this.entities[0].id!
    });
  }

  hideDialog(){
    this.addRelation = undefined;
  }

  editRelation(relation: AwayFromKeyboard.EntityRelation){
  }

  saveRelation(){
    console.info(this.addRelation);
    this.entitiesClient.addRelation(this.entity!.id!, this.addRelation!).subscribe(() => {
      this.entity!.relations!.push(new AwayFromKeyboard.EntityRelation({
        name: this.addRelation!.name,
        description: this.addRelation!.description,
        multiplicity: this.addRelation!.multiplicity!,
        toEntity: this.entities.find(e => e.id! == this.addRelation!.toEntityId)
      }));
      this.hideDialog();
    });
  }

  deleteRelation(relation: AwayFromKeyboard.EntityRelation){
    this.entitiesClient.removeRelation(this.entity!.id!, relation.name!).subscribe(() => this.entity!.relations!.splice(this.entity!.relations!.indexOf(relation), 1));
  }
}
