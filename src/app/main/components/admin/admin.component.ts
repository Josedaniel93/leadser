import { Router } from '@angular/router';
import { CreateLogin } from './../../../shared/models/login.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from './service/admin.service';
//Here we declare all we need on this document
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  //Select options
  options: string[];
  //Actual selected option
  action: string;
  //This objects will dictate the datatype
  generateWorkerUserForm: FormGroup;
  generateBusinessUserForm: FormGroup;
  login: CreateLogin;
  showMsg: boolean;
  //On constructor we call services and other builders
  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router) {
    this.showMsg = false;
    this.action = "";
    this.options = ["createWorker", 'createBusiness']
  }

  ngOnInit(): void {
    //On init we will create an object with those features
    this.generateWorkerUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['Worker']
    });

    this.generateBusinessUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['Business']
    });
  }

  //When we press on generate user Worker or Business, we call this functions wich sends the object login to admin service
  generateBusinessUser() {
    this.login = this.generateBusinessUserForm.value
    this.adminService.createBusinessUser(this.login);
  }
  generateWorkersUser() {
    this.login = this.generateWorkerUserForm.value
    this.adminService.createWorkersUser(this.login);
    this.router.navigate(["/main/admin"]);
  }




}
