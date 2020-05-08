import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'nc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Nested Components - Parent Form';
  parentForm: FormGroup;
  name: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.parentForm = this.fb.group({
      firstName: ['Set by Parent!', Validators.required]
    });
  }

  onfirstNameChanged(output: string): void {
    this.name = output;
  }
}
