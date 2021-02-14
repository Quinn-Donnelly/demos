import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDemoRoutingModule } from './form-demo-routing.module';
import { FormDemoComponent } from './form-demo.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { JsonPrinterComponent } from './json-printer/json-printer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormManagerService} from './form-manager.service';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [FormDemoComponent, ModelFormComponent, JsonPrinterComponent],
  providers: [FormManagerService],
  imports: [
    CommonModule,
    FormDemoRoutingModule,
    MatExpansionModule,
    FormsModule
  ]
})
export class FormDemoModule { }

