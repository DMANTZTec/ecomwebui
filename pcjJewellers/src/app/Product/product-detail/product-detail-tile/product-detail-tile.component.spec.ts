import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailTileComponent } from './product-detail-tile.component';

describe('ProductDetailTileComponent', () => {
  let component: ProductDetailTileComponent;
  let fixture: ComponentFixture<ProductDetailTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
