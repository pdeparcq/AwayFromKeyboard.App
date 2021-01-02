import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityRelationsViewComponent } from './entity-relations-view.component';

describe('EntityRelationsViewComponent', () => {
  let component: EntityRelationsViewComponent;
  let fixture: ComponentFixture<EntityRelationsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityRelationsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityRelationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
