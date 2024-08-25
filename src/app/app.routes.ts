import { Routes } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { StaffDetailsComponent } from './staff/staff-details/staff-details.component';
import { StaffEditComponent } from './staff/staff-edit/staff-edit.component';

export const routes: Routes = [
  {
    path: '',
    component: StaffComponent,
    pathMatch: 'full'
  },
  {
    path: 'staff',
    children: [
      { path: '', component: StaffComponent, },
      { path: 'new', component: StaffEditComponent, },
      { path: ':id', component: StaffComponent, },
    ]
  },
  {
    path: 'staff/:id',
    component: StaffEditComponent,
  }
];
