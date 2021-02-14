import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFormComponent } from './model-form.component';
import {FormsModule} from '@angular/forms';

describe('ModelFormComponent', () => {
  let component: ModelFormComponent;
  let fixture: ComponentFixture<ModelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
