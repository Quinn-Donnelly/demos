import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface FormInfo {
  title: string;
  json: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormManagerService {

  private formInformation$: BehaviorSubject<FormInfo[]> = new BehaviorSubject<FormInfo[]>([]);

  constructor() { }

  public submit(formInfo: FormInfo): void {
    const newValue = this.formInformation$.value;
    newValue.push(formInfo);
    this.formInformation$.next(newValue);
  }

  public getObservable(): Observable<FormInfo[]> {
    return this.formInformation$.asObservable();
  }
}
