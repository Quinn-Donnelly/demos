import { Component, OnInit } from '@angular/core';
import {FormInfo, FormManagerService} from '../form-manager.service';

@Component({
  selector: 'app-json-printer',
  templateUrl: './json-printer.component.html',
  styleUrls: ['./json-printer.component.css']
})
export class JsonPrinterComponent implements OnInit {
  public jsonInfoArray: FormInfo[] = [];

  private formManagerService: FormManagerService;

  constructor(formManagerService: FormManagerService) {
    this.formManagerService = formManagerService;
  }

  ngOnInit(): void {
    this.formManagerService.getObservable().subscribe((formInfo: FormInfo[]) => {
      this.jsonInfoArray = formInfo;
    });
  }
}
