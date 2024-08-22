import { Routes } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { StaffDetailsComponent } from './staff/staff-details/staff-details.component';

export const routes: Routes = [
  {
    path: '',
    component: StaffComponent,
    pathMatch: 'full'
  },
  {
    path: 'staff',
    children: [
      { path: ':id', component: StaffComponent, },
    ]
  },
];
