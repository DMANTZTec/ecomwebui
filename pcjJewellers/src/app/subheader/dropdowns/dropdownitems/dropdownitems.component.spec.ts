import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownitemsComponent } from './dropdownitems.component';

describe('DropdownitemsComponent', () => {
  let component: DropdownitemsComponent;
  let fixture: ComponentFixture<DropdownitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
