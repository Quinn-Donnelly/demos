import { Component, OnInit } from '@angular/core';
import {FormInfo, FormManagerService} from '../form-manager.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-json-printer',
  templateUrl: './json-printer.component.html',
  styleUrls: ['./json-printer.component.css']
})
export class JsonPrinterComponent implements OnInit {
  public jsonInfoArray$: Observable<FormInfo[]>;

  private formManagerService: FormManagerService;

  constructor(formManagerService: FormManagerService) {
    this.formManagerService = formManagerService;
    this.jsonInfoArray$ = this.formManagerService.getObservable();
  }

  ngOnInit(): void {
  }
}
