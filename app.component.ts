import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './custom-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit(){
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required,CustomValidator.invalidProjectName, 
        CustomValidator.asyncInvaidProjectName]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });
  }

  onSubmit(){
    console.log(this.projectForm.value);
    
  }
}
