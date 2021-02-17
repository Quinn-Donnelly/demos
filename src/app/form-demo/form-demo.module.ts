import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDemoRoutingModule } from './form-demo-routing.module';
import { FormDemoComponent } from './form-demo.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { JsonPrinterComponent } from './json-printer/json-printer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormManagerService} from './form-manager.service';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {MatIconModule} from '@angular/material/icon';
import {NgPipesModule} from 'ngx-pipes';


@NgModule({
  declarations: [FormDemoComponent, ModelFormComponent, JsonPrinterComponent, ReactiveFormComponent],
  providers: [FormManagerService],
  imports: [
    CommonModule,
    FormDemoRoutingModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    NgPipesModule
  ]
})
export class FormDemoModule { }

