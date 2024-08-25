import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDivider } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-edit',
  standalone: true,
  imports: [
    MatGridListModule,
    MatDivider,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './staff-edit.component.html',
  styleUrl: './staff-edit.component.scss'
})

export class StaffEditComponent implements OnInit {
  id: string = '';
  editMode = false;
  staffForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private staffService: StaffService,
    private router: Router
  ) { }

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


  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    this.staffForm = new FormGroup({
      picture: new FormControl(''),
      lastName: new FormControl('', Validators.required),
      middleName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      ethnicity: new FormControl('', Validators.required),
      religion: new FormControl('', Validators.required),
      identityCard: new FormGroup({
        cmnd: new FormControl('', Validators.required),
        cccd: new FormControl('', Validators.required),
        issueDate: new FormControl('', Validators.required),
        issuePlace: new FormControl('', Validators.required),
      }),
      temporalResidence: new FormGroup({
        street: new FormControl('', Validators.required),
        ward: new FormControl('', Validators.required),
        commune: new FormControl('', Validators.required),
        district: new FormControl('', Validators.required),
        county: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        province: new FormControl('', Validators.required),
      }),
      permanentResidence: new FormGroup({
        street: new FormControl('', Validators.required),
        ward: new FormControl('', Validators.required),
        commune: new FormControl('', Validators.required),
        district: new FormControl('', Validators.required),
        county: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        province: new FormControl('', Validators.required),
      }),
      contact: new FormGroup({
        email: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
      }),
      health: new FormGroup({
        height: new FormControl(0, Validators.required),
        weight: new FormControl(0, Validators.required),
        disease: new FormArray([])
      }),
      family: new FormArray([])
    });
  }

  get staffHealthDieases() {
    return this.staffForm.get('health')?.get('disease') as FormArray;
  }

  onAddHealthDiease() {
    (<FormArray>this.staffForm.get('health')?.get('disease')).push(
      new FormGroup({
        'name': new FormControl('', Validators.required),
        'description': new FormControl('', Validators.required)
      })
    );
  }

  onDeleteHealthDiease(index: number) {
    (<FormArray>this.staffForm.get('health')?.get('disease')).removeAt(index);
  }

  get staffFamily() {
    return this.staffForm.get('family') as FormArray;
  }

  onAddFamily() {
    (<FormArray>this.staffForm.get('family')).push(
      new FormGroup({
        'relationship': new FormControl('', Validators.required),
        'firstName': new FormControl('', Validators.required),
        'middleName': new FormControl('', Validators.required),
        'lastName': new FormControl('', Validators.required),
        'birthdate': new FormControl('', Validators.required),
      })
    );
  }

  onDeleteFamily(index: number) {
    (<FormArray>this.staffForm.get('health')?.get('disease')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  onSubmit() {
    if (this.editMode) {
      // this.staffService.updatestaff(this.id, this.staffForm.value);
    } else {
      this.staffService.addStaffMember(this.staffForm.value);
    }
    this.onCancel();
  }

}
