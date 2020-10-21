import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocConversionComponent } from './doc-conversion.component';

describe('DocConversionComponent', () => {
  let component: DocConversionComponent;
  let fixture: ComponentFixture<DocConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocConversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
