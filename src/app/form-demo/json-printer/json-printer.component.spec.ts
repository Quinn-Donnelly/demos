import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPrinterComponent } from './json-printer.component';

describe('JsonPrinterComponent', () => {
  let component: JsonPrinterComponent;
  let fixture: ComponentFixture<JsonPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonPrinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
