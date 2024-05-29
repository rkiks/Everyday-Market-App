import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  provinces: string[] = [ 'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick','Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan' ]; 

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dob: ['', Validators.required],
      street: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      province: ['', Validators.required],
      country: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.router.navigate(['/products']);
    }
  }
}