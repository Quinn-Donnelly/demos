import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FormManagerService} from "../form-manager.service";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  form: FormGroup;
  timesSubmitted = 0;
  submitted = false;
  secondsTillNextAvailableSubmit = 5;
  private interval = 0;

  constructor(private fb: FormBuilder, private formManager: FormManagerService) {
    this.form = this.fb.group({
      name: ['']
    });
  }

  onSubmit(): void {
    this.submitted = true;
    ++this.timesSubmitted;

    this.formManager.submit({
      title: `Reactive form - ${this.timesSubmitted}`,
      json: JSON.stringify(this.form.value, null, 2)
    });

    setTimeout(() => {
      this.submitted = false;
      window.clearInterval(this.interval);
    }, this.secondsTillNextAvailableSubmit * 1000);

    this.interval = window.setInterval(() => {
      this.secondsTillNextAvailableSubmit -= 1;
    }, 1000);

    this.form.reset();
  }
}
