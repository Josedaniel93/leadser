import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  options: string[];
  action: string;
  generateWorkerUserForm: FormGroup;
  generateBusinessUserForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.action = "";
    this.options = ["createWorker", 'createBusiness']

  }

  ngOnInit(): void {


    this.generateWorkerUserForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.email],
    });

    this.generateBusinessUserForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.email],
    });
  }

  generateBusinessUser() {

  }
  generateWorkersUser() {

  }




}
