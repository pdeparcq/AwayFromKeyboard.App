import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityCodeViewComponent } from './entity-code-view.component';

describe('EntityCodeViewComponent', () => {
  let component: EntityCodeViewComponent;
  let fixture: ComponentFixture<EntityCodeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityCodeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityCodeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
