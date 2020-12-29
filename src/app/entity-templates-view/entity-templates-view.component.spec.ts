import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTemplatesViewComponent } from './entity-templates-view.component';

describe('EntityTemplatesViewComponent', () => {
  let component: EntityTemplatesViewComponent;
  let fixture: ComponentFixture<EntityTemplatesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityTemplatesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTemplatesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
