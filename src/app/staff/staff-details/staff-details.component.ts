import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Staff } from '../../shared';
import { CommonModule } from '@angular/common';
import { MatSliderVisualThumb } from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-staff-details',
  standalone: true,
  imports: [
    MatGridListModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSliderVisualThumb,
    CommonModule,
    MatDividerModule
  ],
  templateUrl: './staff-details.component.html',
  styleUrl: './staff-details.component.scss'
})

export class StaffDetailsComponent implements OnInit, OnChanges {

  @Input() staffDetails?: Staff;
  staffForm!: FormGroup;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  heathDiesesColumns: string[] = ['#', 'position', 'name', 'description'];
  familyColumns: string[] = ['#', 'position', 'relationship', 'lastName', 'middleName', 'firstName', 'birthdate'];
  insuranceColumns: string[] = ['#', 'position', 'number', 'name', 'type'];
  passportColumns: string[] = ['#', 'position', 'number', 'issueDate', 'expirationDate'];
  academicProcessColumns: string[] = ['#', 'position', 'from', 'to', 'school'];
  activityHistoryColumns: string[] = ['#', 'position', 'from', 'to', 'type'];


  genderOptions: Array<{ value: 'male' | 'female', label: string }> = [
    { value: 'male', label: 'Nam' },
    { value: 'female', label: 'Nu' }
  ];

  ethnicityOptions: Array<{ value: string, label: string }> = [
    { value: 'kinh', label: 'Kinh' },
    { value: 'hoa', label: 'Hoa' },
    { value: 'tay', label: 'Tay' }
  ];

  religionOptions: Array<{ value: string, label: string }> = [
    { value: 'none', label: 'Khong' },
    { value: 'buddhism', label: 'Phat giao' }
  ];

  ngOnInit() {
    this.staffForm = new FormGroup({
      employeeId: new FormControl(''),
      lastName: new FormControl(''),
      middleName: new FormControl(''),
      firstName: new FormControl(''),
      birthdate: new FormControl(''),
      gender: new FormControl(''),
      ethnicity: new FormControl(''),
      religion: new FormControl(''),
      identityCard: new FormGroup({
        cmnd: new FormControl(''),
        cccd: new FormControl(''),
        issueDate: new FormControl(''),
        issuePlace: new FormControl(''),
      }),
      temporalResidence: new FormGroup({
        street: new FormControl(''),
        ward: new FormControl(''),
        commune: new FormControl(''),
        district: new FormControl(''),
        county: new FormControl(''),
        city: new FormControl(''),
        province: new FormControl(''),
      }),
      permanentResidence: new FormGroup({
        street: new FormControl(''),
        ward: new FormControl(''),
        commune: new FormControl(''),
        district: new FormControl(''),
        county: new FormControl(''),
        city: new FormControl(''),
        province: new FormControl(''),
      }),
      contact: new FormGroup({
        email: new FormControl(''),
        phone: new FormControl(''),
      }),

      health: new FormGroup({
        height: new FormControl(0),
        weight: new FormControl(0),
      }),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['staffDetails'] && this.staffDetails) {
      this.staffForm.patchValue({
        employeeId: this.staffDetails.employeeId,
        lastName: this.staffDetails.lastName,
        middleName: this.staffDetails.middleName,
        firstName: this.staffDetails.firstName,
        birthdate: this.staffDetails.birthdate,
        gender: this.staffDetails.gender,
        ethnicity: this.staffDetails.ethnicity,
        religion: this.staffDetails.religion,
        temporalResidence: this.staffDetails.temporalResidence,
        permanentResidence: this.staffDetails.permanentResidence,
        contact: this.staffDetails.contact,
        identityCard: this.staffDetails.identityCard,
        health: {
          height: this.staffDetails.health.height,
          weight: this.staffDetails.health.weight,
        },
      });
    }
  }

}