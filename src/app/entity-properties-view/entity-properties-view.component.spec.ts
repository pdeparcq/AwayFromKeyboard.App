import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityPropertiesViewComponent } from './entity-properties-view.component';

describe('EntityPropertiesViewComponent', () => {
  let component: EntityPropertiesViewComponent;
  let fixture: ComponentFixture<EntityPropertiesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityPropertiesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityPropertiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
