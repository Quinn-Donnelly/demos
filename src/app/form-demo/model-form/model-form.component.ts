import { Component, OnInit } from '@angular/core';
import {FormManagerService} from '../form-manager.service';
import {NgForm} from '@angular/forms';

export interface ModelFormData {
  name: string;
}

interface SubmissionTracker {
  nextSubmitDelay: number;
  intervalId: number;
}

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  SUBMIT_DELAY_IN_SECONDS = 5;
  INIT_MODEL = {
    name: ''
  };

  submitted = false;
  model: ModelFormData = this.INIT_MODEL;
  submissionTracker: SubmissionTracker = {
    nextSubmitDelay: 5,
    intervalId: 0
  };
  private submissionCount = 0;

  private formManagerService: FormManagerService;

  constructor(formManagerService: FormManagerService) {
    this.formManagerService = formManagerService;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.submitted = true;
    ++this.submissionCount;
    this.submissionTracker.nextSubmitDelay = this.SUBMIT_DELAY_IN_SECONDS;

    this.formManagerService.submit({
      title: `model form - ${this.submissionCount}`,
      json: JSON.stringify(this.model, null, 2)
    });

    this.delayReactivatingForm();
    form.reset();
  }

  private delayReactivatingForm(): void {
    setTimeout(() => {
      this.submitted = false;
      clearInterval(this.submissionTracker.intervalId);
    }, this.SUBMIT_DELAY_IN_SECONDS * 1000);

    this.submissionTracker.intervalId = window.setInterval(() => {
      this.submissionTracker.nextSubmitDelay -= 1;
    }, 1000);
  }
}
