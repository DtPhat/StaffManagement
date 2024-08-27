import { Component, Input, OnChanges, OnInit, SimpleChanges, effect } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Staff } from '../../../shared';
import { CommonModule } from '@angular/common';
import { MatSliderVisualThumb } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute, Params } from '@angular/router';
import { StaffService } from '../../staff.service';
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

export class StaffDetailsComponent implements OnInit {

  // @Input() staffDetails?: Staff;
  staffDetails: Staff | null = null;
  staffForm!: FormGroup;
  id: string = '';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  heathDiesesColumns: string[] = ['#', 'position', 'name', 'description'];
  familyColumns: string[] = ['#', 'position', 'relationship', 'lastName', 'middleName', 'firstName', 'birthdate'];
  insuranceColumns: string[] = ['#', 'position', 'number', 'name', 'type'];
  passportColumns: string[] = ['#', 'position', 'number', 'issueDate', 'expirationDate'];
  academicProcessColumns: string[] = ['#', 'position', 'from', 'to', 'school'];
  activityHistoryColumns: string[] = ['#', 'position', 'from', 'to', 'type'];
   provinceOptions: Array<{ value: string, label: string }> = [
    { value: 'Ho Chi Minh', label: 'Ho Chi Minh' },
    { value: 'Hanoi', label: 'Hanoi' },
    { value: 'Da Nang', label: 'Da Nang' },
  ];
  
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
   streetOptions: Array<{ value: string, label: string }> = [
    { value: '123 Nguyen Trai', label: '123 Nguyen Trai' },
    { value: '456 Le Duan', label: '456 Le Duan' },
    { value: '789 Tran Hung Dao', label: '789 Tran Hung Dao' },
    { value: '321 Hai Ba Trung', label: '321 Hai Ba Trung' },
    { value: '101 Bach Dang', label: '101 Bach Dang' },
    { value: '202 Le Duan', label: '202 Le Duan' },
  ];
   wardOptions: Array<{ value: string, label: string }> = [
    { value: 'Ward 5', label: 'Ward 5' },
    { value: 'Ward 7', label: 'Ward 7' },
    { value: 'Ward 10', label: 'Ward 10' },
    { value: 'Ward 8', label: 'Ward 8' },
    { value: 'Ward 1', label: 'Ward 1' },
  ];
   districtOptions: Array<{ value: string, label: string }> = [
    { value: 'District 3', label: 'District 3' },
    { value: 'District 1', label: 'District 1' },
    { value: 'Dong Da', label: 'Dong Da' },
    { value: 'Ba Dinh', label: 'Ba Dinh' },
    { value: 'Hai Chau', label: 'Hai Chau' },
    { value: 'Thanh Khe', label: 'Thanh Khe' },
  ];

  constructor(
    private staffService: StaffService,
    private activatedRoute: ActivatedRoute,
  ) {
    effect(() => {
      this.staffDetails = this.staffService.getSelectedStaffMember()
      this.staffDetails && this.staffForm.setValue({
        employeeId: this.staffDetails.employeeId || '',
        lastName: this.staffDetails.lastName || '',
        middleName: this.staffDetails.middleName || '',
        firstName: this.staffDetails.firstName || '',
        birthdate: this.staffDetails.birthdate || '',
        gender: this.staffDetails.gender || '',
        ethnicity: this.staffDetails.ethnicity || '',
        religion: this.staffDetails.religion || '',
        temporalResidence: {
          street: this.staffDetails.temporalResidence?.street || '',
          ward: this.staffDetails.temporalResidence?.ward || '',
          commune: this.staffDetails.temporalResidence?.commune || '',
          district: this.staffDetails.temporalResidence?.district || '',
          county: this.staffDetails.temporalResidence?.county || '',
          city: this.staffDetails.temporalResidence?.city || '',
          province: this.staffDetails.temporalResidence?.province || '',
        },
        permanentResidence: {
          street: this.staffDetails.permanentResidence?.street || '',
          ward: this.staffDetails.permanentResidence?.ward || '',
          commune: this.staffDetails.permanentResidence?.commune || '',
          district: this.staffDetails.permanentResidence?.district || '',
          county: this.staffDetails.permanentResidence?.county || '',
          city: this.staffDetails.permanentResidence?.city || '',
          province: this.staffDetails.permanentResidence?.province || '',
        },
        contact: {
          email: this.staffDetails.contact?.email || '',
          phone: this.staffDetails.contact?.phone || '',
        },
        identityCard: {
          cmnd: this.staffDetails.identityCard?.cmnd || '',
          cccd: this.staffDetails.identityCard?.cccd || '',
          issueDate: this.staffDetails.identityCard?.issueDate || '',
          issuePlace: this.staffDetails.identityCard?.issuePlace || '',
        },
        health: {
          height: this.staffDetails.health?.height || 0,
          weight: this.staffDetails.health?.weight || 0,
        },
      });
    });
  }

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

}

